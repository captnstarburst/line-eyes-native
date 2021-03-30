import React, {useState} from 'react';
import {View} from 'react-native';
import {Heading, Subtitle, Button, Icon} from 'material-bread';
import LogInJSX from '../LogInJSX/LogIn';
import Modal from 'react-native-modal';
import {withFirebase} from '../../Firebase';

const ReAuthModal = (props) => {
  const [user, setUser] = useState(props.display_name);
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [asyncWork, setAsyncWork] = useState(false);

  const handleFormChange = (id, value) => {
    switch (id) {
      case 'user':
        setUser(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

    if (setErrorText) setErrorText('');
  };

  const handleSignIn = () => {
    setAsyncWork(true);

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
        setAsyncWork(false);
        props.onSuccess();
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
              break;
          }
        }
      });
  };

  return (
    <Modal
      isVisible={props.open}
      onBackdropPress={props.toggle}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      backdropTransitionOutTiming={600}>
      <View
        style={{
          backgroundColor: 'white',
          borderWidth: 2,
          height: 325,
          padding: 35,
        }}>
        <Heading type={5} text="Re-Authenticate" />
        <Subtitle
          style={{marginTop: 25}}
          type={1}
          text="This action requires a re-log in"
        />
        <View style={{marginTop: 25}}>
          <LogInJSX
            propagateChange={handleFormChange}
            errorText={errorText}
            user={user}
            password={password}
            readOnly
          />
          <Button
            text={'Log In'}
            style={{backgroundColor: '#3F51B5'}}
            icon={<Icon name="account-circle" />}
            type="contained"
            loading={asyncWork}
            iconPosition={'right'}
            onPress={handleSignIn}
            fullWidth
          />
        </View>
      </View>
      {/* <Fade in={props.open}>
        <div className={classes.paper}>
          <h2 id="reAuth-title">Re-Authenticate</h2>
          <p id="transition-modal-description">
            This action requires a re-log in
          </p>
          <form className={classes.root} noValidate autoComplete="on">
            <LogInJSX
              propagateChange={handleFormChange}
              errorText={errorText}
              display_name={props.display_name}
              readOnly
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={asyncWork ? <CircularProgress /> : <AccountCircleIcon />}
              style={{width: '95%'}}
              onClick={handleSignIn}
              disabled={asyncWork}>
              Log In
            </Button>
          </form>
        </div>
      </Fade> */}
    </Modal>
  );
};

export default withFirebase(ReAuthModal);
