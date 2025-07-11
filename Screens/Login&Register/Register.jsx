import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Error from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native'; // Import navigation hook
import {useEffect, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';

function RegisterPage({props}) {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [secretText, setSecretText] = useState('');

  const navigation = useNavigation();

  function handelSubmit() {
    const userData = {
      name: name,
      email,
      mobile,
      password,
      userType
    };
    //if (nameVerify && emailVerify && mobileVerify && passwordVerify) {
      if(userType=='Admin'&& secretText != 'Text1243'){
        return Alert.alert('Invalid Admmin');
      }
      axios
        .post('http://192.168.8.103:5001/register', userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status == 'ok') {
            Alert.alert('Registration Successful');
            navigation.navigate('Login');
          } else {
            
            Alert.alert('Registration Failed');
          }
        })
        .catch(e => console.log(e));
   // } else {
   ///   Alert.alert('Please fill all the fields properly');
   // }
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);

    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }
  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }
  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);
    if (/^\d{10}$/.test(mobileVar)) {
      setMobile(mobileVar);
      setMobileVerify(true);
    }
  }
  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}
      style={{backgroundColor: 'white'}}>
      <View>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Commuhub</Text>

         
          <View style={styles.radioButton_div}>
            <Text style={styles.radioButton_title}> Login as</Text>
            <View style={styles.radioButton_inner_div}>
              <Text style={styles.radioButton_text}>User</Text>
              <RadioButton
                value="User"
                status={userType == 'User' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('User')}
              />
            </View>
            <View style={styles.radioButton_inner_div}>
              <Text style={styles.radioButton_text}>Admin</Text>
              <RadioButton
                value="Admin"
                status={userType == 'Admin' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('Admin')}
              />
            </View>
          </View>

          {userType == 'Admin' ? (
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#420475" style={styles.icon} />
              <TextInput
                placeholder="Secret Text"
                style={styles.textInput}
                onChange={e => setSecretText(e.nativeEvent.text)}
              />
            </View>
          ) : (
            ''
          )}

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              onChange={e => handleName(e)}
            />
            <FontAwesome
              name="user-o"
              color="#420475"
              size={20}
              style={{paddingRight: 10, marginTop: -7, marginLeft: 5}}
            />
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Name sholud be more then 1 characters.
            </Text>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChange={e => handleEmail(e)}
            />
            <Fontisto
              name="email"
              color="#420475"
              size={24}
              style={{marginLeft: 0, paddingRight: 5}}
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Enter Proper Email Address
            </Text>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Mobile"
              style={styles.input}
              onChange={e => handleMobile(e)}
              maxLength={10}
            />
            <FontAwesome
              name="mobile"
              color="#420475"
              size={35}
              style={{paddingRight: 10, marginTop: -7, marginLeft: 5}}
            />
            {mobile.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" color="green" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Phone number with 0-9
            </Text>
          )}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChange={e => handlePassword(e)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
              }}>
              <Feather
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="gray"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Invate code" style={styles.input} />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handelSubmit()}>
            <View>
              <Text style={styles.textSign}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default RegisterPage;
