import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({auth}) => {
const links = auth.uid ?  <SignedInLinks />: <SignedOutLinks />
  return (
    <nav className='nav-wrapper #927b7c'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          WTW
        </Link>
        <ul className='right'>
         {links}
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
