import react from 'react';
import React from 'react';
import {ScrollView, View, Text, Dimensions, Pressable} from 'react-native';
import {IconButton, Button} from 'material-bread';
import Draggable from 'react-native-draggable';
import AppBar from '../UI/AppBar';
import Card from '../UI/Card';
import Chips from '../UI/Chips';
import Footer from '../UI/Footer';

const LandingPage = () => {
  return (
    <ScrollView>
      <AppBar />
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F7F7',
          height: 40,
          justifyContent: 'center',
          // alignContent: 'center',
          borderColor: 'black',
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}>
        <Pressable onPress={() => console.log('onSearch')}>
          <IconButton
            style={{alignSelf: 'center'}}
            name="arrow-drop-up"
            size={32}
          />
        </Pressable>
        {/* <Text >Button</Text> */}
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          height: 60,
          justifyContent: 'center',
          alignContent: 'center',
          borderColor: 'black',
          borderBottomWidth: 1,
          // borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          alignItems: 'center',
        }}>
        <Button text={'Pregnancy Test'} type="contained" />
      </View>
      <View
        style={{
          backgroundColor: '#CFE8FC',
          height: Dimensions.get('window').height - 50,
        }}>
        <View style={{marginTop: 100, alignItems: 'center'}}>
          <Chips />
        </View>
        <Draggable x={50} y={50}>
          <View style={{marginTop: 100, alignItems: 'center'}}>
            <Card />
          </View>
        </Draggable>
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
