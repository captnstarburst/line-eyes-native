import React, {useState} from 'react';
import {View, Pressable, Platform} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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
      <Pressable onPress={showDatepicker}>
        <OutlinedTextField
          label="Date Of Birth"
          value={'06/09/1991'}
          disabled
          // onPress={showDatepicker}

          // keyboardType="email-address"
          // formatText={this.formatText}
          // onSubmitEditing={this.onSubmit}
          // ref={fieldRef}
        />
      </Pressable>
      {/* <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
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
