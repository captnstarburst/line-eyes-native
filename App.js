import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
// import ROUTES from './components/constants/routes';
import LogInPage from './components/LogInPage';
import Landing from './components/LandingPage';
import TermsConditions from './components/LegalPage/TermsConditions';
import PrivacyPolicy from './components/LegalPage/PrivacyPolicy';
import MyAccountPage from './components/MyAccountPage';
import PhotoPage from './components/PhotoPage';
import AdminPage from './components/AdminPage';
import Firebase, {withFirebase} from './components/Firebase';
import {withAuthentication} from './components/Session';

const App = (props) => {
  return (
    <NativeRouter>
      <Route exact path={'/'} component={Landing} />
      <Route exact path={'/LogIn'} component={LogInPage} />
      <Route exact path={'/terms-and-conditions'} component={TermsConditions} />
      <Route exact path={'/privacy-policy'} component={PrivacyPolicy} />
      <Route path={'/Me'} component={MyAccountPage} />
      <Route path={'/upload-photo'} component={PhotoPage} />
      <Route path={'/admin'} component={AdminPage} />
    </NativeRouter>
  );
};

// export default App;
export default withFirebase(withAuthentication(App));
