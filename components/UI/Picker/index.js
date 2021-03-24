import React, {Component} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

export default class DateMode extends Component {
  state = {date: new Date()};

  render = () => (
    <View style={{borderRadius: 25}}>
      <Modal isVisible={true} onBackdropPress={() => console.log('backdrop')}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            borderRadius: 25,
          }}>
          <DatePicker
            date={this.state.date}
            onDateChange={(date) => this.setState({date})}
            mode={'date'}
          />
        </View>
      </Modal>
    </View>
  );
}
