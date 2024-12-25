import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/Routes';
import { useNavigation } from '@react-navigation/native';

type HomeScreenProps= StackNavigationProp<RootStackParamList, 'HomeScreen'>;
const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProps>();
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})