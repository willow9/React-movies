import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../redux';

const Navbar = props => {
  const signOut = () => {
    props.signOut();
  };
  return (
    <nav className='nav-wrapper #927b7c'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          WTW
        </Link>
        <ul className='right'>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/' onClick={signOut}>
              Sign Out
            </Link>
          </li>
          <li>
            <i className='material-icons'>close</i>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);

  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
