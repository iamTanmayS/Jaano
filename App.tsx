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


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Signuppage" component={Signuppage} />
      <Stack.Screen name="Loginpage" component={Loginpage} />
    </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({

});

export default App;
