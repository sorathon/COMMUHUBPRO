import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

function LisensPage() {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  // ฟังก์ชันส่งข้อความ

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back-ios" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>License plates Registration</Text>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            /* Logic for call button */
          }}></TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', paddingHorizontal: 10,
        paddingVertical: 20,
        paddingBottom: 30,width:'100%'}}>
        <View style={styles.inputContainer}>
          <TouchableOpacity >
            <Ionicons name="directions-car" size={24} color="#4A90E2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} onPress={()=>navigation.navigate('Car')}>
            <Text style={styles.registext}>Car registration</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity >
            <Ionicons name="motorcycle" size={24} color="#4A90E2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input} onPress={()=>navigation.navigate('Moto')}>
            <Text style={styles.registext}>Moto registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  viewcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
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
    padding: 8,
    borderRadius: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
  },
  messageContentArea: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal:10,
    fontSize: 16,
    
    borderRadius: 15,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  disabledButton: {
    backgroundColor: '#a0c0e4',
  },
  button: {
    width: '100%',
    padding: 25,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  registext: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 150,
    paddingBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 5,
    marginHorizontal: 22,
    marginVertical: 10,
    justifyContent: 'center',
    width: '90%',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 10, // ให้ไอคอนอยู่ขวาสุดของ input
  },
});
export default LisensPage;
