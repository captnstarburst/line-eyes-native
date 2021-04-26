import React from 'react';
import {View} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import {IconButton, Button} from 'material-bread';

class TagDropDown extends React.PureComponent {
  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = (id) => {
    this._menu.hide();
    this.props.propagateChipSelection(id);
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View style={{flexGrow: 1}}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Button
              text={this.props.tagData[0].header.split('_').join(' ')}
              type="contained"
              onPress={this.showMenu}
            />
          }>
          {this.props.tagData.map((data, i) => {
            if (data.header) return null;
            return (
              <MenuItem
                key={i}
                onPress={() => {
                  this.hideMenu(data.label);
                }}>
                {data.label.split('_').join(' ')}
              </MenuItem>
            );
          })}
        </Menu>
      </View>
    );
  }
}

export default TagDropDown;
