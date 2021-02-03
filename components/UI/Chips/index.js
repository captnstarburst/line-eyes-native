import React from 'react';
import {View, Image} from 'react-native';

import {Chip, Icon, Avatar} from 'material-bread';

const Chips = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        // alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        height: 50,
        width: '75%',
      }}>
      <Chip style={{alignSelf: 'center'}} text={'Chip'} />
      <Chip
        style={{justifySelf: 'center'}}
        text={'Delete me'}
        visible={true}
        onDelete={() => {}}
      />
    </View>
  );
};

export default Chips;
