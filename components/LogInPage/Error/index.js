import React from 'react';
import {Text, View} from 'react-native';

const Error = (props) => {
  return (
    <>
      <View>
        <Text>Looks Like We Are Having Some Issues</Text>
      </View>
      <View>
        <Text>Please Try Again Later</Text>
      </View>
    </>
  );
};

export default Error;
