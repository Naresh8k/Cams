import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import StudentLoginScreen from '../screens/StudentLoginScreen';
import VerifyLocationScreen from '../screens/VerifyLocationScreen';
import CameraScreen from '../screens/CameraScreen';
import AttendanceMarkedScreen from '../screens/AttendanceMarkedScreen';
import ErrorScreen from '../screens/ErrorScreen';
import DashboardScreen from '../screens/DashboardScreen';
import GenerateClassIdScreen from '../screens/GenerateClassIDScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
      <Stack.Screen name="VerifyLocation" component={VerifyLocationScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="AttendanceMarked" component={AttendanceMarkedScreen} />
      <Stack.Screen name="Error" component={ErrorScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="GenerateClassId" component={GenerateClassIdScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
