import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import DefaultDateString from '../../functions/DefaultDateString';
import CreateFormJSX from './CreateForm.jsx';

const CreateForm = (props) => {
  let minimumDateObj = new Date();
  minimumDateObj.setFullYear(minimumDateObj.getFullYear() - 13);
  const minimumDate = DefaultDateString(minimumDateObj);

  let defaultDateObj = new Date();
  defaultDateObj.setFullYear(defaultDateObj.getFullYear() - 18);
  const defaultDate = DefaultDateString(defaultDateObj);

  const [userInfo, setUserInfo] = useState({
    email: '',
    username: '',
    password: '',
    password_check: '',
    dateObject: defaultDateObj,
    dateOfBirth: defaultDate,
  });

  const handleChange = (item, value) => {
    e.persist();
    setUserInfo((prevState) => ({
      ...prevState,
      [item]: value,
    }));
    setCheckingValues(false);
  };

  return <CreateFormJSX userInfo={userInfo} handleChange={handleChange} />;
};

export default CreateForm;
