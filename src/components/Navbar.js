import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ auth }) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, {
      edge: 'left',
      inDuration: 250
    });
  }, []);

  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <i
          href="#"
          data-target="mobile"
          className="sidenav-trigger hide-on-med-and-up"
        >
          <i className="material-icons">menu</i>
        </i>
        <Link to="/" className="brand-logo">
          WTW
        </Link>
        {/* Navbar links for large and medium screens only */}
        <div className="hide-on-small-only ">
          <ul className="right">{links}</ul>
        </div>
        {/* End */}

        {/* Navbar links for small screeens only */}
        <div className="sidenav sidenav-close" id="mobile">
          <ul>{links}</ul>
          <ul>
            <li>
              <NavLink to="/user-list">Users</NavLink>
            </li>
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
