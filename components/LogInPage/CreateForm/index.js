import React, {useRef} from 'react';
import {View, Pressable, Text} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import SignUpButton from '../../UI/IconButton';
import DatePicker from '../../UI/DatePicker';
const CreateForm = (props) => {
  const fieldRef = useRef();
  return (
    <>
      <View style={{width: '80%'}}>
        <OutlinedTextField
          label="Email"
          keyboardType="email-address"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
        <OutlinedTextField
          label="User Name"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
        <OutlinedTextField
          label="Password"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
        <OutlinedTextField
          label="Re-Enter Password"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
        <OutlinedTextField
          label="Date Of Birth"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          ref={fieldRef}
        />
        <DatePicker />
      </View>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <SignUpButton
          title="Create Account"
          backgroundColor={props.primary}
          color="#FFF"
          icon="account-circle"
        />
      </View>
    </>
  );
};

export default CreateForm;
