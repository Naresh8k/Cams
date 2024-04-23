import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const StudentLoginScreen = ({ navigation }) => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [classId, setClassId] = useState('');

  const handleStudentLogin = async () => {
    try {
      // Authenticate the student with email and password (assuming email is used as registration number)
      await firebase.auth().signInWithEmailAndPassword(regNo + '@example.com', password);

      // Navigate to VerifyClassId screen with class ID
      navigation.navigate('VerifyClassId', { classId });
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Registration Number:</Text>
      <TextInput
        value={regNo}
        onChangeText={setRegNo}
        placeholder="Enter your registration number"
        keyboardType="numeric"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Text>Class ID:</Text>
      <TextInput
        value={classId}
        onChangeText={setClassId}
        placeholder="Enter the class ID provided by faculty"
      />
      <Button title="Login" onPress={handleStudentLogin} />
    </View>
  );
};

export default StudentLoginScreen;
