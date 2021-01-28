import React from 'react';
import {
  ScrollView,
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {Link} from 'react-router-native';

const Footer = (props) => {
  return (
    <>
      <View style={{height: 50, justifyContent: 'flex-end'}}>
        <Text
          style={{
            color: props.white ? 'white' : 'black',
            alignSelf: 'center',
            fontSize: 18,
          }}>
          {' '}
          Line-Eyes ©
        </Text>
      </View>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
        }}>
        <Link
          to={'/privacy-policy'}
          // style={styles.subNavItem}
          // underlayColor="#f0f4f7"
        >
          <Text
            style={{
              flex: 2,
              color: props.white ? 'white' : 'blue',
              textAlign: 'left',
              padding: 10,
            }}>
            Privacy Policy
          </Text>
        </Link>

        <Link
          to={'/terms-and-conditions'}
          // style={styles.subNavItem}
          // underlayColor="#f0f4f7"
        >
          <Text
            style={{
              flex: 2,
              color: props.white ? 'white' : 'blue',
              textAlign: 'center',
              padding: 10,
            }}>
            Terms & Conditions
          </Text>
        </Link>
      </View>
    </>
  );
};

export default Footer;
