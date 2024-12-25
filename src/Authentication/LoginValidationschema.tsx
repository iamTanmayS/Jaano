import * as Yup from 'yup';

const LoginValidationSchema = Yup.object().shape({
  
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@, $, !, %, *, ?, &)')
    .required('Password is required'),
});

export default LoginValidationSchema;




