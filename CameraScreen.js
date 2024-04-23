import React from 'react';
import { View, Text, Button } from 'react-native';

const CameraScreen = ({ navigation }) => {
  const handleCaptureSelfie = () => {
    // Implement logic to capture selfie
    navigation.navigate('AttendanceMarked');
  };

  return (
    <View>
      <Text>Camera Screen</Text>
      <Button title="Capture Selfie" onPress={handleCaptureSelfie} />
    </View>
  );
};

export default CameraScreen;
