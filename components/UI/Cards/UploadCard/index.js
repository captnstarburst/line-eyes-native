import React, {useState} from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import {
  Card,
  CardMedia,
  BottomNavigation,
  BottomNavigationItem,
  Badge,
} from 'material-bread';
import * as Animatable from 'react-native-animatable';
import * as ImagePicker from 'react-native-image-picker';
import Placeholder from '../../../../assets/placeholder.png';

const UploadCard = (props) => {
  const [imageSource, setImageSource] = useState(null);
  const handleUploadClick = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log(response.uri);

      if (response.didCancel) {
        // console.log('User cancelled photo picker');
        // Alert.alert('You did not select any image');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
        setOnError(true);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        // uploadFileSelection(response.uri);
        // let source = {uri: response.uri};
        // console.log({source});
      }
    });
  };

  return (
    <TouchableWithoutFeedback
      style={{flex: 1, width: '100%'}}
      onPress={handleUploadClick}>
      <Animatable.View
        animation="zoomIn"
        iterationCount={1}
        duration={500}
        style={{
          height: 75,
          width: '100%',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Card style={{width: '75%'}}>
          <CardMedia
            image={
              <Image
                style={{width: '80%', height: 500}}
                source={props.url ? props.url : Placeholder}
                resizeMode="contain"
              />
            }
          />

          <BottomNavigation
            style={{width: '100%'}}
            showLabels
            backgroundColor={'#000'}
            actionItems={[
              <>
                <BottomNavigationItem
                  icon={'do-not-disturb-on'}
                  label={'Negative'}
                />

                <Badge style={{marginLeft: -45}} size={20} content={0} />
              </>,
              <>
                <BottomNavigationItem
                  key={2}
                  icon={'warning'}
                  label={'Invalid'}
                />

                <Badge style={{marginLeft: -45}} size={20} content={0} />
              </>,
              <>
                <BottomNavigationItem
                  key={2}
                  icon={'pause'}
                  label={'Positive'}
                />

                <Badge style={{marginLeft: -45}} size={20} content={0} />
              </>,
            ]}
          />
        </Card>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

export default UploadCard;
