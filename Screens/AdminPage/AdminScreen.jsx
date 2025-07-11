import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

function AdminScreen() {
  
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
  }, []);
  const navigation = useNavigation();
  function signOut() {
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.setItem('token', '');
    navigation.navigate('Login');
  }

  return (
    <View>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
}
export default AdminScreen;
