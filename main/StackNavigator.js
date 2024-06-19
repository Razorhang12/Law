import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SignUpNavigator from "../signup/signupNavigator";
import { useState } from "react";
import MainPage from "./mainPage"
import LoginScreen from '../signup/login';
import useAuth from "../hooks/useAuth";
import Setting from "./setting";


const Stack = createStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth()
    // const auth = true;
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            {user ?
                <>
                    <Stack.Screen name="MainPage" component={MainPage}/>
                    <Stack.Screen name="Setting" component={Setting}/>
                </>
                :
                <><Stack.Screen name="login_signup" component={SignUpNavigator} /><Stack.Screen name="ForgotPs" component={ForgotPs} /></> 
            }
        </Stack.Navigator>
    )
}

export default function App() {
    return (
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    );
  }