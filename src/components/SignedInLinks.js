import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, fetchMovies } from '../redux';

const SignedInLinks = ({ user, logOut, reloadMovies }) => {
  const userSignOut = () => {
    logOut();
    reloadMovies();
  };

  return (
    <>
      <li>
        <NavLink to="/" onClick={userSignOut}>
          Sign Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/">{user.initials}</NavLink>
      </li>
    </>
  );
};
const mapStateToProps = state => {
  return {
    user: state.firebase.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(signOut()),
    reloadMovies: () => dispatch(fetchMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
