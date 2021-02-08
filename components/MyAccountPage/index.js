import React from 'react';
import {ScrollView, View, Text, Dimensions, Pressable} from 'react-native';
import AppBar from '../UI/AppBar';
import Profile from '../UI/Profile';

const MyAccountPage = () => {
  return (
    <ScrollView>
      <AppBar />
      <Profile />
    </ScrollView>
  );
};

export default MyAccountPage;
