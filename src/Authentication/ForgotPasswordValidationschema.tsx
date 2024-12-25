import * as Yup from 'yup';

const ForgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

export default ForgotPasswordValidationSchema;