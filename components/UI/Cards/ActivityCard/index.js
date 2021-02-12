import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  Ripple,
  Badge,
  BottomNavigation,
} from 'material-bread';

import Chips from '../../Chips';

const ActivityCard = () => {
  return (
    <Card style={{width: '75%'}}>
      <CardMedia
        image={
          <Image
            style={{width: '100%', height: 500}}
            source={{
              uri:
                'https://preview.redd.it/8o8tgjm7s4f61.jpg?width=640&crop=smart&auto=webp&s=597a2aaf9b88eb159dce369f8f30c47345bbf943',
            }}
            resizeMode="cover"
          />
        }
      />
      <CardContent>
        <Text style={{color: 'rgba(0,0,0,.6)', fontSize: 14}}>
          User Name 12-2-2021
        </Text>
        {/* <Chips /> */}
      </CardContent>
      <BottomNavigation
        style={{width: '100%'}}
        // value={state.two}
        showLabels
        // handleChange={(value) => store.set({two: value})}
        backgroundColor={'#000'}
        actionItems={[
          {icon: 'do-not-disturb-on', label: 'Negative'},
          {icon: 'warning', label: 'Invalid'},
          {icon: 'pause', label: 'Positive'},
        ]}
      />
    </Card>
  );
};

export default ActivityCard;
