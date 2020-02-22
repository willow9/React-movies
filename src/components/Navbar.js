import React from 'react';
import { Link } from 'react-router-dom';
 import {connect} from "react-redux"

const Navbar = () => {
  return (
    <nav className='nav-wrapper #927b7c'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          WTW
        </Link>
        <ul className='right'>
          <li>
          <Link to="/signin">Sign In</Link>
          </li>
          <li>
          <Link to="/signup">Sign Up</Link>
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
const mapStateToProps= (state) =>{
  console.log(state)
  return{
    
  }
}
export default connect(mapStateToProps)(Navbar);
