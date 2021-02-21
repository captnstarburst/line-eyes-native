import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import {
  List,
  ListItem,
  Avatar,
  Button,
  TextField,
  Icon,
  Checkbox,
} from 'material-bread';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import DatePicker from '../../UI/DatePicker';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{alignItems: 'center'}}>
      <List
        subheader={'Personal Info'}
        style={{width: '80%', marginTop: 15, paddingTop: 15, paddingLeft: 5}}>
        <ListItem
          text={'Profile Picture'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={20}
            />
          }
          actionItem={
            <Button text={'Upload'} type="contained" color={'#3F51B5'} />
          }
        />
        <ListItem
          text={'First Name'}
          actionItem={
            <View style={{width: 150}}>
              <OutlinedTextField
                label="First Name"
                keyboardType="email-address"
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={fieldRef}
              />
            </View>
          }
        />
        <ListItem
          text={'Last Name'}
          actionItem={
            <View style={{width: 150}}>
              <OutlinedTextField
                label="Last Name"
                keyboardType="email-address"
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={fieldRef}
              />
            </View>
          }
        />
        <ListItem
          text={'BirthDay'}
          actionItem={
            <View style={{width: 150}}>
              <DatePicker />
            </View>
          }
        />
      </List>
      <List
        subheader={'Notifications'}
        style={{width: '80%', paddingTop: 15, paddingLeft: 5}}>
        <ListItem
          text={'Push Notifications'}
          icon={<Icon name={'notifications'} size={24} />}
          actionItem={
            <View style={{width: 50}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          }
        />
        <ListItem
          text={'Email Notifications'}
          icon={<Icon name={'email'} size={24} />}
          actionItem={
            <View style={{width: 50}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          }
        />
      </List>
      <List
        subheader={'Account Settings'}
        style={{width: '80%', paddingTop: 15, paddingLeft: 5}}>
        <ListItem text={'Email Address'} />
        <ListItem
          actionItem={
            <View style={{width: 250}}>
              <OutlinedTextField
                label="captnstarburst@gmail.com"
                keyboardType="email-address"
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={fieldRef}
              />
            </View>
          }
        />
        <ListItem text={'User Name'} />
        <ListItem
          actionItem={
            <View style={{width: 250}}>
              <OutlinedTextField
                label="User Name"
                keyboardType="email-address"
                // formatText={this.formatText}
                // onSubmitEditing={this.onSubmit}
                // ref={fieldRef}
              />
            </View>
          }
        />
        <ListItem text={'Change Password'} />
        <ListItem
          actionItem={
            <View style={{width: 175}}>
              <Button
                text={'Reset Password'}
                textColor={'#E91E63'}
                borderSize={2}
              />
            </View>
          }
        />
        <View style={{alignItems: 'center', width: '100%', paddingBottom: 25}}>
          <Button
            text={'Delete Account           '}
            color={'#E91E63'}
            borderSize={2}
            type="contained"
            style={{alignItems: 'center', width: '100%'}}
          />
        </View>
      </List>
    </View>
  );
};

export default Settings;
