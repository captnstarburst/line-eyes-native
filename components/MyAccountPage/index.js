import React from 'react';
import {ScrollView, View, Text, Dimensions, Pressable} from 'react-native';
import {Switch, Route} from 'react-router-native';
import AppBar from '../UI/AppBar';
import Profile from '../UI/Profile';
import CenteredTabs from './Navigation';
import Stats from './Stats';

const MyAccountPage = () => {
  return (
    <ScrollView>
      <AppBar />
      <Profile />
      <CenteredTabs />
      <View style={{backgroundColor: '#cfe8fc'}}>
        <Switch>
          <Route path={`/Me/stats`} component={Stats} />
          {/* <Route path={`/Me/uploads`}>
          {userData && <Uploads userData={userData} />}
        </Route>
        <Route path={`/Me/activity`} component={Activity} />
        <Route path={`/Me/settings`}>
          {userData && <Settings userData={userData} />}
        </Route> */}
        </Switch>
      </View>
    </ScrollView>
  );
};

export default MyAccountPage;
