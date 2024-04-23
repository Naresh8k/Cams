import React from 'react';
import { View, Text, Button } from 'react-native';

const AttendanceMarkedScreen = ({ navigation }) => {
  const handleReturnToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Attendance Marked Successfully</Text>
      <Button title="Return to Dashboard" onPress={handleReturnToDashboard} />
    </View>
  );
};

export default AttendanceMarkedScreen;
