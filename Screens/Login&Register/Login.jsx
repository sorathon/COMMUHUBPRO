import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native'; // Import navigation hook
import {useEffect, useState} from 'react';
import {log} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginPage() {
  const navigation = useNavigation(); // Initialize navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };
    axios.post('http://10.26.11.50:5001/login', userData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Login Successful');
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn',JSON.stringify(true));
        AsyncStorage.setItem('userType',res.data.userType)
        //navigation.navigate('Home');
        if(res.data.userType=="Admin"){
          navigation.navigate('AdminScreen');
        }else{
          navigation.navigate('Home');
        }
      }
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'always'}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Commuhub</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Mobile or email"
            color="#05375a"
            style={styles.input}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome
              name="user-o"
              color="#3d75c4"
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="password"
            color="#05375a"
            style={styles.input}
            onChange={e => setPassword(e.nativeEvent.text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#3d75c4"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
       
      </View>
      <View
          style={{
            flexDirection: 'row',
            marginRight: 20, // Adds spacing from the right edge
            justifyContent: 'flex-end', // Aligns content to the right
            marginBottom: 40, // Optional: Adds spacing from the bottom
          }}>
          <Text style={{color: '#3d75c4'}}>Forgot Password?</Text>
        </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
          <View>
            <Text style={styles.textSign}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end', // Aligns content to the right
          marginRight: 20, // Adds spacing from the right edge
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              fontSize: 15,
              
              color: '#3d75c4',
              textAlign: 'center',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

     
    </ScrollView>
  );
}

export default LoginPage;
