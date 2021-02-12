import React from 'react';
import {ScrollView, View, Text, Dimensions, Pressable} from 'react-native';
import {Switch, Route} from 'react-router-native';
import AppBar from '../UI/AppBar';
import Profile from '../UI/Profile';
import Footer from '../UI/Footer';
import CenteredTabs from './Navigation';
import Stats from './Stats';
import Uploads from './Uploads';
import Activity from './Activity';
import Settings from './Settings';

const MyAccountPage = () => {
  return (
    <ScrollView>
      <AppBar />
      <Profile />
      <CenteredTabs />
      <View
        style={{
          backgroundColor: '#cfe8fc',
          flex: 1,
          minHeight: Dimensions.get('window').height + 300,
        }}>
        <Switch>
          <Route path={`/Me/stats`} component={Stats} />
          <Route path={`/Me/uploads`} component={Uploads} />
          <Route path={`/Me/activity`} component={Activity} />
          <Route path={`/Me/settings`} component={Settings} />
          {/* <Route path={`/Me/uploads`}>
          {userData && <Uploads userData={userData} />}
        </Route>
        <Route path={`/Me/activity`} component={Activity} />
        <Route path={`/Me/settings`}>
          {userData && <Settings userData={userData} />}
        </Route> */}
        </Switch>
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
          // marginBottom: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default MyAccountPage;
