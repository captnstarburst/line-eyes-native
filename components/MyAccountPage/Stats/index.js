import React from 'react';
import {View} from 'react-native';
import {Paper, Heading, BodyText} from 'material-bread';
import Chart from './Chart';

const Stats = () => {
  return (
    <View style={{height: 1000}}>
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={2}>
        <Heading type={6} text="Tests Uploaded" />
        <BodyText type={1} text="0" />
      </Paper>
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={2}>
        <Heading type={6} text="Tests Reviewed" />
        <BodyText type={1} text="0" />
      </Paper>
      <Paper
        style={{
          padding: 8,
          height: 600,
          width: '100%',
          alignItems: 'center',
        }}
        elevation={2}>
        <Heading type={6} text="Most Recent Upload" />
        <Chart />
      </Paper>
    </View>
  );
};

export default Stats;
