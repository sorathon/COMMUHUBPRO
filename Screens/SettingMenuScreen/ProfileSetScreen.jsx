
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';


function Profileset( props) {

  console.log(props);
  const [userData, setUserData] = useState('');
  const navigation=useNavigation();

  async function getData() {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    axios
      .post('http://10.26.11.50:5001/userdata', {token: token})
      .then(res => {
        console.log(res.data);
        setUserData(res.data.data);
      });
  }


  useEffect(() => {
    getData();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <View style={styles.header}>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back-ios" size={24} color="#4A90E2" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Profile</Text>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => {
                  /* Logic for call button */
                }}></TouchableOpacity>
       </View>

      {/* Profile Image Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{uri: 'https://via.placeholder.com/100'}}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="camera" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.input} >{userData.name}</Text>

        <Text style={styles.label}>PHONE</Text>
        <Text style={styles.input} >{userData.mobile}</Text>

        <Text style={styles.label}>MAIL</Text>
        <Text style={styles.input} >{userData.email}</Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  profileContainer: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
  },
  form: {
    marginTop: 20,
    marginHorizontal:20
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    
    elevation: 2,
  },
  headerButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    justifyContent:'center',
    marginLeft:-30,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});

export default Profileset;
