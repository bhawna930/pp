import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import Login from "./Login";
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './utils/firebase';
import Input from "./Input";
import Button from "./Button";

function Signup() {
  // State for user input
  const [contact, setContact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = contact;

  async function handleClick(event) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      console.log(user);
    } catch (error) {
      console.error('Error during user creation:', error.message);
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
        name='displayName'
        type='text'
        placeholder='Name'
        onChange={handleInputChange}
      />
      <br /><br />
      <Input
        name='email'
        type='email'
        placeholder='Enter E-mail'
        onChange={handleInputChange}
      />
      <br /><br />
      <Input
        name='password'
        type='password'
        placeholder='Enter Password'
        onChange={handleInputChange}
      />
      <br /><br />
      <Input
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        onChange={handleInputChange}
      />
      <br /><br />
      <Button onClick={handleClick}>Signup</Button>
      <br /><br />
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Signup;
