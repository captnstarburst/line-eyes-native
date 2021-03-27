import React from 'react';
import {Text, View, Image} from 'react-native';
import {Paper, Avatar, Button} from 'material-bread';
import {styles} from './styles';

const Skeleton = (props) => {
  return (
    <Paper style={styles.root} elevation={2}>
      <View style={styles.centerRow}>
        <Avatar
          type="icon"
          content="account-circle"
          contentColor={'#FFF'}
          size={36}
          color={'#BDBDBD'}
        />

        <View>
          <Text></Text>
          <Text></Text>
        </View>
      </View>
    </Paper>
  );
};

export default Skeleton;
