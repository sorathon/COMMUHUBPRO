import { StyleSheet,Text,View ,Button} from "react-native";

function ProfileScreen(props) {
    console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.route.params.name}</Text>
    <Button title="User" onPress={() => props.navigation.navigate("User")} />
    
    </View>
  );
}
const styles = StyleSheet.create({
viewStyle : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
    textStyle : {
        fontSize: 20,
        color: "black",
    },
    headingstyle : {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default ProfileScreen;