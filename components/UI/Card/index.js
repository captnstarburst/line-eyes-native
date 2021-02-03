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

import Chips from '../Chips';

const MainCard = () => {
  return (
    <Card style={{maxWidth: 400, width: '75%'}}>
      <CardMedia
        image={
          <Image
            style={{flex: 1, width: '100%', height: 400}}
            source={{
              uri:
                'https://preview.redd.it/8o8tgjm7s4f61.jpg?width=640&crop=smart&auto=webp&s=597a2aaf9b88eb159dce369f8f30c47345bbf943',
            }}
            resizeMode="cover"
          />
        }
      />
      {/* <CardContent>
        <Text style={{color: 'rgba(0,0,0,.6)', fontSize: 14}}>
          User Name 12-2-2021
        </Text>
        <Chips />
      </CardContent> */}
      <BottomNavigation
        style={{width: '100%'}}
        // value={state.two}
        showLabels
        // handleChange={(value) => store.set({two: value})}
        backgroundColor={'#000'}
        actionItems={[
          {icon: 'home', label: 'Home'},
          {icon: 'favorite', label: 'Favorite'},
          {icon: 'info', label: 'Info'},
        ]}
      />
    </Card>
  );
};

export default MainCard;
