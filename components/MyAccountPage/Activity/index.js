import React from 'react';
import {ScrollView, View, Text, Dimensions, Pressable} from 'react-native';
import ActivityCard from '../../UI/Cards/ActivityCard';

const Activity = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 50,
        }}>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </View>
    </ScrollView>
  );
};

export default Activity;
