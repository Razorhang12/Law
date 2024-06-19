import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'

import Login from './signup/login';
import Signup from './signup/signup';;
import SignUpNavigator from './signup/signupNavigator';
import StackNavigator from './main/StackNavigator';
import { AuthProvider } from './hooks/useAuth'; // Ensure this path is correct*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
         <Stack.Screen name="login_signup" component={SignUpNavigator} options={{ headerShown: false }}  />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// App.js
console.log("App.js file loaded");