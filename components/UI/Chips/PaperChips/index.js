import React from 'react';
import {View} from 'react-native';
import {Chip, Paper} from 'material-bread';
import {styles} from './styles';

const Chips = (props) => {
  return (
    <View style={styles.root}>
      <Paper style={styles.paper} elevation={0} radius={6}>
        {props.chipData.map((topicArrays, topicIndex) => {
          return (
            <View key={topicIndex}>
              {topicArrays.map((item) => {
                if (item.viewing) {
                  return (
                    <Chip
                      key={item.key}
                      style={styles.chipMargin}
                      text={item.label.split('_').join(' ')}
                      // className={classes.chip}
                      onDelete={() => props.propagateChipDeletion(item.label)}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </View>
          );
        })}
      </Paper>
    </View>
  );
};

export default Chips;
