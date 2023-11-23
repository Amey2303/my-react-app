import React, { useState } from 'react';
import Textbox from './textfield';

//Creating a component
function Form1() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Defining functions to change the value
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  // Validation
  const handleSubmit = (event) => {
    event.preventDefault();

    let errorMessages = '';

    if (firstName === "") {
      setFirstNameError('Please enter first name');
    errorMessages += firstNameError + '\n';
    } else {
      setFirstNameError('');
    }

    if (lastName === "") {
      setLastNameError('Please enter Last name');
    errorMessages += lastNameError + '\n';
    } else {
      setLastNameError('');
    }

    if (email === "") {
      setEmailError('Please enter Email');
    errorMessages += emailError + '\n';
    } else {
      setEmailError('');
    }

    if (password === "") {
      setPasswordError('Please enter Password');
    errorMessages += passwordError + '\n';
    } else {
      setPasswordError('');
    }

    if (errorMessages !== "") {
      // Update the content of the "error" div
      document.getElementById('error').innerText = errorMessages;
    } else {
      // Clear the error div if no errors
      document.getElementById('error').innerText = '';

      // Successfully submit the form
      alert(`Submitted:
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Password: ${password}
      `);

      // Resetting the value to null
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <Textbox label="First Name:" id="fname" type="text" autoComplete="given_name" onChange={handleFirstNameChange} value={firstName} />
        <Textbox label="Last Name:" id="lname" type="text" autoComplete="family_name" onChange={handleLastNameChange} value={lastName} />
        <Textbox label="Email:" id="email" type="text" autoComplete="email" onChange={handleEmailChange} value={email} />
        <Textbox label="Password:" id="password" type="text" autoComplete="password" onChange={handlePasswordChange} value={password} />
        <div id="error" style={{ color: 'red' }} aria-live="polite"></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form1;
