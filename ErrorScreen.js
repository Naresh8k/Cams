import React from 'react';
import { View, Text, Button } from 'react-native';

const ErrorScreen = ({ navigation }) => {
  const handleReturnToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Error: You are not in the class</Text>
      <Button title="Return to Login" onPress={handleReturnToLogin} />
    </View>
  );
};

export default ErrorScreen;
