import React from 'react';
import {View} from 'react-native';
import {Paper, Heading, BodyText} from 'material-bread';
import * as Animatable from 'react-native-animatable';
import Chart from './Chart';

const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const Stats = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 25}}>
      <Animatable.View
        animation="zoomIn"
        iterationCount={1}
        duration={500}
        style={{
          // padding: 8,
          height: 75,
          width: '50%',
          // alignItems: 'center',
          marginTop: 25,
        }}
        // direction="alternate"
      >
        <Paper
          style={{
            padding: 8,
            flex: 1,
            height: 75,
            width: '100%',
            alignItems: 'center',
            // marginTop: 15,
          }}
          elevation={2}>
          <Heading type={6} text="Tests Uploaded" />
          <BodyText type={1} text="0" style={{marginTop: 15}} />
        </Paper>
      </Animatable.View>

      <Animatable.View
        animation="zoomIn"
        iterationCount={1}
        duration={1500}
        style={{
          // padding: 8,
          height: 75,
          width: '50%',
          // alignItems: 'center',
          marginTop: 25,
        }}
        // direction="alternate"
      >
        <Paper
          style={{
            padding: 8,
            height: 75,
            width: '100%',
            alignItems: 'center',
            // marginTop: 15,
          }}
          elevation={2}>
          <Heading type={6} text="Tests Reviewed" />
          <BodyText type={1} text="0" style={{marginTop: 15}} />
        </Paper>
      </Animatable.View>
      <Animatable.View
        animation="zoomIn"
        iterationCount={1}
        duration={2500}
        style={{
          // padding: 8,
          height: 350,
          width: '80%',
          // alignItems: 'center',
          marginTop: 25,
        }}
        // direction="alternate"
      >
        <Paper
          style={{
            padding: 8,
            height: 350,
            width: '100%',
            alignItems: 'center',
            // marginTop: 15,
          }}
          elevation={2}>
          <Heading type={6} text="Most Recent Upload" />
          <Chart />
        </Paper>
      </Animatable.View>
    </View>
  );
};

export default Stats;
