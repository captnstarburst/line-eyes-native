import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const LogInPage = () => {
  return (
    <LinearGradient
      colors={['#22c1c3', '#00701a']}
      style={styles.linearGradient}>
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default LogInPage;
