import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {styles} from './styles';
import SignUpButton from '../../UI/IconButton';
import {compose} from 'recompose';
import {withFirebase} from '../../Firebase';
import {withRouter} from 'react-router-native';
import EmailValidator from '../../functions/EmailValidator';

const LogInForm = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [asyncWork, setAsyncWork] = useState(false);

  const handleChange = (text, name) => {
    switch (name) {
      case 'user':
        setUser(text);
        break;
      case 'password':
        setPassword(text);
        break;
      default:
        break;
    }
  };

  const handleSignIn = () => {
    setAsyncWork(true);
    if (EmailValidator(user)) {
      props.firebase
        .doSignInWithEmailAndPassword(user, password)
        .then((authUser) => {
          props.history.push('/');
        })
        .catch(function (error) {
          const errCode = error.code;

          setAsyncWork(true);

          switch (errCode) {
            case 'auth/wrong-password':
              setErrorText('incorrect password');
              break;
            case 'auth/user-not-found':
              setErrorText('email is not registered');
              break;
            default:
              props.propagateError();
              break;
          }
          console.log(JSON.stringify(error));
          // props.propagateError();
        });
    } else {
      const functions = props.firebase.useFunctions();
      const ReturnEmail = functions.httpsCallable('ReturnEmail');

      ReturnEmail({display_name: user})
        .then((result) => {
          if (result.data === '') throw new Error('no user');

          return props.firebase.doSignInWithEmailAndPassword(
            result.data,
            password,
          );
        })
        .then((authUser) => {
          props.history.push('/');
        })
        .catch((err) => {
          // setErrorText("No User Registered");
          setAsyncWork(false);

          if (err.message === 'no user') {
            setErrorText('User Name is not registered');
          } else {
            const errCode = err.code;
            switch (errCode) {
              case 'auth/wrong-password':
                setErrorText('incorrect password');
                break;
              case 'auth/user-not-found':
                setErrorText('email is not registered');
                break;
              default:
                props.propagateError();
                break;
            }
          }
        });
    }
  };

  return (
    <>
      <View style={styles.root}>
        <OutlinedTextField
          label="User Name or Email"
          keyboardType="email-address"
          onChangeText={(text) => handleChange(text, 'user')}
          // onSubmitEditing={onSubmitUser}
          // onFocus={onFocus}
          // ref={userFieldRef}
          value={user}
        />
        <OutlinedTextField
          label="Password"
          keyboardType="default"
          secureTextEntry
          // ref={passwordFieldRef}
          onChangeText={(text) => handleChange(text, 'password')}
          value={password}
        />
      </View>
      <View style={styles.contentCenter}>
        <SignUpButton
          title="Log In  "
          backgroundColor={props.primary}
          color="#FFF"
          icon="account-circle"
          onPress={handleSignIn}
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

const ComposedLogInForm = compose(withRouter, withFirebase)(LogInForm);

export default ComposedLogInForm;
