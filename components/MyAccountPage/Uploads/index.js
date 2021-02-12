import React from 'react';
import {ScrollView, View, Text, Dimensions, Pressable} from 'react-native';
import ActivityCard from '../../UI/Cards/ActivityCard';

const Uploads = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 15,
          alignItems: 'center',
        }}>
        <ActivityCard />
      </View>
    </ScrollView>
  );
};

export default Uploads;