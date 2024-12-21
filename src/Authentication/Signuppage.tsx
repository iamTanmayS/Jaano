import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';

type SignUpPageNavigationProp = StackNavigationProp<RootStackParamList, 'Signuppage'>;
const Signuppage = () => {
  const navigation = useNavigation<SignUpPageNavigationProp>();
  return (
    <View>
      <Text>Signuppage</Text>
      <Button title="Login" onPress={() => navigation.navigate('Loginpage')} />
    </View>
  )
}

export default Signuppage

const styles = StyleSheet.create({})