import React, {useState, useCallback} from 'react';
import {View, Pressable} from 'react-native';
import {Paper, IconButton, Button} from 'material-bread';
import * as Animatable from 'react-native-animatable';
import TagDropMenu from '../DropMenu/TagDropDown';
import {styles} from './styles';

const TagDrawer = (props) => {
  const [tagDrawerOpen, setTagDrawerOpen] = useState(true);

  const toggleDrawer = useCallback(() => {
    setTagDrawerOpen((prevState) => !prevState);
  }, []);

  return (
    <View>
      <Paper style={styles.root} elevation={8}>
        <Pressable onPress={toggleDrawer}>
          <IconButton
            style={styles.centerSelf}
            name={tagDrawerOpen ? 'arrow-drop-up' : 'arrow-drop-down'}
            size={32}
            onPress={toggleDrawer}
          />
        </Pressable>
      </Paper>
      <Paper elevation={2}>
        <Animatable.View
          animation={tagDrawerOpen ? 'slideInDown' : 'slideOutUp'}
          iterationCount={1}
          duration={300}
          style={tagDrawerOpen ? styles.drawer : styles.hidden}>
          {tagDrawerOpen && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              {props.chipData.map((data, index) => {
                return (
                  <TagDropMenu
                    tagData={data}
                    key={data[0].id}
                    propagateChipSelection={props.propagateChipSelection}
                  />
                );
              })}
            </View>
          )}
        </Animatable.View>
      </Paper>
    </View>
  );
};

export default TagDrawer;
