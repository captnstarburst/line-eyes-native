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

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      {isOpen && <DrawerContent />}
    </>
  );
};

const DrawerContent = () => {
  return (
    <Drawer>
      <DrawerSection bottomDivider>
        <DrawerItem text={'My Account'} icon={'account-circle'} />
        <DrawerItem text={'Add Photo'} icon={'photo-camera'} />
        <DrawerItem text={'Line Eyes'} icon={'queue'} />
        <DrawerItem text={'Admin'} icon={'rate-review'} />
      </DrawerSection>
      <DrawerSection>
        <DrawerItem text={'Settings'} icon={'settings'} />
        <DrawerItem text={'Privacy Policy'} icon={'book'} />
      </DrawerSection>
    </Drawer>
  );
};

export default AppBar;
