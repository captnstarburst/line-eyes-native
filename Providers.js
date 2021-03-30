import React from 'react';
// import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import Firebase, {FirebaseContext} from './components/Firebase';
import {BreadProvider} from 'material-bread';
import Toast from 'react-native-toast-message';

const Providers: () => React$Node = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return (
            <BreadProvider>
              <App firebase={firebase} />
              <Toast ref={(ref) => Toast.setRef(ref)} />
            </BreadProvider>
          );
        }}
      </FirebaseContext.Consumer>
    </FirebaseContext.Provider>
  );
};

export default Providers;
