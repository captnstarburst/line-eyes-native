import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Card,
  CardMedia,
  BottomNavigation,
  BottomNavigationItem,
  Badge,
} from 'material-bread';
import * as Animatable from 'react-native-animatable';
import Placeholder from '../../../../assets/placeholder.png';

const UploadCard = () => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Animatable.View
        animation="zoomIn"
        iterationCount={1}
        duration={500}
        style={{
          // padding: 8,
          height: 75,
          width: '100%',
          alignItems: 'center',
          marginTop: 15,
        }}
        // direction="alternate"
      >
        <Card style={{width: '75%'}}>
          <CardMedia
            image={
              <Image
                style={{width: '80%', height: 500}}
                source={Placeholder}
                resizeMode="contain"
              />
            }
          />

          <BottomNavigation
            style={{width: '100%'}}
            showLabels
            backgroundColor={'#000'}
            actionItems={[
              <>
                <BottomNavigationItem
                  key={2}
                  icon={'do-not-disturb-on'}
                  label={'Negative'}
                />

                <Badge style={{marginLeft: -45}} size={20} content={0} />
              </>,
              <>
                <BottomNavigationItem
                  key={2}
                  icon={'warning'}
                  label={'Invalid'}
                />

                <Badge style={{marginLeft: -45}} size={20} content={0} />
              </>,
              <>
                <BottomNavigationItem
                  key={2}
                  icon={'pause'}
                  label={'Positive'}
                />

                <Badge style={{marginLeft: -45}} size={20} content={0} />
              </>,
              //   <BottomNavigationItem
              //     key={1}
              //     icon={'do-not-disturb-on'}
              //     // label={'Negative'}
              //     badgeProps={{
              //       content: 0,
              //       size: 34,
              //       color: 'white',
              //     }}
              //   />,
              //   {
              //     icon: 'do-not-disturb-on',
              //     label: 'Negative',
              //     badgeProps: {
              //       content: 72,
              //       size: 14,
              //       color: 'blue',
              //     },
              //   },
              //   {icon: 'warning', label: 'Invalid'},
              //   {icon: 'pause', label: 'Positive'},
            ]}
          />
        </Card>
      </Animatable.View>
    </View>
  );
};

export default UploadCard;
