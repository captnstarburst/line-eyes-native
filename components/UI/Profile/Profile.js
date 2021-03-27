import React from 'react';
import {Text, View, Image} from 'react-native';
import {Paper, Avatar, Button} from 'material-bread';
import {styles} from './styles';

const Profile = (props) => {
  return (
    <Paper style={styles.root} elevation={2}>
      <View style={styles.centerRow}>
        {props.userData.profile_pic ? (
          <Avatar
            type="image"
            image={
              <Image
                source={{
                  uri: props.userData.profile_pic,
                }}
              />
            }
            size={24}
          />
        ) : (
          <Avatar
            type="icon"
            content="account-circle"
            contentColor={'#FFF'}
            size={36}
            color={'#BDBDBD'}
          />
        )}

        <View>
          <Text>
            {' '}
            {props.userData.first_name &&
              props.userData.last_name &&
              props.userData.first_name + ' ' + props.userData.last_name}
          </Text>
          <Text>{props.userData.display_name}</Text>
        </View>
      </View>
      {props.edit && (
        <Button text={'Edit Profile'} textColor={'#9EA7DA'} type="outlined" />
      )}
    </Paper>
  );
};

export default Profile;
