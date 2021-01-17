import React, {useRef} from 'react';
import {View, Pressable, Text} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import SignUpButton from '../../UI/IconButton';

const LogInForm = (props) => {
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
        <OutlinedTextField
          label="Password"
          keyboardType="default"
          secureTextEntry
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
      </View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <SignUpButton
          title="Log In"
          backgroundColor={props.primary}
          color="#FFF"
          icon="account-circle"
        />
        <Pressable style={{marginTop: 30}} onPress={props.propagateForgot}>
          <Text
            style={{
              color: props.primary,
            }}>
            FORGOT PASSWORD
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default LogInForm;
