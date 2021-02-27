import React, {useState, useCallback} from 'react';
import {Appbar, Badge, Drawer, DrawerItem, DrawerSection} from 'material-bread';
import DropMenu from '../DropMenu';
import {withFirebase} from '../../Firebase';
import {withRouter} from 'react-router-native';
import {compose} from 'recompose';
const AppBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRouteToMyAccount = () => {
    handleClose();
    props.history.push('/Me/stats');
  };

  const handleRouteToPhoto = () => {
    handleClose();
    props.history.push('/upload-photo');
  };

  const handleRouteToLanding = () => {
    handleClose();
    props.history.push('/');
  };

  const handleRouteToAdmin = () => {
    handleClose();
    props.history.push('/admin');
  };

  const handleRouteToPrivacyPolicy = () => {
    handleClose();
    props.history.push('/privacy-policy');
  };

  const handleRouteToSettings = () => {
    handleClose();
    props.history.push('/Me/settings');
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
          <DropMenu
            key={1}
            iconName="notifications"
            color="#FFF"
            rng={1}
            menuItems={[
              {
                text: "That's all for now",
                action: () => {},
              },
            ]}
          />,
          <DropMenu
            key={2}
            iconName="account-circle"
            color="#FFF"
            rng={2}
            menuItems={[
              {text: 'My Account', action: handleRouteToMyAccount},
              {text: 'Log Out', action: props.firebase.doSignOut},
            ]}
          />,
          // <Badge
          //   containerStyle={{marginRight: 16, flex: 1}}
          //   color={'#e10050'}
          //   textColor={'white'}
          //   size={14}
          //   content={0}>
          //   <IconButton name="notification" size={24} color={'white'} />
          // </Badge>,
          // {name: 'notifications', onPress: () => console.log('onSearch')},
          // {name: ''},
          ,
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
              onPress={handleRouteToSettings}
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

const ComposedMenuAppBar = compose(withRouter, withFirebase)(AppBar);

export default ComposedMenuAppBar;
