import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {
  FormattedDateString,
  DefaultDateString,
} from '../../functions/DefaultDateString';
import EmailValidator from '../../functions/EmailValidator';
import CreateFormJSX from './CreateForm.jsx';
import {compose} from 'recompose';
import {withFirebase} from '../../Firebase';
import {withRouter} from 'react-router-native';

const CreateForm = (props) => {
  let minimumDateObj = new Date();
  minimumDateObj.setFullYear(minimumDateObj.getFullYear() - 13);
  const minimumDate = FormattedDateString(minimumDateObj);

  let defaultDateObj = new Date();
  defaultDateObj.setFullYear(defaultDateObj.getFullYear() - 18);
  const defaultDate = FormattedDateString(defaultDateObj);

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
    password_check: '',
    dateObject: defaultDateObj,
    dateOfBirth: defaultDate,
  });

  const [formError, setFormError] = useState({
    email: '',
    username: '',
    password: '',
    dateOfBirth: '',
  });

  const [checkingValues, setCheckingValues] = useState(true);
  const [asyncWork, setAsyncWork] = useState(false);

  const handleChange = (item, value) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [item]: value,
    }));
  };

  useEffect(() => {
    setCheckingValues(false);
    if (!EmailValidator(userInfo.email)) {
      setFormError((prevState) => ({
        ...prevState,
        email: 'check email for validity',
      }));
    } else {
      setFormError((prevState) => ({...prevState, email: ''}));
    }

    if (userInfo.username === '') {
      setFormError((prevState) => ({
        ...prevState,
        username: 'username is missing',
      }));
    } else {
      setFormError((prevState) => ({...prevState, username: ''}));
    }

    if (userInfo.password !== userInfo.password_check) {
      setFormError((prevState) => ({
        ...prevState,
        password: 'passwords do not match',
      }));
    } else {
      setFormError((prevState) => ({...prevState, password: ''}));
    }

    if (userInfo.dateOfBirth > minimumDate) {
      setFormError((prevState) => ({
        ...prevState,
        dateOfBirth: 'must be older than 13 years of age',
      }));
    } else {
      setFormError((prevState) => ({...prevState, dateOfBirth: ''}));
    }
  }, [minimumDate, userInfo]);

  const handleCreateClick = (e) => {
    setAsyncWork(true);

    let check = true;
    const firestore = props.firebase.getFirestore();

    setCheckingValues(true);

    firestore
      .collection('DisplayNames')
      .where('display_name', '==', userInfo.username)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          setFormError((prevState) => ({
            ...prevState,
            username: 'user name is taken',
          }));
          check = false;
        }
      })
      .then(() => {
        for (const item in formError) {
          if (formError[item]) {
            check = false;
            return;
          }
        }
      })
      .then(() => {
        if (check) {
          return createUser();
        }
        setAsyncWork(false);
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error);
        setAsyncWork(false);
      });
  };

  const createUser = () => {
    const firestore = props.firebase.getFirestore();

    props.firebase
      .doCreateUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(async (authUser) => {
        await firestore
          .collection('Users')
          .doc(authUser.user.uid)
          .set({
            display_name: userInfo.username,
            first_name: '',
            joined: props.firebase.timestampFrom(new Date()),
            last_name: '',
            profile_pic: false,
          });

        return authUser;
      })
      .then(async (authUser) => {
        await firestore.collection('Emails').doc(authUser.user.uid).set({
          email: userInfo.email,
          display_name: userInfo.username,
        });

        return authUser;
      })
      .then(async (authUser) => {
        await firestore
          .collection('Birthdays')
          .doc(authUser.user.uid)
          .set({
            birthday: props.firebase.timestampFrom(
              new Date(userInfo.dateOfBirth),
            ),
          });

        return authUser;
      })
      .then(async (authUser) => {
        await firestore.collection('Notifications').doc(authUser.user.uid).set({
          push_notifications: true,
          email_notifications: true,
        });

        return authUser;
      })
      .then(async (authUser) => {
        await firestore.collection('DisplayNames').doc(authUser.user.uid).set({
          display_name: userInfo.username,
        });

        return;
      })

      .then(() => {
        props.history.push('/');
      })
      .catch(function (err) {
        const errorCode = err.code;
        setAsyncWork(false);

        if (errorCode === 'auth/weak-password') {
          setFormError((prevState) => ({
            ...prevState,
            password: 'weak password',
          }));
        } else if (errorCode === 'auth/email-already-in-use') {
          setFormError((prevState) => ({
            ...prevState,
            email: 'email is already in use',
          }));
        } else if (errorCode === 'auth/invalid-email') {
          setFormError((prevState) => ({
            ...prevState,
            email: 'check email for validity',
          }));
        } else {
          props.propagateError();
        }
      });
  };

  return (
    <CreateFormJSX
      userInfo={userInfo}
      checkingValues={checkingValues}
      formError={formError}
      handleChange={handleChange}
      asyncWork={asyncWork}
      handleCreateClick={handleCreateClick}
    />
  );
};

const ComposedCreateForm = compose(withRouter, withFirebase)(CreateForm);

export default ComposedCreateForm;
