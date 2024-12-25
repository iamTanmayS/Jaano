import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Animated, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import InputField from '../Components/InputField';
import Maintheme from '../Assets/Theme/maintheme';
import LoginValidationSchema from './LoginValidationschema';
import ForgotPasswordValidationSchema from './ForgotPasswordValidationschema';

type LoginpageProps = StackNavigationProp<any, 'Loginpage'>;

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [isForgotPassword, setForgotPassword] = useState(false);
  const navigation = useNavigation<LoginpageProps>();
  const [scaleValue] = useState(new Animated.Value(1));

  const handleLogin = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Login Successful', `Welcome back, ${email}`);
    } catch (error: any) {
      console.error(error);
      Alert.alert('Login Failed', error.message);
    }
  };

  const handleResetPassword = async (email: string) => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset', 'Check your email for the reset link.');
      navigation.goBack(); // Go back to the login screen after successful email
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'No user found with that email address.');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  const handleButtonPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subheading}>Enter Your Credential For Login</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          if (isForgotPassword) {
            handleResetPassword(values.email);
          } else {
            handleLogin(values.email, values.password);
          }
        }}
        validationSchema={isForgotPassword ? ForgotPasswordValidationSchema : LoginValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ marginTop: 50 }}>
            {/* Email Input */}
            <InputField
              placeholder="Email address"
              iconName="envelope"
              onChangeText={handleChange('email')}
              onBlur={() => handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            {/* Password Input (conditionally render based on isForgotPassword) */}
            {!isForgotPassword && (
              <InputField
                placeholder="Password"
                iconName="lock"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={() => handleBlur('password')}
                value={values.password}
              />
            )}
            {!isForgotPassword && touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Submit Button */}
            <Animated.View style={[styles.buttonContainer, { opacity: scaleValue }]}>
              <TouchableOpacity
                style={styles.button}
                onPressIn={handleButtonPressIn} // Press in (animation)
                onPressOut={handleButtonPressOut} // Press out (reset animation)
                onPress={()=>handleSubmit()}
              >
                <Text style={styles.buttonText}>{isForgotPassword ? 'Send Reset Link' : 'Login'}</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </Formik>

      {/* Forgot Password Button */}
      <Animated.View style={[styles.signupbuttonContainer, { opacity: scaleValue }]}>
        <TouchableOpacity
          style={styles.signupbutton}
          onPressIn={handleButtonPressIn}
          onPressOut={handleButtonPressOut}
          onPress={() => setForgotPassword(!isForgotPassword)} // Toggle forgot password
        >
          <Text style={styles.signupbuttonText}>
            {isForgotPassword ? 'Back to Login' : 'Forgot Password?'}
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Navigation to Signup */}
      <Animated.View style={[styles.signupbuttonContainer, { opacity: scaleValue }]}>
        <TouchableOpacity
          style={styles.LoginTextcontainer}
          onPressIn={handleButtonPressIn}
          onPressOut={handleButtonPressOut}
          onPress={() => navigation.navigate('Signuppage')}
        >
          <Text style={styles.LoginTextsimple}>Don't have an account?</Text>
          <Text style={styles.LoginTextcolor}>Signup</Text>
        </TouchableOpacity>
      </Animated.View>
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
    fontSize: 40,
    textAlign: 'center',
    color: Maintheme.colors.headingcolor,
    marginTop: 50,
  },
  subheading: {
    fontFamily: Maintheme.fonts.subtitle,
    fontSize: Maintheme.fontSizes.medium,
    textAlign: 'center',
    color: Maintheme.colors.textSecondary,
    marginBottom: 30,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgb(246, 114, 61)', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginTop: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupbuttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  signupbutton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 60,
    borderColor: 'rgb(246, 114, 61)',
    borderWidth: 2,
  },
  signupbuttonText: {
    color: '#202124',
    fontSize: 16,
    fontWeight: 'bold',
  },
  LoginTextcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  LoginTextcolor: {
    color: 'rgb(246, 114, 61)',
    marginTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginLeft: 5,
  },
  LoginTextsimple: {
    color: 'rgb(0, 0, 0)',
    marginTop: 12,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Loginpage;
