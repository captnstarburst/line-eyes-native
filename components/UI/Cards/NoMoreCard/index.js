import React from 'react';
import {Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Card, CardContent, Heading} from 'material-bread';
import ViewChips from '../../Chips/ViewChips';

const ActivityCard = () => {
  return (
    <Animatable.View
      animation="zoomIn"
      iterationCount={1}
      duration={500}
      style={{
        // height: 75,
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
      }}>
      <Card
        shadow={7}
        style={{
          backgroundColor: '#CFE8FC',
          width: '75%',
          height: 150,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Heading type={5} text="That's all for now." />
      </Card>
    </Animatable.View>
  );
};

export default ActivityCard;
