import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';

const GenerateClassIdScreen = () => {
  const [classId, setClassId] = useState('');

  // Function to generate and save the class ID
  const generateClassId = async () => {
    try {
      // Generate a unique class ID (you can use any logic to generate the ID)
      const generatedId = Math.random().toString(36).substring(2, 10);
      
      // Save the generated class ID to Firebase Realtime Database
      await firebase.database().ref('validClassId').set(generatedId);
      alert('Class ID generated successfully: ' + generatedId);
      setClassId(generatedId);
    } catch (error) {
      console.error("Error generating class ID:", error);
      alert('Failed to generate class ID. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Generated Class ID: {classId}</Text>
      <Button title="Generate Class ID" onPress={generateClassId} />
    </View>
  );
};

export default GenerateClassIdScreen;
