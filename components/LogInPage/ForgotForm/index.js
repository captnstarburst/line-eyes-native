import React, {useState} from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {Heading, Button, Icon} from 'material-bread';
import EmailValidator from '../../functions/EmailValidator';
import {styles} from './styles';
import {withFirebase} from '../../Firebase';
const ForgotForm = (props) => {
  const [userName, setUserName] = useState('');
  const [errorText, setErrorText] = useState('');
  const [asyncWork, setAsyncWork] = useState(false);
  const [resetStatus, setResetStatus] = useState(false);

  const handleChange = (text) => {
    setErrorText('');
    setUserName(text);
  };
  const handleReset = () => {
    if (userName === '') {
      setErrorText('enter a user name or email');
    } else if (EmailValidator(userName)) {
      setAsyncWork(true);
      props.firebase
        .doPasswordReset(userName)
        .then(() => {
          setResetStatus(true);
          setAsyncWork(false);
        })
        .catch((err) => {
          setAsyncWork(false);
          setErrorText('Email is not registered');
        });
    } else {
      setAsyncWork(true);
      const functions = props.firebase.useFunctions();
      const ReturnEmail = functions.httpsCallable('ReturnEmail');

      ReturnEmail({display_name: userName})
        .then((result) => {
          if (result.data === '') throw new Error('no user');
          return props.firebase.doPasswordReset(result.data);
        })
        .then(() => {
          setResetStatus(true);
          setAsyncWork(false);
        })
        .catch((err) => {
          setAsyncWork(false);
          setErrorText('User Name is not registered');
        });
    }
  };

  if (resetStatus) return <Heading type={5} text="Reset Email Sent" />;

  return (
    <>
      <View style={styles.root}>
        <OutlinedTextField
          label="User Name or Email"
          keyboardType="email-address"
          value={userName}
          onChangeText={(text) => handleChange(text)}
          error={errorText}
        />
      </View>
      <View style={styles.centerItems}>
        <Button
          text={'Reset Password'}
          style={{backgroundColor: '#3F51B5'}}
          icon={<Icon name="email" />}
          type="contained"
          loading={asyncWork}
          iconPosition={'right'}
          onPress={handleReset}
          fullWidth
        />
      </View>
    </>
  );
};

export default withFirebase(ForgotForm);
