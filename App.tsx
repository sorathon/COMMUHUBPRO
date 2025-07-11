import * as React from 'react';
import {View} from 'react-native';
import {useState, useEffect} from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import LoginPage from './Screens/Login&Register/Login';
import RegisterPage from './Screens/Login&Register/Register';
import SettingScreen from './Screens/SettingScreen';
import LisensPage from './Screens/LisenseRegistration';
import CarPage from './Screens/CarScreen';
import MotoPage from './Screens/MotoScreen';
import MyCalendarPage from './Screens/MycalendarScreen/MycalendarScreen';
import Profileset from './Screens/SettingMenuScreen/ProfileSetScreen';
import ParcelPage from './Screens/Parcels/parcelScreen';
import AccountPage from './Screens/SettingMenuScreen/AccountScreen';
import AdminScreen from './Screens/AdminPage/AdminScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 🟢 Bottom Tab Navigator
const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Social') {
            iconName = 'person';
          } else if (route.name === 'Admin') {
            iconName = 'people';
          } else if (route.name == 'Setting') {
            iconName = 'density-medium';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',

        tabBarStyle: {
          backgroundColor: '#4A90E2',
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14, // ขนาดตัวอักษร
        },
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Social"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Admin"
        component={UserScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

// 🟠 Stack Navigator
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarBackgroundColor: '#65B5EB',
        headerStyle: {backgroundColor: '#65B5EB'},
        headerTintColor: '#65B5EB',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Entypo
            name="menu"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            size={30}
            color="#fff"
          />
        ),
      }}>
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// 🔵 Drawer Navigator
const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};

const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Lisens" component={LisensPage} />
      <Stack.Screen name="Car" component={CarPage} />
      <Stack.Screen name="Moto" component={MotoPage} />
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="Mycalendar" component={MyCalendarPage} />
      <Stack.Screen name="Profile" component={Profileset} />
      <Stack.Screen name="Parcel" component={ParcelPage} />
      <Stack.Screen name="Account" component={AccountPage} />
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
    </Stack.Navigator>
  );
};

// 🔴 Main App
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    const userType1 = await AsyncStorage.getItem('userType');
    console.log(data, 'at app.jsx');
    setIsLoggedIn(data);
    setUserType(userType1);
  }

  useEffect(() => {
    getData();
  }, []);
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {isLoggedIn && userType == 'Admin' ? (
          <AdminScreen />
        ) : isLoggedIn ? (
          <DrawerNav />
        ) : (
          <LoginNav />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
