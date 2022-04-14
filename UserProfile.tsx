import React, { FunctionComponent } from 'react';
import { useAppState } from './AppProvider';

const UserProfile: FunctionComponent<any> = () => {
  // console.log(user);
  const {
    user: { name, age },
  } = useAppState();

  return (
    <div>
      Name: {name} <aside>Age : {age}</aside>
    </div>
  );
};

export default UserProfile;
