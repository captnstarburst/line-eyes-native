import React from 'react';
import {Text, View, Image} from 'react-native';
import {Paper, Tabs, Tab} from 'material-bread';

const CenteredTabs = () => {
  return (
    <Paper
      style={{
        // padding: 8,
        height: 50,
        width: '100%',
        marginTop: 25,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
      }}
      elevation={2}>
      <Tabs
        style={{height: 40, width: '100%'}}
        backgroundColor={'#FFF'}
        selectedIndex={0}
        handleChange={(index) => console.log(index)}
        actionItems={[
          <Tab key={1} label="Stats" style={{backgroundColor: '#3F51B5'}} />,
          <Tab key={2} label="Uploads" style={{backgroundColor: '#3F51B5'}} />,
          <Tab
            key={3}
            label="Activity Feed"
            style={{backgroundColor: '#3F51B5'}}
          />,
          <Tab key={4} label="Settings" style={{backgroundColor: '#3F51B5'}} />,
        ]}
        // actionItems={[
        //   {label: 'Stats'},
        //   {label: 'Uploads'},
        //   {label: 'Activity Feed'},
        //   {label: 'Settings'},
        // ]}
      />
    </Paper>
  );
};

export default CenteredTabs;
