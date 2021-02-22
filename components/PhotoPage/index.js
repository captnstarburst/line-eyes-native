import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import AppBar from '../UI/AppBar';
import TagDrawer from '../UI/TagDrawer';
import PaperChips from '../UI/Chips/PaperChips';
import UploadCard from '../UI/Cards/UploadCard';
import * as ImagePicker from 'react-native-image-picker';

const PhotoPage = () => {
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        // Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log({source});
      }
    });
  }

  return (
    <ScrollView>
      <AppBar />
      <TagDrawer />
      <View style={{backgroundColor: '#CFE8FC', width: '100%', height: 500}}>
        <PaperChips />
        <UploadCard imgSource={imageSource} selectImage={selectImage} />
      </View>
    </ScrollView>
  );
};

export default PhotoPage;
