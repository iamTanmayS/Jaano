import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginpageProps = StackNavigationProp<RootStackParamList, 'Loginpage'>;
const Loginpage = () => {
  const navigation = useNavigation<LoginpageProps>();
  return (
    <View>
      <Text>Signuppage</Text>
      <Button title="Login" onPress={() => navigation.navigate('Signuppage')} />
    </View>
  )
}

export default Loginpage

const styles = StyleSheet.create({})