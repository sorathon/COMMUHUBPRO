import {StyleSheet, Text, View, Button} from 'react-native';

function HomeScreen(props) {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Text style={styles.textStyle}>This is home screenngggg</Text>
      <Button
        title="Profile"
        onPress={() => props.navigation.navigate('Profile', {name: 'John'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  headingstyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
