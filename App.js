import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NativeRouter, Route, Link} from 'react-router-native';
// import ROUTES from './components/constants/routes';
import LogInPage from './components/LogInPage';
import Landing from './components/LandingPage';
import Firebase, {FirebaseContext, withFirebase} from './components/Firebase';
// import {} from './components/Firebase';
import {withAuthentication} from './components/Session';

const App = (props) => {
  return (
    <NativeRouter>
      <Route exact path={'/'} component={LogInPage} />
      <Route exact path={'/error'} component={Landing} />
    </NativeRouter>
  );
};

// export default App;
export default withFirebase(withAuthentication(App));
