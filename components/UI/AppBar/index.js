import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {
  Appbar,
  Badge,
  Drawer,
  DrawerItem,
  DrawerHeader,
  DrawerSection,
  IconButton,
} from 'material-bread';
import {withRouter} from 'react-router-native';

const AppBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRouteToMyAccount = () => {
    handleClose();
    props.history.push('/Me');
  };

  const handleRouteToPhoto = () => {
    handleClose();
    props.history.push('/upload-photo');
  };

  const handleRouteToLanding = () => {
    handleClose();
    props.history.push('/upload-photo');
  };

  const handleRouteToAdmin = () => {
    handleClose();
    props.history.push('/admin');
  };

  const handleRouteToPrivacyPolicy = () => {
    handleClose();
    props.history.push('/privacy-policy');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleDrawer = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <Appbar
        barType={'normal'}
        title={'Line-Eyes'}
        navigation={'menu'}
        onNavigation={toggleDrawer}
        actionItems={[
          // <Badge
          //   containerStyle={{marginRight: 16, flex: 1}}
          //   color={'#e10050'}
          //   textColor={'white'}
          //   size={14}
          //   content={0}>
          //   <IconButton name="notification" size={24} color={'white'} />
          // </Badge>,
          {name: 'notifications', onPress: () => console.log('onSearch')},
          {name: 'account-circle'},
        ]}
      />
      {isOpen && (
        <Drawer>
          <DrawerSection bottomDivider>
            <DrawerItem
              text={'My Account'}
              icon={'account-circle'}
              onPress={handleRouteToMyAccount}
            />
            <DrawerItem
              text={'Add Photo'}
              icon={'photo-camera'}
              onPress={handleRouteToPhoto}
            />
            <DrawerItem
              text={'Line Eyes'}
              icon={'queue'}
              onPress={handleRouteToLanding}
            />
            <DrawerItem
              text={'Admin'}
              icon={'rate-review'}
              onPress={handleRouteToAdmin}
            />
          </DrawerSection>
          <DrawerSection>
            <DrawerItem
              text={'Settings'}
              icon={'settings'}
              onPress={handleRouteToMyAccount}
            />
            <DrawerItem
              text={'Privacy Policy'}
              icon={'book'}
              onPress={handleRouteToPrivacyPolicy}
            />
          </DrawerSection>
        </Drawer>
      )}
    </>
  );
};

export default withRouter(AppBar);
