import React from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {Button, Icon} from 'material-bread';
import DatePicker from '../../UI/DatePicker';
import {styles} from './styles';
const CreateFormJSX = (props) => {
  return (
    <>
      <View style={styles.root}>
        <OutlinedTextField label="Email" keyboardType="email-address" />
        <OutlinedTextField label="User Name" />
        <OutlinedTextField label="Password" />
        <OutlinedTextField label="Re-Enter Password" />

        <DatePicker
          date={props.userInfo.dateOfBirth}
          dateObject={props.userInfo.dateObject}
          propagateChange={props.handleChange}
        />
      </View>
      <View style={styles.centerItems}>
        <Button
          text={'Log In'}
          style={{backgroundColor: '#3F51B5'}}
          icon={<Icon name="account-circle" />}
          type="contained"
          // loading={asyncWork}
          iconPosition={'right'}
          // onPress={handleSignIn}
          fullWidth
        />
      </View>
    </>
  );
};

export default CreateFormJSX;
