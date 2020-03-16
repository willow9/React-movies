import React from 'react';
import noPicture from '../images/noPicture.jpg';

const UserProfile = ({ user }) => {
  return (
    <div className='col s12 m4 l4 user-profile-wrapper'>
      <div className='valign-wrapper user-profile'>
        {/* <div className='card-image'> */}
          <img className='z-depth-5' src={user.photoUrl ? user.photoUrl : noPicture} alt='user' />
        {/* </div> */}
        <h4 className='center-align'>
          {user.firstName} {user.lastName}
        </h4>
      </div>
    </div>
  );
};
export default UserProfile;
