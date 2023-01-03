import { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import {
  createAuthUserWithEmailAndPassWord,
  createUserDoc,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
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
      const { user } = await createAuthUserWithEmailAndPassWord(
        email,
        password
      );

      await createUserDoc(user, { displayName });
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
    <div className="sign-up-container">
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
    </div>
  );
};

export default SignUpForm;
