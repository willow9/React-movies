import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../redux';

const SignedInLinks = props => {
  const signOut = () => {
    props.signOut();
  };

  return (
    <>
      <li>
        <NavLink to='/' onClick={signOut}>
          Sign Out
        </NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating orange lighten-2'>
          {props.user.initials}
        </NavLink>{' '}
      </li>
    </>
  );
};
const mapStateToProps = state => {
  // console.log(state);

  return {
    user: state.firebase.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
