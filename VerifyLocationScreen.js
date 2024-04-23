import React from 'react';
import { View, Text, Button } from 'react-native';

const VerifyLocationScreen = ({ route, navigation }) => {
  const { classId } = route.params;

  const handleVerifyLocation = () => {
    // Implement logic to verify location
    navigation.navigate('Camera');
  };

  return (
    <View>
      <Text>Verify Location for Class ID: {classId}</Text>
      <Button title="Verify Location" onPress={handleVerifyLocation} />
    </View>
  );
};

export default VerifyLocationScreen;
