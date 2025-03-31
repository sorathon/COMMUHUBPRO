import { StyleSheet,View,Text } from "react-native";

function UserScreen() {
 
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>User Screen</Text>
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
export default UserScreen;