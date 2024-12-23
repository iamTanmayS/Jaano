import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import signupValidationSchema from './SignupValidationschema';
import Maintheme from '../Assets/Theme/maintheme';
import InputField from '../Components/InputField';

type SignUpPageNavigationProp = StackNavigationProp<RootStackParamList, 'Signuppage'>;

const Signuppage = () => {
  const navigation = useNavigation<SignUpPageNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subheading}>Create your account</Text>

      <Formik
        initialValues={{ email: '', name: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={signupValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            {/* Name Input */}
            <InputField
              placeholder="Name"
              iconName="user-large"
              onChangeText={handleChange('name')}
              onBlur={() => handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            {/* Email Input */}
            <InputField
              placeholder="Email address"
              iconName="envelope"
              onChangeText={handleChange('email')}
              onBlur={() => handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            {/* Password Input */}
            <InputField
              placeholder="Password"
              iconName="lock"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={() => handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            {/* Submit Button */}
            <Button onPress={()=>handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>

      <Button title="Login" onPress={() => navigation.navigate('Loginpage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontFamily: Maintheme.fonts.heading,
    fontSize: Maintheme.fontSizes.huge,
    textAlign: 'center',
    color: Maintheme.colors.headingcolor,
    marginTop: 50,
  },
  subheading: {
    fontFamily: Maintheme.fonts.subtitle,
    fontSize: Maintheme.fontSizes.medium,
    textAlign: 'center',
    color: Maintheme.colors.textSecondary,
    marginVertical: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default Signuppage;
