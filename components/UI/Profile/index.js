import React from 'react';
import Skeleton from './Skeleton';
import Profile from './Profile';

const ProfileIndex = ({edit, userData}) => {
  if (!userData) return <Skeleton />;

  return <Profile edit={edit} userData={userData} />;
};

export default ProfileIndex;
