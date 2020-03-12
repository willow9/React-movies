import React from 'react';
import noPicture from '../images/noPicture.jpg';

const UserProfile = ({ user }) => {
  return (
    <div className='col s12 m4 l4 userProfileWrapper'>
      <div className='valign-wrapper userProfile'>
        <img className='z-depth-5' src={noPicture} alt='user' />
        <h4 className='center-align'>
          {user.firstName} {user.lastName}
        </h4>
      </div>
    </div>
  );
};
export default UserProfile;
