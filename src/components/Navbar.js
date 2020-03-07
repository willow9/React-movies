import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = ({ auth }) => {
  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.init(elems, {
      edge: 'left',
      inDuration: 250
    });
  }, []);

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className='nav-wrapper #927b7c'>
      <div className='container'>
        <i href='#' data-target='mobile' className='sidenav-trigger hide-on-med-and-up'>
          <i className='material-icons'>menu</i>
        </i>
        <Link to='/' className='brand-logo'>
          WTW
        </Link>
        {/* Navbar links for large and medium screens only */}
        <div className='hide-on-small-only '>
          <ul className='right'>{links}</ul>
        </div>
        {/* End */}

        {/* Navbar links for small screeens only */}
        <div class='sidenav sidenav-close' id='mobile'>
          <ul>{links}
          
          </ul>
        </div>
        {/* End */}
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
