import React from 'react';
import UserProfile from '../components/UserProfile';
import UserMovies from '../components/UserMovies';

const User = props => {
  // Without destructuring looks cleaner : const id = this.match.params.id
  const {
    match: {
      params: { id }
    }
  } = props;

  return (
    <div>
      <div className="row">
        <UserProfile userId={id} />
        <UserMovies isUserMovies userId={id} />
      </div>
    </div>
  );
};

export default User;
