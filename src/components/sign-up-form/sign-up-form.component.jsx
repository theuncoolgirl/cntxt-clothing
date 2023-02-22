import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.reducer';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      console.log('before dispatch');
      dispatch(signUpStart({ email, password, displayName }));
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email is already in use.');
      } else {
        console.log('User creation encountered an error: ', error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            onChange: handleChange,
            name: 'displayName',
            required: true,
            type: 'text',
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            onChange: handleChange,
            name: 'email',
            type: 'email',
            required: true,
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            onChange: handleChange,
            name: 'password',
            minLength: 6,
            required: true,
            type: 'password',
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            onChange: handleChange,
            name: 'confirmPassword',
            minLength: 6,
            required: true,
            type: 'password',
            value: confirmPassword,
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
