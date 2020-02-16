import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-wrapper #927b7c'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          WTW
        </Link>
        <ul className='right'>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>SignUp</a>
          </li>
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>LogOut</a>
          </li>
          <li>
            <i className='material-icons'>close</i>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
