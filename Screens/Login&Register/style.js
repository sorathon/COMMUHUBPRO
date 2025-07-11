import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
    position: 'relative',
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 40,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    paddingRight: 40,
    borderRadius: 15,
  },
  button: {
    alignItems: 'center',
      marginTop: -20,
      alignItems: 'center',
      textAlign: 'center',
      margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    color: '#4A90E2',
  },
  registerText: {
    marginTop: 20,
    fontSize: 14,
  },
  registerLink: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  action: {
      flexDirection: 'row',
      paddingTop: 14,
      paddingBottom: 15,
      marginTop: 15,
  
      paddingHorizontal: 15,
  
      borderWidth: 1,
      borderColor: '#420475',
      borderRadius: 20,
    },
    inBut: {
        width: '70%',
        backgroundColor: '#3d75c4',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
      },
      textInput: {
          flex: 2,
          marginTop: -5,
      
          color: '#05375a',
    },
    iconContainer: {
      position: 'absolute',
      right: 10, // ให้ไอคอนอยู่ขวาสุดของ input
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 150,
        paddingBottom: 30,
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white',
      },
      radioButton_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      radioButton_inner_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      radioButton_title: {
        fontSize: 20,
        color: '#420475',
      },
      radioButton_text: {
        fontSize: 16,
        color: 'black',
      },
});
export default styles;
