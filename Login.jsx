import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import {
  signInWithGooglePopup,
  createuserdocfromAuth,
  userDocRef,
  signinAuthUserWithEmailAndPassword
} from './utils/firebase';

function Login() {
  // Function to handle Google login
  const userLoginGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createuserdocfromAuth(user);
    } catch (error) {
      console.error('Error during Google login:', error.message);
    }
  }

  const [contact, setContact] = useState({
    email: '',
    password: ''
  });

  const { email, password } = contact;

  async function handleLoginClick(event) {
    try {
      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.error('Error in login:', error.message);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  }

  return (
    <div className="header">
      <Input
        name='email'
        type='email'
        placeholder='Email'
        onChange={handleInputChange}
      />
      <br /><br />
      <Input
        name='password'
        type='password'
        placeholder='Password'
        onChange={handleInputChange}
      />
      <br /><br />
      <Button onClick={handleLoginClick}>Login</Button>
      <br /><br />
      <Button onClick={userLoginGoogle}>Login with Google</Button>
      <br /><br />
      <Link to='/signup'>Signup Instead</Link>
    </div>
  );
}

export default Login;
