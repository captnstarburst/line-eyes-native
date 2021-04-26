import React from 'react';
import {View} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import {IconButton, Button} from 'material-bread';

class DropMenu extends React.PureComponent {
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = (action) => {
    this._menu.hide();
    action();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={{marginRight: 25}}>
        <Menu
          ref={this.setMenuRef}
          button={
            this.props.button ? (
              <Button
                text={'Test Type'}
                type="contained"
                onPress={this.showMenu}
              />
            ) : (
              <IconButton
                name={this.props.iconName}
                color={this.props.color}
                size={24}
                onPress={this.showMenu}
              />
            )
          }>
          {this.props.menuItems.map((item, i) => (
            <MenuItem
              key={i}
              onPress={() => {
                this.hideMenu(item.action);
              }}>
              {item.text}
            </MenuItem>
          ))}
        </Menu>
      </View>
    );
  }
}

export default DropMenu;
