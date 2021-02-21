import React from 'react';
import {View, Pressable} from 'react-native';
import {Paper, IconButton, Button} from 'material-bread';

const TagDrawer = () => {
  return (
    <View>
      <Paper
        style={{
          //   padding: 8,
          height: 75,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F2F2F2',
          borderColor: '#000',
          borderBottomWidth: 0.25,
          borderTopWidth: 0.5,
          //   borderLeftWidth: 1,
          //   borderRightWidth: 1,
        }}
        elevation={8}>
        <Pressable onPress={() => console.log('onSearch')}>
          <IconButton
            style={{alignSelf: 'center'}}
            name="arrow-drop-down"
            size={32}
          />
        </Pressable>
      </Paper>
      <Paper
        style={{
          //   padding: 8,
          height: 100,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          //   backgroundColor: '#F2F2F2',
          borderColor: '#000',
          borderBottomWidth: 0.25,
          borderTopWidth: 0.5,
          //   borderLeftWidth: 1,
          //   borderRightWidth: 1,
        }}
        elevation={2}>
        <Button text={'Test Type'} type="contained" />
      </Paper>
    </View>
  );
};

export default TagDrawer;
