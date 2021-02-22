import React from 'react';
import {ScrollView, View, Dimensions} from 'react-native';
import Draggable from 'react-native-draggable';
import AppBar from '../UI/AppBar';
import TagDrawer from '../UI/TagDrawer';
import LoadingCard from '../UI/Cards/LoadingCard';
import NoMoreCard from '../UI/Cards/NoMoreCard';
import Card from '../UI/Cards/ActivityCard';
import PaperChips from '../UI/Chips/PaperChips';
import Footer from '../UI/Footer';

const LandingPage = () => {
  return (
    <ScrollView>
      <AppBar />
      <TagDrawer />

      <View
        style={{
          backgroundColor: '#CFE8FC',
          height: Dimensions.get('window').height - 50,
        }}>
        <PaperChips />
        <LoadingCard />
        {/* <NoMoreCard /> */}
        {/* <Draggable
          x={0}
          y={0}
          shouldReverse
          children={
            <View
              style={{
                width: 395,
                // height: 500,
                marginTop: 100,
                alignItems: 'center',
              }}>
              <Card />
            </View>
          }
        /> */}
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

export default LandingPage;
