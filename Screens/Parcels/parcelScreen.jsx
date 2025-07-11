import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // 🟢 เพิ่ม navigation hook
import Ionicons from 'react-native-vector-icons/Ionicons';

const parcels = [
  { id: '1-111', name: 'พัสดุ สแตมป์สุดหล่อ' },
  { id: '1-112', name: 'พัสดุ สแตมป์' },
  { id: '1-113', name: 'พัสดุ สแตมป์' },
  { id: '1-114', name: 'พัสดุ สแตมป์' },
  { id: '1-115', name: 'พัสดุ สแตมป์' },
];

const ParcelPage = () => {
  const navigation = useNavigation(); // 🟢 ใช้ navigation

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Parcel List</Text>
        <View style={styles.headerButton} />
      </View>

      {/* Parcel List */}
      <FlatList
        data={parcels}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.parcelItem}
            onPress={() => navigation.navigate('ParcelDetail', { id: item.id, name: item.name })} // 🟢 เพิ่มการนำทาง
          >
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.icon} />
            <View>
              <Text style={styles.parcelName}>{item.name}</Text>
              <Text style={styles.parcelId}>{item.id}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

// 🔵 หน้ารายละเอียดของพัสดุ
const ParcelDetailScreen = ({ route }) => {
  const { id, name } = route.params; // 🟢 รับค่าที่ส่งมาจากหน้า ParcelPage

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.receivedText}>RECEIVED</Text>
      <View style={styles.parcelDetailBox}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.detailIcon} />
        <Text style={styles.parcelDetailText}>{name} ({id})</Text>
      </View>
    </View>
  );
};

// 🔵 StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    elevation: 2,
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  parcelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  parcelName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  parcelId: {
    fontSize: 14,
    color: 'gray',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receivedText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  parcelDetailBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  detailIcon: {
    width: 80,
    height: 80,
  },
  parcelDetailText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// 🟢 Export ทั้งสองหน้า
export default ParcelPage;
