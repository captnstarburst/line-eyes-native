import React, {useState, useEffect, useRef, useCallback} from 'react';
import SettingsJSX from './Settings';
import {FormattedDateString} from '../../functions/DefaultDateString';
import EmailValidator from '../../functions/EmailValidator';
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'react-native-image-picker';
import {withFirebase} from '../../Firebase';

const Settings = (props) => {
  const [userInfo, setUserInfo] = useState({
    dateObject: null,
    dateOfBirth: null,
    email: null,
    currentEmail: null,
    first_name: props.userData.first_name,
    last_name: props.userData.last_name,
    new_password: null,
    display_name: props.userData.display_name,
    currentDisplayName: props.userData.display_name,
    push_notifications: false,
    email_notifications: false,
  });

  const [userUpdatedInfo, setUserUpdatedInfo] = useState(false);
  const [userUpdateEmail, setUserUpdateEmail] = useState(false);
  const [userUpdateDisplayName, setUserUpdateDisplayName] = useState(false);
  const [displayNameError, setDisplayNameError] = useState('');
  const [mountReAuth, setMountReAuth] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  const [onError, setOnError] = useState(false);
  const [accountDeletion, setAccountDeletion] = useState(false);

  const timer = useRef(null);
  const emailTimer = useRef(null);
  const displayNameTimer = useRef(null);

  const uid = props.firebase.currentUserUID();
  const firestore = props.firebase.getFirestore();
  useEffect(() => {
    firestore
      .doc('Birthdays/' + uid)
      .get()
      .then((doc) => {
        if (!doc.data()) throw new Error('User is missing Birthday Doc');

        const bDateObj = new Date(doc.data().birthday.seconds * 1000);

        setUserInfo((prevState) => ({
          ...prevState,
          dateOfBirth: FormattedDateString(bDateObj),
          dateObject: bDateObj,
        }));
      })
      .catch((err) => {
        //handle err
      });
  }, [firestore, uid]);

  useEffect(() => {
    firestore
      .doc('Notifications/' + uid)
      .get()
      .then((doc) => {
        if (!doc.data()) throw new Error('User is missing Notification Doc');

        setUserInfo((prevState) => ({
          ...prevState,
          push_notifications: doc.data().push_notifications,
          email_notifications: doc.data().email_notifications,
        }));
      })
      .catch((err) => {
        //handle err
      });
  }, [firestore, uid]);

  useEffect(() => {
    firestore
      .doc('Emails/' + uid)
      .get()
      .then((doc) => {
        if (!doc.data()) throw new Error('User is missing Email Doc');

        setUserInfo((prevState) => ({
          ...prevState,
          email: '',
          currentEmail: doc.data().email,
        }));
      })
      .catch((err) => {
        //handle err
      });
  }, [firestore, uid]);

  useEffect(() => {
    clearTimeout(timer.current);

    if (userUpdatedInfo) {
      timer.current = setTimeout(() => {
        const birthdayRef = firestore.doc('Birthdays/' + uid);
        const notificationRef = firestore.doc('Notifications/' + uid);
        const userRef = firestore.doc('Users/' + uid);

        userRef
          .update({
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
          })
          .catch((err) => {
            //handle err
          });

        birthdayRef
          .update({
            birthday: props.firebase.timestampFrom(userInfo.dateObject),
          })
          .catch((err) => {
            //handle err
          });

        notificationRef
          .update({
            email_notifications: userInfo.email_notifications,
            push_notifications: userInfo.push_notifications,
          })
          .catch((err) => {
            //handle err
          });

        setUserUpdatedInfo(false);
      }, 2500);
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [
    firestore,
    props.firebase,
    uid,
    userInfo.birthdate,
    userInfo.display_name,
    userInfo.email_notifications,
    userInfo.first_name,
    userInfo.last_name,
    userInfo.push_notifications,
    userUpdatedInfo,
  ]);

  useEffect(() => {
    clearTimeout(emailTimer.current);

    if (
      userUpdateEmail &&
      EmailValidator(userInfo.email) &&
      userInfo.email !== userInfo.currentEmail
    ) {
      emailTimer.current = setTimeout(() => {
        setMountReAuth(true);
        setUserUpdateEmail(false);
      }, 2500);
    }

    return () => {
      clearTimeout(emailTimer.current);
    };
  }, [userInfo.currentEmail, userInfo.email, userUpdateEmail]);

  useEffect(() => {
    clearTimeout(emailTimer.current);

    if (
      userUpdateEmail &&
      EmailValidator(userInfo.email) &&
      userInfo.email !== userInfo.currentEmail
    ) {
      emailTimer.current = setTimeout(() => {
        setMountReAuth(true);
      }, 2500);
    }

    return () => {
      clearTimeout(emailTimer.current);
    };
  }, [userInfo.currentEmail, userInfo.email, userUpdateEmail]);

  useEffect(() => {
    clearTimeout(displayNameTimer.current);

    if (
      userUpdateDisplayName &&
      userInfo.display_name !== userInfo.currentDisplayName
    ) {
      displayNameTimer.current = setTimeout(() => {
        firestore
          .collection('DisplayNames')
          .where('display_name', '==', userInfo.display_name)
          .get()
          .then(function (querySnapshot) {
            if (!querySnapshot.empty)
              setDisplayNameError('User Name is already taken');
            else setMountReAuth(true);
          });
      }, 3500);
    }

    return () => {
      clearTimeout(displayNameTimer.current);
    };
  }, [
    firestore,
    userInfo.currentDisplayName,
    userInfo.display_name,
    userInfo.username,
    userUpdateDisplayName,
  ]);

  useEffect(() => {
    if (!onSuccess) return;
    Toast.show({
      text1: 'Information updated, successfully',
      position: 'bottom',
      type: 'success',
    });
  }, [onSuccess]);

  useEffect(() => {
    if (!onError) return;
    Toast.show({
      text1: 'Error saving info, please try again later.',
      position: 'bottom',
      type: 'error',
    });
  }, [onError]);

  const updateUserInfo = (value, text) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [value]: typeof text === 'string' ? text.trim() : text,
    }));

    switch (value) {
      case 'email':
        setUserUpdateEmail(true);
        break;
      case 'display_name':
        setDisplayNameError('');
        setUserUpdateDisplayName(true);
        break;
      default:
        setUserUpdatedInfo(true);
    }
  };

  const handleToggle = (id) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    setUserUpdatedInfo(true);
  };

  const handlePasswordReset = (e) => {
    props.firebase.doPasswordReset(props.firebase.currentUserEmail());
    props.firebase.doSignOut();
  };

  const toggleReAuthMount = useCallback(() => {
    setMountReAuth((prevState) => !prevState);
  }, []);

  const reAuthSuccess = () => {
    if (userUpdateEmail && userUpdateDisplayName) {
      changeEmail();
      changeUserName();
    } else if (userUpdateEmail) {
      changeEmail();
    } else if (userUpdateDisplayName) {
      changeUserName();
    } else if (accountDeletion) {
      props.firebase.doAccountDelete();
    }
  };
  const changeEmail = () => {
    const emailsRef = firestore.doc('Emails/' + uid);

    props.firebase
      .updateUserEmail(userInfo.email)
      .then(() => {
        return emailsRef.update({
          email: userInfo.email,
        });
      })
      .then(() => {
        toggleReAuthMount();
        setOnSuccess(true);
        setUserUpdateEmail(false);
      })
      .catch((err) => {
        setOnError(true);
      });
  };

  const changeUserName = () => {
    const displayNamesRef = firestore.doc('DisplayNames/' + uid);

    displayNamesRef
      .update({
        display_name: userInfo.display_name,
      })
      .then(() => {
        toggleReAuthMount();
        setOnSuccess(true);
        setUserUpdateDisplayName(false);
      })
      .catch((err) => {
        setOnError(true);
      });
  };

  const handleDeletionClick = () => {
    setAccountDeletion(true);
    toggleReAuthMount();
  };

  const handleUploadClick = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log(response.uri);

      if (response.didCancel) {
        // console.log('User cancelled photo picker');
        // Alert.alert('You did not select any image');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
        setOnError(true);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        uploadFileSelection(response.uri);
        // let source = {uri: response.uri};
        // console.log({source});
      }
    });
  };

  const uploadFileSelection = async (uri) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

    const uploadTask = props.firebase
      .getStorage()
      .child(`/Users/${uid}/profile_pic`)
      .putFile(uploadUri);

    await uploadTask.on(
      'state_changed',
      null,
      (error) => {
        setOnError(true);
      },
      () => {
        props.firebase
          .getStorage()
          .child(`/Users/${uid}/profile_pic`)
          .getDownloadURL()
          .then((url) => {
            firestore
              .doc('Users/' + uid)
              .update({
                profile_pic: url,
              })
              .catch((err) => {
                setOnError(true);
              });
          });
      },
    );
  };

  return (
    <SettingsJSX
      userInfo={userInfo}
      propagateUpdate={updateUserInfo}
      propagateToggle={handleToggle}
      propagateReset={handlePasswordReset}
      toggleReAuthMount={toggleReAuthMount}
      mountReAuth={mountReAuth}
      propagateAuthSuccess={reAuthSuccess}
      displayNameError={displayNameError}
      onSuccess={onSuccess}
      onError={onError}
      propagateDeleteClick={handleDeletionClick}
      propagateUploadClick={handleUploadClick}
      profile_pic={props.userData.profile_pic}
      avatar={props.userData.avatar}
    />
  );
};

export default withFirebase(Settings);
