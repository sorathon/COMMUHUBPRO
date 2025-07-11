import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { useState } from "react";
import React from "react";
import Ionicons from 'react-native-vector-icons/MaterialIcons'; 
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';


function ProfileScreen() {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  // ฟังก์ชันส่งข้อความ
  const handleSendMessage = () => {
    if (!message.trim()) {
      Alert.alert('Error', 'กรุณากรอกข้อความก่อนส่ง');
      return;
    }

    // โลจิกในการส่งข้อความ (อาจจะเป็นการเรียก API)
    Alert.alert('Success', 'ข้อความถูกส่ง');
    setMessage(''); // รีเซ็ตข้อความหลังจากส่ง
  };

    
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={() =>  navigation.navigate('Home')}>
          <Ionicons name="arrow-back-ios" size={24} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Juristic Office</Text>
        <TouchableOpacity style={styles.headerButton} onPress={() => { /* Logic for call button */ }}>
          <Ionicons name="call" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      {/* Message Content Area */}
      <View style={styles.messageContentArea}>
        {/* Here you can add your chat messages */}
      </View>

      {/* Input Area with KeyboardAvoidingView */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="add" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="mic" size={22} color="#fff" />
            </TouchableOpacity>
            
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Type a message"
                placeholderTextColor="#999"
                value={message}
                onChangeText={setMessage}
                multiline
                maxHeight={100}
              />
            </View>
            
            
            
            <TouchableOpacity 
              style={[styles.iconButton, !message.trim() ? styles.disabledButton : null]} 
              onPress={handleSendMessage}
              disabled={!message.trim()}
            >
              <Octicons name="paper-airplane" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    paddingTop: Platform.OS === 'ios' ? 20 : 40
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingTop: Platform.OS === 'ios' ? 20 : 40
  },
  messageContentArea: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 5,
  },
  input: {
    minHeight: 40,
    maxHeight: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  disabledButton: {
    backgroundColor: '#a0c0e4',
  },
});


export default ProfileScreen;