import React from 'react';
import picture from '../images/animals.jpg';

const UserProfile = ({ user }) => {
  return (
    <div className='col s12 m4 l4 green'>
      <div className='valign-wrapper'>
        <div className='card large'>
          <div className='card-image circle'>
            <img src={picture} alt='profile' />
          </div>
          <div className='card-content'>
            <h3>
              {user.firstName} {user.lastName}
            </h3>
            <p>
              I am a very simple card. I am good at containing small bits of information. I am convenient because I
              require little markup to use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
