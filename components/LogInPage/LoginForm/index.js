import React, {useRef} from 'react';
import {styles} from './styles';
import {View, Pressable, Text} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import SignUpButton from '../../UI/IconButton';

const LogInForm = (props) => {
  const fieldRef = useRef();

  return (
    <>
      <View style={styles.root}>
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
      <View style={styles.contentCenter}>
        <SignUpButton
          title="Log In  "
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
