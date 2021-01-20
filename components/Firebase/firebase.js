// import * as firebase from 'firebase';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/database';
import '@react-native-firebase/firestore';
import '@react-native-firebase/storage';
import '@react-native-firebase/functions';

// const config = {
//   apiKey: 'AIzaSyB22bMbvLa0Caly9wVrBPlMOKl_euS6Vp4',
//   authDomain: 'line-eyez.firebaseapp.com',
//   databaseURL: 'https://line-eyez.firebaseio.com',
//   projectId: 'line-eyez',
//   storageBucket: 'line-eyez.appspot.com',
//   messagingSenderId: '829574106248',
//   appId: '1:829574106248:android:1240d684e915955020233d',
//   measurementId: 'G-ZDBMNDGK0W',
// };

class Firebase {
  constructor() {
    // app.initializeApp();
    // app.initializeApp(config);
    this.functions = app.functions();
    this.auth = auth();
    this.firestore = app.firestore();
    this.storage = app.storage();
    // this.googleProvider = new app.auth.GoogleAuthProvider();
    // this.facebookProvider = new app.auth.FacebookAuthProvider();
    // this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  // doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  // doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  // doPasswordUpdate = (password) =>
  //   this.auth.currentUser.updatePassword(password);

  // doAccountDelete = () => this.auth.currentUser.delete();

  // getFirestore() {
  //   return this.firestore;
  // }

  // getStorage() {
  //   return this.storage.ref();
  // }

  // useFunctions() {
  //   return this.functions;
  // }

  // currentUserUID() {
  //   return this.auth.currentUser.uid;
  // }

  // currentUserEmail() {
  //   return this.auth.currentUser.email;
  // }

  // updateUserEmail(emailAddress) {
  //   return this.auth.currentUser.updateEmail(emailAddress);
  // }
  // async getRole() {
  //   const firestore = this.getFirestore();
  //   const uid = this.currentUserUID();

  //   const role = await firestore
  //     .doc('Users/' + uid + '/Role/Role')
  //     .get()
  //     .then((doc) => {
  //       return doc.data().role;
  //     })
  //     .catch((err) => {
  //       return '';
  //     });

  //   return role;
  // }

  // timestampFrom(date) {
  //   date.setDate(date.getDate() + 1);
  //   return app.firestore.Timestamp.fromDate(date);
  // }

  // incrementCount() {
  //   return app.firestore.FieldValue.increment(1);
  // }

  // decrementCount() {
  //   return app.firestore.FieldValue.increment(-1);
  // }
}

export default Firebase;
