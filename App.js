import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NativeRouter, Route, Link} from 'react-router-native';
import ROUTES from './components/constants/routes';
import LogInPage from './components/LogInPage';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <PaperProvider>
        {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
        <Route exact path={'/'} component={LogInPage} />
        {/* <Route path={ROUTES.My_Account} component={MyAccountPage} />
        <Route path={ROUTES.PHOTO} component={PhotoPage} /> */}
        {/* <Route path={ROUTES.LOG_IN} component={LogInPage} /> */}
        {/* <Route exact path={ROUTES.PRIVACY} component={PrivacyPage} />
        <Route exact path={ROUTES.TERMS} component={TermsPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      </PaperProvider>
    </NativeRouter>
  );
};

export default App;
