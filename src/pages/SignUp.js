import React, { Component } from 'react';

export class SignUp extends Component {
  render() {
    return (
      <div className='container'>
        <form>
          <div className='input-field '>
            <input
              placeholder='First Name'
              HTMLfor='first_name'
              id='first_name'
              type='text'
              className='validate'
            ></input>
          </div>
          <div className='row'>
            <div className='input-field '>
              <input placeholder='Last Name' id='last_name' type='text' className='validate'></input>
            </div>
          </div>

          <div className='row'>
            <div className='input-field '>
              <input placeholder='Email' id='email' type='email' className='validate'></input>
            </div>
          </div>
          <div className='row'>
            <div className='input-field '>
              <input placeholder='Password' id='password' type='password' className='validate'></input>
            </div>
          </div>
          <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
