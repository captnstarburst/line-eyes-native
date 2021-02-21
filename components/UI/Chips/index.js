import React from 'react';
import {View} from 'react-native';

import {Chip, Paper} from 'material-bread';

const Chips = () => {
  return (
    <View style={{marginTop: 70, alignItems: 'center'}}>
      <Paper
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          backgroundColor: 'white',
          width: '75%',
          height: 50,
          // height: 10,
          // width: 10,
          // borderRadius: 100,
        }}
        elevation={0}
        radius={6}>
        <Chip style={{marginTop: 7}} text={'Chip'} />
        {/* <Chip style={{alignSelf: 'center'}} text={'Chip'} />
        <Chip
          style={{justifySelf: 'center'}}
          text={'Delete me'}
          visible={true}
          onDelete={() => {}}
        /> */}
      </Paper>
    </View>
  );
};

export default Chips;
