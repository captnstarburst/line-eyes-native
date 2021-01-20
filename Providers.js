import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';
// import LogInPage from './components/LogInPage';
import Firebase, {FirebaseContext} from './components/Firebase';

const Providers: () => React$Node = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return (
            <PaperProvider>
              <App firebase={firebase} />
            </PaperProvider>
          );
        }}
      </FirebaseContext.Consumer>
      {/* <NativeRouter> */}
      {/* <PaperProvider> */}
      {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
      {/* <Route exact path={'/'} component={LogInPage} /> */}
      {/* <Route path={ROUTES.My_Account} component={MyAccountPage} />
        <Route path={ROUTES.PHOTO} component={PhotoPage} /> */}
      {/* <Route path={ROUTES.LOG_IN} component={LogInPage} /> */}
      {/* <Route exact path={ROUTES.PRIVACY} component={PrivacyPage} />
        <Route exact path={ROUTES.TERMS} component={TermsPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      {/* </PaperProvider> */}
      {/* // </NativeRouter> */}
    </FirebaseContext.Provider>
  );
};

// export default App;
export default Providers;
