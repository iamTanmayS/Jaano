import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { GoogleSignin, statusCodes, isSuccessResponse, isErrorWithCode } from '@react-native-google-signin/google-signin';
useEffect(() => {
    GoogleSignin.configure({
      webClientId: '999901883304-kt5vpdvjvhf3t9i4aluiob4k1asqjavp.apps.googleusercontent.com', // Replace with your client ID
    });
  }, []);
const signIn = async () => {
  try {
    // Checking Play Services (Android only)
    await GoogleSignin.hasPlayServices();

    const response = await GoogleSignin.signIn();

    if (isSuccessResponse(response)) {
      console.log('User signed in successfully', response.data);
      // Handle signed-in user's data
    } else {
      // Handle other response types
      console.log('No saved credential found');
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play Services not available');
          break;
        default:
          console.error('Sign-In Error: ', error);
      }
    }
  }
};
