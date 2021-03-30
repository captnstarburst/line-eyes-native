import React from 'react';
import {OutlinedTextField} from 'rn-material-ui-textfield';

/*
  This component displays the log in form. A text field for username/email and a text field for password
  
  Props:
  `propagateChange` - A function that handles changes to the fields 
  `errorText` - Helper text value for field errors 

  Optional:
  `readOnly` - When included the username field is readOnly and populated from session storage

Example of Component:
    <LogInJSX
        propagateChange = {(e) => setValue(e.target.value)}
        errorText = "Incorrect Password"
    />
*/

const LogInJSX = (props) => {
  return (
    <>
      <OutlinedTextField
        disabled={props.readOnly}
        label="User Name or Email"
        keyboardType="email-address"
        onChangeText={(text) => props.propagateChange('user', text)}
        error={props.errorText}
        value={props.user}
      />
      <OutlinedTextField
        label="Password"
        keyboardType="default"
        secureTextEntry
        onChangeText={(text) => props.propagateChange('password', text)}
        error={props.errorText}
        value={props.password}
      />
    </>
  );
};

export default LogInJSX;
