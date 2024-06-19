import { View, Text, StyleSheet, SafeAreaView, Dimensions, Platform, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Appearance, TextInput, Button, Alert} from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import InputWithCheck from '../Components/InputWithCheck';
import CustomButton from '../Components/Button'
import { useNavigation, useRoute } from '@react-navigation/native';
/*import { sendPasswordResetEmail } from '../api/auth'; // Import your authentication API functions*/
import { colorList } from '../Components/colorList';
  
const screen = Dimensions.get('window');
const ForgotPs = () => {
    const [email, setEmail] = useState({ text: '', valid: false });;

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(email);
      Alert.alert('Password Reset Email Sent', 'Please check your email for instructions on resetting your password.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <LinearGradient
        colors={['#C5BEBE', '#C5BEBE']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.7 }}
        style={styles.page}
      >
        <SafeAreaView>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : 'height'} style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.box}>
              <View>
              <View style={styles.inputWrapper}>
                    <InputWithCheck
                      type={false}
                      onChangeText={(value) => {
                        if (!value.includes(' '))
                          setEmail(value)
                      }}
                      value={email}
                      placeholder={'Email'}
                      valid={email.length != 0}
                    />
                </View>
                   
                </View>
                    <View style={{ paddingTop: screen.height * 0.015 }}>
                        <CustomButton
                        style={[styles.button, { backgroundColor: 'black' }]}
                        titleSize={20}
                        titleColor={colorList.ghostWhite}
                        title="Reset Password"
                        onPress={handleResetPassword}
                    />
                    </View>
                </View>
                </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPs;

const styles = StyleSheet.create({
    page:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:
    {
      color: 'rgba(0,0,0,0.5)',
      fontSize: 50,
      fontWeight: '400',
      textAlign: 'center'
    },
    box:
    {
      backgroundColor: 'rgba(0,0,0,0.37)',
      width: screen.width * 0.85,
      minHeight: '10%',
      alignSelf: 'center',
      borderRadius: 40,
      // shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: {
        width: 2,
        height: 5
      },
      // marginTop: screen.height * 0.02,
      paddingVertical: screen.height * 0.03,
      paddingHorizontal: screen.width * 0.05,
      // justifyContent: 'center',
    },
    inputWrapper:
    {
      paddingHorizontal: 20,
      // marginVertical: 5,
      height: screen.height * 0.09,
      justifyContent: 'space-around',
    },
    inputWrapper2:
    {
      paddingHorizontal: 20,
      marginVertical: 5,
      // height: screen.height * 0.09,
      // justifyContent: 'space-around',
    },
    button:
    {
      backgroundColor: '#f8f8ff',
      // opacity:0.2,
      width: screen.width * 0.7,
      paddingVertical: 10,
      borderRadius: 500,
      marginVertical: 10,
      alignSelf: 'center',
      justifyContent: 'flex-end'
    },
    otherButton:
    {
      height: screen.height * 0.06,
      width: screen.height * 0.06,
      borderRadius: 500,
      marginVertical: 10,
      justifyContent: 'center',
      // alignSelf:'stretch'
    },
    others:
    {
      // backgroundColor:'red',
      // paddingHorizontal: 20,
      marginTop: screen.height * 0.015,
      borderTopWidth: 1,
      paddingTop: screen.height * 0.015,
      borderColor: colorList.ghostWhite,
    },
  })