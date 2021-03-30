import React from 'react';
import {ScrollView, View} from 'react-native';
import {Switch, Route} from 'react-router-native';
import AppBar from '../UI/AppBar';
import Profile from '../UI/Profile';
import Footer from '../UI/Footer';
import CenteredTabs from './Navigation';
import Stats from './Stats';
import Uploads from './Uploads';
import Activity from './Activity';
import Settings from './Settings';
import useUserDataListener from '../hooks/useUserDataListener';
import {styles} from './styles';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
import {withAuthorization} from '../Session';
// import {withRouter} from 'react-router-native';

const MyAccountPage = (props) => {
  const userData = useUserDataListener(props.firebase);

  return (
    <ScrollView>
      <AppBar />
      <Profile edit userData={userData} />
      <CenteredTabs />
      <View style={styles.root}>
        <Switch>
          <Route path={`/Me/stats`} component={Stats} />
          <Route path={`/Me/uploads`} component={Uploads} />
          <Route path={`/Me/activity`} component={Activity} />
          <Route path={`/Me/settings`}>
            {userData && <Settings userData={userData} />}
          </Route>
          {/* <Route path={`/Me/uploads`}>
          {userData && <Uploads userData={userData} />}
        </Route>
        <Route path={`/Me/activity`} component={Activity} />
        
        </Route> */}
        </Switch>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
};

const condition = (authUser) => !!authUser;

const ComposedMyAccount = compose(withFirebase)(MyAccountPage);

export default withAuthorization(condition)(ComposedMyAccount);
