import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function MyCalendarPage() {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState('');

  const addEvent = () => {
    if (!selectedDate || !newEvent) return;

    setEvents(prevEvents => ({
      ...prevEvents,
      [selectedDate]: [...(prevEvents[selectedDate] || []), newEvent],
    }));

    setMarkedDates(prevMarkedDates => ({
      ...prevMarkedDates,
      [selectedDate]: {selected: true, selectedColor: '#C4C4FF', selectedTextColor: 'white',  selectedStyle: {
        borderRadius: 25, 
        width: 30, 
        height: 30, 
        
      }},
    }));

    setNewEvent('');
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Calendar</Text>
        <View style={styles.headerButton} />
      </View>
      <View style={{padding: 5}}>
        <Calendar
          onDayPress={day => setSelectedDate(day.dateString)}
          markedDates={markedDates}
          theme={{
            calendarBackground: 'white',
            textMonthFontSize: 20,
            textMonthFontWeight: 'bold',
            monthTextColor: 'black',
            arrowColor: 'black',
          }}
          renderHeader={date => (
            <Text
              style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              {date.toString('MMMM yyyy')}
            </Text>
          )}
        />
      <ScrollView>
        <TouchableOpacity style={{marginTop: 20}}>
          <View style={styles.inputContainer}>
            <TouchableOpacity >
              <MaterialIcons name="event" size={24} color="#4A90E2" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <Text style={{fontWeight: 'bold'}}>My Event</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.card}>
            <Text style={{fontSize: 18, color:"#4A90E2"}}>
              Events on {selectedDate || 'Select a date'}:
            </Text>
            <FlatList
              data={events[selectedDate] || []}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Text style={{fontSize: 16, padding: 5}}> {item}</Text>
              )}
            />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <TouchableOpacity >
              <MaterialIcons name="event-note" size={24} color="#4A90E2" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
            <Text style={{fontWeight: 'bold'}}>Public Event</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.card}>
            <Text style={{fontSize: 18, color:"#4A90E2"}}>
              Event not found
            </Text>
            
          </TouchableOpacity>
        
          
        </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setModalVisible(true)}>
          <View style={styles.circleButton}>
            <Ionicons name="calendar-plus-o" size={24} color="white" />
          </View>
        </TouchableOpacity>
        

        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                width: 400,
                padding: 20,
                backgroundColor: 'white',
                borderRadius: 10,
              }}>
              <Text>Select Date for Event</Text>
              <Calendar
                onDayPress={day => setSelectedDate(day.dateString)}
                renderHeader={date => (
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    {date.toString('MMMM yyyy')}
                  </Text>
                )}
              />
              <Text style={{fontSize: 18, marginTop: 20}}>
                Events on {selectedDate || 'Select a date'}:
              </Text>
              <TextInput
                placeholder="Enter event name"
                value={newEvent}
                onChangeText={setNewEvent}
                style={{borderBottomWidth: 1, marginBottom: 10, padding: 5}}
              />
              <Button title="Save Event" onPress={addEvent} />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{marginTop: 10}}>
                <Text style={{color: 'red', textAlign: 'center'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#21217A',
    marginLeft:-30
  },
  inputcon: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    padding: 10,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20, // ทำให้เป็นวงกลม
    backgroundColor: '#4A90E2', // สีพื้นหลัง (เปลี่ยนได้)
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
    marginLeft: 330,
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 80, 
    backgroundColor: '#21217A', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    margin: 10,

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#EAEAEA',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    fontSize: 16,

    borderRadius: 15,
  },
});

export default MyCalendarPage;
