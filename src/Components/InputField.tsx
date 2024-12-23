import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; 
import Maintheme from '../Assets/Theme/maintheme';


interface InputFieldProps{
    placeholder: string,
    secureTextEntry?: boolean,
    onChangeText: (text: string) => void,
    onBlur: () => void,
    value: string,
    iconName: string,
}
const InputField = ({
  placeholder,
  secureTextEntry = false,
  onChangeText,
  onBlur,
  value,
  iconName,
}:InputFieldProps) => {
  return (
    <View style={[styles.container]}>
      <Icon name={iconName} size={20} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[styles.input]}
        placeholderTextColor="rgba(32, 31, 31, 0.78)" // Optional placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: '#FFA07A', // Light orange border
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 13,
    backgroundColor: 'rgba(255, 160, 122, 0.1)', 
    // Optional background for contrast
  },
  icon: {
    marginRight: 10, // Space between icon and input box
    color: 'rgb(246, 114, 61)', // Match border color
  },
  input: {
    flex: 1,
    fontSize:15 ,
    color: Maintheme.colors.textPrimary, // Text color
    fontFamily: Maintheme.fonts.body,
    
    
  
  },
});

export default InputField;
