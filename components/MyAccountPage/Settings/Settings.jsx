import React from 'react';
import {View, Image, Switch} from 'react-native';
import {List, ListItem, Avatar, Button, Icon} from 'material-bread';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import Picker from '../../UI/DatePicker';
import ReAuthModal from '../../UI/ReAuthModal';
import EmailValidator from '../../functions/EmailValidator';
import {styles} from './styles';

const Settings = (props) => {
  const userInfo = props.userInfo;

  return (
    <View style={styles.root}>
      <ReAuthModal
        open={props.mountReAuth}
        toggle={props.toggleReAuthMount}
        onSuccess={props.propagateAuthSuccess}
        display_name={userInfo.display_name}
      />
      <List subheader={'Personal Info'} style={styles.listStyleTop}>
        <ListItem
          text={'Profile Picture'}
          media={
            props.profile_pic ? (
              <Avatar
                type="image"
                image={
                  <Image
                    source={{
                      uri: props.profile_pic,
                    }}
                  />
                }
                size={48}
              />
            ) : (
              <Avatar
                type="text"
                content={props.avatar}
                contentColor={'white'}
                size={64}
                color={'#BDBDBD'}
              />
            )
          }
          actionItem={
            <Button
              text={'Upload'}
              type="contained"
              color={'#3F51B5'}
              onPress={props.propagateUploadClick}
            />
          }
        />
        <ListItem
          text={'First Name'}
          actionItem={
            <View style={styles.normalFieldWidth}>
              <OutlinedTextField
                label="First Name"
                keyboardType="default"
                value={userInfo.first_name}
                onChangeText={(text) =>
                  props.propagateUpdate('first_name', text)
                }
              />
            </View>
          }
        />
        <ListItem
          text={'Last Name'}
          actionItem={
            <View style={styles.normalFieldWidth}>
              <OutlinedTextField
                label="Last Name"
                keyboardType="default"
                value={userInfo.last_name}
                onChangeText={(text) =>
                  props.propagateUpdate('last_name', text)
                }
              />
            </View>
          }
        />
        <ListItem
          text={'Birthday'}
          actionItem={
            <View style={styles.normalFieldWidth}>
              <Picker
                date={userInfo.dateOfBirth}
                dateObject={userInfo.dateObject}
                propagateChange={props.propagateUpdate}
              />
            </View>
          }
        />
      </List>
      <List subheader={'Notifications'} style={styles.listStyle}>
        <ListItem
          text={'Push Notifications'}
          icon={<Icon name={'notifications'} size={24} />}
          actionItem={
            <View style={styles.switchWidth}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={userInfo.push_notifications ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() =>
                  props.propagateToggle('push_notifications')
                }
                value={userInfo.push_notifications}
              />
            </View>
          }
        />
        <ListItem
          text={'Email Notifications'}
          icon={<Icon name={'email'} size={24} />}
          actionItem={
            <View style={styles.switchWidth}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={
                  userInfo.email_notifications ? '#f5dd4b' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={() =>
                  props.propagateToggle('email_notifications')
                }
                value={userInfo.email_notifications}
              />
            </View>
          }
        />
      </List>
      <List subheader={'Account Settings'} style={styles.listStyle}>
        <ListItem text={'Email Address'} />
        <ListItem
          actionItem={
            <View style={styles.extendedFieldWidth}>
              <OutlinedTextField
                label={userInfo.currentEmail}
                value={userInfo.email}
                keyboardType="email-address"
                onChangeText={(text) => props.propagateUpdate('email', text)}
                error={
                  userInfo.email === '' || EmailValidator(userInfo.email)
                    ? ''
                    : 'Enter valid email address'
                }
              />
            </View>
          }
        />
        <ListItem text={'User Name'} />
        <ListItem
          actionItem={
            <View style={styles.extendedFieldWidth}>
              <OutlinedTextField
                label={userInfo.display_name}
                keyboardType="default"
                value={userInfo.display_name}
                onChangeText={(text) =>
                  props.propagateUpdate('display_name', text)
                }
                error={props.displayNameError}
              />
            </View>
          }
        />
        <ListItem text={'Change Password'} />
        <ListItem
          actionItem={
            <View style={styles.resetButtonWidth}>
              <Button
                text={'Reset Password'}
                textColor={'#E91E63'}
                borderSize={2}
                onPress={props.propagateReset}
              />
            </View>
          }
        />
        <View style={styles.fullWidth}>
          <Button
            text={'Delete Account           '}
            color={'#E91E63'}
            borderSize={2}
            type="contained"
            style={{alignItems: 'center', width: '100%'}}
            onPress={props.propagateDeleteClick}
          />
        </View>
      </List>
    </View>
  );
};

export default Settings;
