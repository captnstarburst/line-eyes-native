import React from 'react';
import {ScrollView, View} from 'react-native';
import AppBar from '../UI/AppBar';
import TagDrawer from '../UI/TagDrawer';
import PaperChips from '../UI/Chips/PaperChips';
import UploadCard from '../UI/Cards/UploadCard';
import {styles} from './styles';

const PhotoPageJSX = (props) => {
  return (
    <ScrollView>
      <AppBar />
      <TagDrawer
        chipData={props.chipData}
        propagateChipSelection={props.handleChipSelection}
      />
      <View style={styles.root}>
        <PaperChips
          chipData={props.chipData}
          propagateChipDeletion={props.handleChipDeletion}
        />
        <UploadCard
          imgSource={props.imageSource}
          selectImage={props.selectImage}
        />
      </View>
    </ScrollView>
  );
};

export default PhotoPageJSX;
