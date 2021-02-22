import React from 'react';
import {Text, Image} from 'react-native';

import {
  Card,
  CardMedia,
  CardContent,
  BottomNavigation,
  BottomNavigationItem,
  Badge,
} from 'material-bread';

import ViewChips from '../../Chips/ViewChips';

const ActivityCard = () => {
  return (
    <Card style={{width: '75%', marginTop: 50}}>
      <CardMedia
        image={
          <Image
            style={{width: '100%', height: 500}}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/line-eyez.appspot.com/o/Tests%2FB4fIEWq31BVC6n8y6xl24prYnNG2%2Fda66da2c-800b-42ac-8aff-8b4bcd4e3315_500x500?alt=media&token=adaa38b5-bca0-499a-9e03-b8c0524b23db',
            }}
            resizeMode="cover"
          />
        }
      />
      <CardContent>
        <Text style={{color: 'rgba(0,0,0,1)', fontSize: 24}}>
          User Name 12-2-2021
        </Text>
        <ViewChips />
      </CardContent>
      <BottomNavigation
        style={{width: '100%'}}
        // value={state.two}
        showLabels
        // handleChange={(value) => store.set({two: value})}
        backgroundColor={'#000'}
        actionItems={[
          <>
            <BottomNavigationItem
              icon={'do-not-disturb-on'}
              label={'Negative'}
            />

            <Badge style={{marginLeft: -45}} size={20} content={0} />
          </>,
          <>
            <BottomNavigationItem key={2} icon={'warning'} label={'Invalid'} />

            <Badge style={{marginLeft: -45}} size={20} content={0} />
          </>,
          <>
            <BottomNavigationItem key={2} icon={'pause'} label={'Positive'} />

            <Badge style={{marginLeft: -45}} size={20} content={0} />
          </>,
        ]}
      />
    </Card>
  );
};

export default ActivityCard;
