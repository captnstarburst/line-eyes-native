import React from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {Button, Icon} from 'material-bread';
import Picker from '../../UI/DatePicker';
import {styles} from './styles';
const CreateFormJSX = (props) => {
  return (
    <>
      <View style={styles.root}>
        <OutlinedTextField
          label="Email"
          keyboardType="email-address"
          onChangeText={(text) => props.handleChange('email', text)}
          value={props.userInfo.email}
          error={props.checkingValues ? props.formError.email : ''}
        />
        <OutlinedTextField
          label="User Name"
          onChangeText={(text) => props.handleChange('username', text)}
          keyboardType="default"
          value={props.userInfo.username}
          error={props.checkingValues ? props.formError.username : ''}
        />
        <OutlinedTextField
          label="Password"
          onChangeText={(text) => props.handleChange('password', text)}
          keyboardType="default"
          secureTextEntry
          value={props.userInfo.password}
          error={props.checkingValues ? props.formError.password : ''}
        />
        <OutlinedTextField
          label="Re-Enter Password"
          onChangeText={(text) => props.handleChange('password_check', text)}
          keyboardType="default"
          secureTextEntry
          value={props.userInfo.password_check}
          error={props.checkingValues ? props.formError.password : ''}
        />
        <Picker
          date={props.userInfo.dateOfBirth}
          dateObject={props.userInfo.dateObject}
          propagateChange={props.handleChange}
          error={props.checkingValues ? props.formError.dateOfBirth : null}
        />
      </View>
      <View style={styles.centerItems}>
        <Button
          text={'Create Account'}
          style={{backgroundColor: '#3F51B5'}}
          icon={<Icon name="account-circle" />}
          type="contained"
          loading={props.asyncWork}
          iconPosition={'right'}
          onPress={props.handleCreateClick}
          fullWidth
        />
      </View>
    </>
  );
};

export default CreateFormJSX;
