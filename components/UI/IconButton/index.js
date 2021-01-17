import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import CustomIcon from '../Icon';
TouchableOpacity.defaultProps = {activeOpacity: 0.8};
const SignUpButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        elevation: 8,
        backgroundColor: props.backgroundColor,
        borderRadius: 0,
        paddingVertical: 16,
        paddingHorizontal: 12,
        width: '80%',
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: props.color,
          fontWeight: 'bold',
          alignSelf: 'center',
          textTransform: 'uppercase',
        }}>
        {props.title}
        <CustomIcon
          name={props.icon}
          borderRadius={100}
          pLeft={20}
          size={20}
          color={props.color}
          bColor={props.backgroundColor}
        />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 16,
    color: '#4267B2',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default SignUpButton;
