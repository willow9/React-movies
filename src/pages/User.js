import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../components/UserProfile';
import UserMovies from '../components/UserMovies';

const User = props => {
  let id = props.match.params.id;
  let user = props.users.find(el => {
    return el.id.toString() === id;
  });

  return (
    <div>
      <div className='row'>
        <UserProfile user={user}></UserProfile>
        <UserMovies />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(User);
