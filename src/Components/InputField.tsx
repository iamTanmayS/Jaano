import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; 


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
    <View style={styles.container}>
      <Icon name={iconName} size={20} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={styles.input}
        placeholderTextColor="#999" // Optional placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA07A', // Light orange border
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: '#FFF', // Optional background for contrast
  },
  icon: {
    marginRight: 10, // Space between icon and input box
    color: '#FFA07A', // Match border color
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333', // Text color
  },
});

export default InputField;
