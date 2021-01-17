import React, {useRef} from 'react';
import {View, Pressable, Text} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import SignUpButton from '../../UI/IconButton';
const ForgotForm = (props) => {
  const fieldRef = useRef();
  return (
    <>
      <View style={{width: '80%'}}>
        <OutlinedTextField
          label="User Name or Email"
          keyboardType="email-address"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
      </View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <SignUpButton
          title="Reset Password"
          backgroundColor={props.primary}
          color="#FFF"
          icon="email"
        />
      </View>
    </>
  );
};

export default ForgotForm;
