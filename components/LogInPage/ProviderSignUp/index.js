import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
// import {withTheme} from 'rea/ct-native-paper';
import SignUpButton from '../../UI/IconButton';

const ProviderSignUp = (props) => {
  // const {colors} = theme;

  return (
    <>
      <SignUpButton
        title="Sign Up With Facebook"
        backgroundColor="#E0E0E0"
        color="#4267B2"
        icon="facebook"
      />
      <SignUpButton
        title="Sign Up With Google"
        backgroundColor="#E0E0E0"
        color="#0F9D58"
        icon="google"
      />
      <SignUpButton
        title="Sign Up With Twitter"
        backgroundColor="#E0E0E0"
        color="#1da1f2"
        icon="twitter"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
          width: '80%',
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text
            style={{
              width: 40,
              textAlign: 'center',
              fontFamily: 'RedRose-Regular',
            }}>
            OR
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>
      <Pressable onPress={props.propagateCreate}>
        <Text
          style={{
            color: props.primary,
          }}>
          CREATE ACCOUNT
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    width: '80%',
    margin: 10,
    backgroundColor: 'blue',
    borderStyle: 'solid',
  },
});

export default ProviderSignUp;
