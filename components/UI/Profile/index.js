import React from 'react';
import {Text, View, Image} from 'react-native';
import {Paper, Avatar, Button} from 'material-bread';

const Profile = () => {
  return (
    <Paper
      style={{
        padding: 8,
        height: 50,
        width: '100%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      elevation={2}>
      {/* <Avatar
        type="image"
        image={
          <Image
            source={{
              uri:
                'https://avatars1.githubusercontent.com/u/12564956?s=460&v=4',
            }}
          />
        }
        size={24}
      /> */}
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Avatar
          type="icon"
          content="account-circle"
          contentColor={'#FFF'}
          size={36}
          color={'#BDBDBD'}
        />
        <View>
          <Text>Conor Hinchee</Text>
          <Text>Admin Conor</Text>
        </View>
      </View>
      <Button text={'Edit Profile'} textColor={'#9EA7DA'} type="outlined" />
    </Paper>
  );
};

export default Profile;
