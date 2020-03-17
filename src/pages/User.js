import React from 'react';
import UserProfile from '../components/UserProfile';
import UserMovies from '../components/UserMovies';

const User = props => {
  let id = props.match.params.id;

  return (
    <div>
      <div className='row'>
        <UserProfile userId={id}></UserProfile>
        <UserMovies isUserMovies={true} userId={id} />
      </div>
    </div>
  );
};

export default User;
