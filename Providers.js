import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import Firebase, {FirebaseContext} from './components/Firebase';
import {BreadProvider} from 'material-bread';

const Providers: () => React$Node = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return (
            // <PaperProvider>
            <BreadProvider>
              <App firebase={firebase} />
            </BreadProvider>
            // </PaperProvider>
          );
        }}
      </FirebaseContext.Consumer>
    </FirebaseContext.Provider>
  );
};

// export default App;
export default Providers;