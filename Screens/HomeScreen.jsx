// import {StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Parallax from './component/Parallax';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const Card = ({ icon, title, subtitle1, subtitle2 }) => (
//   <View style={styles.card}>
//     <FontAwesome5 name={icon} size={40} color="black" style={styles.icon} />
//     <Text style={styles.title}>{title}</Text>
//     <Text style={styles.subtitle}>{subtitle1}</Text>
//     <Text style={styles.subtitle}>{subtitle2}</Text>
//   </View>
// );

// function HomeScreen(props) {
//   const navigation = useNavigation();
//   console.log(props);
//   return (
//     // <View style={styles.viewStyle}>
//     //   <Parallax/>
//     //   <Button
//     //     title="Profile"
//     //     onPress={() => navigation.navigate('Profile')}
//     //   />
//     // </View>
//     <View style={styles.container}>
//       <Parallax/>
//       <View >
//       <TouchableOpacity style={styles.buttonStyle}>
//         <Text style={styles.buttonText}>Button 1</Text>
//       </TouchableOpacity>
//     </View>
//     <View style={styles.row}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Button 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Button 2</Text>
//       </TouchableOpacity>
//     </View>
//     <View style={styles.row}>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Button 3</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Button 4</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   viewStyle: {
//     paddingHorizontal:20,
//     alignItems: 'center',
//   },
//   textStyle: {
//     fontSize: 20,
//     color: 'black',
//   },
//   buttonStyle: {
//     backgroundColor: 'blue',
    
//     padding: 50,
//     borderRadius: 5,
//   },
//   headingstyle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   container: {
//     flex: 1,
   
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 15,
//     margin: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// export default HomeScreen;
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Parallax from './component/Parallax';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';
import LisensPage from './LisenseRegistration';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Card = ({ icon, title, subtitle1, subtitle2, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(screen)}>
      <FontAwesome5 name={icon} size={40} color="black" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle1}</Text>
      <Text style={styles.subtitle}>{subtitle2}</Text>
    </TouchableOpacity>
  );
};

function HomeScreen() {

  
  
  return (
    <View style={styles.container}>
      <Parallax />
      <View style={{marginTop:30}}>
        <TouchableOpacity style={styles.roomdetail}>
          <Text style={styles.title}>ROOM NUBER</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.grid}>
        <Card icon="money-bill-wave" title="Payment" subtitle1="Monthly Fee" subtitle2="Water / Electricity" screen="PaymentScreen" />
        <Card icon="calendar-check" title="Reservation" subtitle1="Co-working space" subtitle2="Fitness" screen="Mycalendar" />
        <Card icon="motorcycle" title="Registration" subtitle1="Car" subtitle2="Motorbike" screen="Lisens" />
        <Card icon="box" title="Parcels" subtitle1="Arrived" subtitle2="Received" screen="Parcel" />
        
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:15
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    width: 150,
    height: 130,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    color: 'gray',
  },
  roomdetail:{
    width: 370,
    height:80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'white',
    borderRadius : 15,

  },
});

export default HomeScreen;
