import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomIcon = (props) => {
  return (
    <Icon
      name={!props.name ? 'alien' : props.name}
      size={!props.size ? 12 : props.size}
      style={{
        backgroundColor: `${!props.bColor ? 'white' : props.bColor}`,
        color: `${!props.color ? 'black' : props.color}`,
        marginLeft: !props.pLeft ? 0 : props.pLeft,
        paddingLeft: !props.pLeft ? 0 : props.pLeft,
        borderRadius: !props.rad ? 0 : props.rad,
        padding: !props.pad ? 0 : props.pad,
      }}
    />
  );
};

export default CustomIcon;
