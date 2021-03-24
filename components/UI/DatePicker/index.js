import React, {useState} from 'react';
import {View} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import Modal from 'react-native-modal';
import {FormattedDateString} from '../../functions/DefaultDateString';
import DatePicker from 'react-native-date-picker';

const Picker = (props) => {
  const [showModal, setShowModal] = useState(false);

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    props.propagateChange('dateObject', currentDate);
    props.propagateChange('dateOfBirth', FormattedDateString(currentDate));
  };

  const toggleModal = () => setShowModal((previousState) => !previousState);

  return (
    <View>
      <OutlinedTextField
        label="Date Of Birth"
        value={props.date}
        disabled={showModal}
        onFocus={toggleModal}
        error={props.error}
      />
      <Modal
        isVisible={showModal}
        onBackdropPress={toggleModal}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        backdropTransitionOutTiming={600}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            borderRadius: 25,
          }}>
          <DatePicker
            date={props.dateObject}
            onDateChange={(date) => onChange(date)}
            mode={'date'}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Picker;
