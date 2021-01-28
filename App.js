import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
// import ROUTES from './components/constants/routes';
import LogInPage from './components/LogInPage';
import Landing from './components/LandingPage';
import TermsConditions from './components/LegalPage/TermsConditions';
import PrivacyPolicy from './components/LegalPage/PrivacyPolicy';
import Firebase, {withFirebase} from './components/Firebase';
import {withAuthentication} from './components/Session';

const App = (props) => {
  return (
    <NativeRouter>
      <Route exact path={'/'} component={LogInPage} />
      <Route exact path={'/error'} component={Landing} />
      <Route exact path={'/terms-and-conditions'} component={TermsConditions} />
      <Route exact path={'/privacy-policy'} component={PrivacyPolicy} />
    </NativeRouter>
  );
};

// export default App;
export default withFirebase(withAuthentication(App));
