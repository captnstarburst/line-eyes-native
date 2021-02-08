import React from 'react';
import {View} from 'react-native';
import {Paper, Heading, BodyText} from 'material-bread';
import Chart from './Chart';

const Stats = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Paper
        style={{
          padding: 8,
          height: 75,
          width: '50%',
          alignItems: 'center',
          marginTop: 15,
        }}
        elevation={2}>
        <Heading type={6} text="Tests Uploaded" />
        <BodyText type={1} text="0" style={{marginTop: 15}} />
      </Paper>
      <Paper
        style={{
          padding: 8,
          height: 75,
          width: '50%',
          alignItems: 'center',
          marginTop: 15,
        }}
        elevation={2}>
        <Heading type={6} text="Tests Reviewed" />
        <BodyText type={1} text="0" style={{marginTop: 15}} />
      </Paper>
      <Paper
        style={{
          padding: 8,
          height: 350,
          width: '80%',
          alignItems: 'center',
          marginTop: 15,
        }}
        elevation={2}>
        <Heading type={6} text="Most Recent Upload" />
        <Chart />
      </Paper>
    </View>
  );
};

export default Stats;
