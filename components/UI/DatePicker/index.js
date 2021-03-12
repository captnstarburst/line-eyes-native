import React, {useState} from 'react';
import {View, Pressable, Platform} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import DefaultDateString from '../../functions/DefaultDateString';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = (props) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    setShow(false);
    props.propagateChange('dateObject', currentDate);
    props.propagateChange('dateOfBirth', DefaultDateString(currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <OutlinedTextField
        label="Date Of Birth"
        value={props.date}
        disabled={show}
        onFocus={showDatepicker}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.dateObject}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
