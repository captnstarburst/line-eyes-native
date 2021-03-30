import React from 'react';
import {ScrollView, View} from 'react-native';
import ActivityCard from '../../UI/Cards/ActivityCard';

const Uploads = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 50,
        }}>
        {/* <ActivityCard /> */}
      </View>
    </ScrollView>
  );
};

export default Uploads;
