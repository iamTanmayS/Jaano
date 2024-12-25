import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,Animated,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../Navigation/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import signupValidationSchema from './SignupValidationschema';
import Maintheme from '../Assets/Theme/maintheme';
import InputField from '../Components/InputField';
import  auth  from '@react-native-firebase/auth';
import { signIn } from './loginWithGoogle';
import Icon from 'react-native-vector-icons/FontAwesome6';



type SignUpPageNavigationProp = StackNavigationProp<RootStackParamList, 'Signuppage'>;

const Signuppage = () => {
  const [scaleValue] = useState(new Animated.Value(1)); // Initial opacity for animation

  // Animation when button is pressed
  const handleButtonPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95, // Slightly reduce the size for a subtle effect
      friction: 4, // Control the bounce (a smoother effect)
      tension: 40, // Control the speed of the animation
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Restore to original size
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  const navigation = useNavigation<SignUpPageNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subheading}>Create your account</Text>

      <Formik
        initialValues={{ email: '', name: '', password: '' }}
        onSubmit={(values) => { try{
          auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then(() => {
            console.log('User account created & signed in!');
          
          })}
        catch(e){
          console.log('Error: ', e);
        }
        finally{
          console.log(values.email)
        }}}
          
       validationSchema={signupValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{marginTop:50}}>
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
            <Animated.View style={[styles.buttonContainer, { opacity: scaleValue }]}>
              <TouchableOpacity
                style={styles.button}
                onPressIn={handleButtonPressIn} // Press in (animation)
                onPressOut={handleButtonPressOut} // Press out (reset animation)
                onPress={handleSubmit as ()=> void}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </Formik>
      <Animated.View style={[styles.signupbuttonContainer, { opacity: scaleValue }]}>
              <TouchableOpacity
                style={styles.signupbutton}
                onPressIn={handleButtonPressIn} // Press in (animation)
                onPressOut={handleButtonPressOut} // Press out (reset animation)
                onPress={() => signIn()}
              >
                <Icon name = "google" size = {20}  color = "#4285F4" style = {styles.googleIcon}>
                  </Icon>
                <Text style={styles.signupbuttonText}>Login In with Google</Text>
              </TouchableOpacity>
            </Animated.View>
            
      
            <Animated.View style={[styles.signupbuttonContainer, { opacity: scaleValue }]}>
              <TouchableOpacity
                style={styles.LoginTextcontainer}
                onPressIn={handleButtonPressIn} // Press in (animation)
                onPressOut={handleButtonPressOut} // Press out (reset animation)
                onPress={() => navigation.navigate('Loginpage')}
              > 
              <Text style= {styles.LoginTextsimple}>Already a user?</Text>
              <Text style={styles.LoginTextcolor}>Login</Text>
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
    fontSize: 50,
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
    backgroundColor: 'rgb(246, 114, 61)', // Use the same color you want
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow for Android
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
    flexDirection: 'row', // Align icon and text horizontally
    backgroundColor: '#FFFFFF', // Google's white background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 60,
    borderColor:"rgb(246, 114, 61)",
    borderWidth:2,
  },
  googleIcon: {
    marginRight: 10, // Spacing between icon and text
  },
  signupbuttonText: {
    color: '#202124', // Google's standard text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  LoginTextcontainer:{
      flexDirection: 'row', // Align icon and text horizontally
    justifyContent: 'center', // Center the text
    marginTop: 25,

    marginBottom: 10,
    
  },
  LoginTextcolor:{
    color: 'rgb(246, 114, 61)', // Use the same color you want
    marginTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 18,
    marginLeft: 5,
    

  },
  LoginTextsimple:{
    color: 'rgb(0, 0, 0)', // Use the same color you want
    marginTop: 12,
    fontSize: 16,
    marginLeft: 10,
    },
});


export default Signuppage;
