import React, {useEffect, useState} from 'react';
import {Paper, Tabs, Tab} from 'material-bread';
import {withRouter, useLocation} from 'react-router-native';

const CenteredTabs = (props) => {
  const [value, setValue] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {
      case '/Me/stats':
        setValue(0);
        break;
      case '/Me/uploads':
        setValue(1);
        break;
      case '/Me/activity':
        setValue(2);
        break;
      case '/Me/settings':
        setValue(3);
        break;
      default:
        break;
    }
  }, [location]);

  const handleChange = (newValue) => {
    switch (newValue) {
      case 0:
        props.history.push('/Me/stats');
        break;
      case 1:
        props.history.push('/Me/uploads');
        break;
      case 2:
        props.history.push('/Me/activity');
        break;
      case 3:
        props.history.push('/Me/settings');
        break;
      default:
        break;
    }
  };

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
        selectedIndex={value}
        handleChange={(index) => handleChange(index)}
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

export default withRouter(CenteredTabs);
