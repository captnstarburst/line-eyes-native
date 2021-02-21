import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import AppBar from '../UI/AppBar';
import TagDrawer from '../UI/TagDrawer';
import Chips from '../UI/Chips';
import UploadCard from '../UI/Cards/UploadCard';

const PhotoPage = () => {
  return (
    <ScrollView>
      <AppBar />
      <TagDrawer />
      <View style={{backgroundColor: '#CFE8FC', width: '100%', height: 500}}>
        <Chips />
        <UploadCard />
      </View>
    </ScrollView>
  );
};

export default PhotoPage;
