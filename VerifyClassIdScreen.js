import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';

const VerifyClassIdScreen = ({ navigation }) => {
  const [classId, setClassId] = useState('');
  const [validClassId, setValidClassId] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to retrieve the valid class ID from Firebase
  const fetchValidClassId = async () => {
    setLoading(true);
    try {
      const snapshot = await firebase.database().ref('validClassId').once('value');
      const data = snapshot.val();
      setValidClassId(data);
    } catch (error) {
      console.error("Error fetching valid class ID:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchValidClassId();
  }, []);

  // Function to verify the class ID
  const verifyClassId = () => {
    if (classId === validClassId) {
      // If class ID is valid, navigate to the Camera screen
      navigation.navigate('Camera');
    } else {
      // If class ID is invalid, show an error message
      alert("Invalid class ID. Please enter the correct class ID.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <Text>Please enter the class ID:</Text>
          <TextInput
            value={classId}
            onChangeText={setClassId}
            placeholder="Class ID"
            style={{ borderWidth: 1, padding: 10, marginVertical: 10, width: 200 }}
          />
          <Button title="Verify" onPress={verifyClassId} />
        </>
      )}
    </View>
  );
};

export default VerifyClassIdScreen;
