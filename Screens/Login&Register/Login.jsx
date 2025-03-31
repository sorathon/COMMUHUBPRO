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
import axios from 'axios';

function LoginPage() {
  const navigation = useNavigation(); // Initialize navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };
    axios.post('http://192.168.11.52:5001/login', userData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Login Successful');
        navigation.navigate('Home');
      }
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'always'}>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Welcomeyyy</Text>
        <View style={styles.action}>
          <FontAwesome
            name="user-o"
            color="#05375a"
            size={20}
            style={styles.smallIcon}
          />
          <TextInput
            placeholder="Mobile or email"
            color="#05375a"
            style={styles.textInput}
            onChange={e => setEmail(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            color="#05375a"
            size={20}
            style={styles.smallIcon}
          />
          <TextInput
            placeholder="password"
            color="#05375a"
            style={styles.textInput}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <Text style={{color: '#420475'}}>Forgot Password?</Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
          <View>
            <Text style={styles.textSign}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={{padding: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#420475',
                textAlign: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginPage;
