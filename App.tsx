/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import "./src/Navigation/gesture-handler"
import "./src/Navigation/gesture-handler.native"
import Signuppage from './src/Authentication/Signuppage';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Loginpage from './src/Authentication/Loginpage';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import HomeScreen from './src/Screens/HomeScreen';


const firebaseConfig = {
  apiKey: 'AIzaSyArquXGR4ucp6gBWuoYrvAUYqMRbRHaQ7Y',
  authDomain: 'jaano-cbbd4.firebaseapp.com',
  projectId: 'jaano-cbbd4',
  storageBucket: 'jaano-cbbd4.firebasestorage.app',
  messagingSenderId: '999901883304',
  appId: '1:999901883304:android:896fa64cebcc5bfdbfcb9d',

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); 
}




const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer >
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }} >
      <Stack.Screen name="Signuppage" component={Signuppage} />
      <Stack.Screen name="Loginpage" component={Loginpage} />
      <Stack.Screen name= "HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({

});

export default App;
