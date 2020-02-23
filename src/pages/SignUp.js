import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux';
import { Redirect } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.props);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, errMsg } = this.props;
    if (auth.uid) return <Redirect to='/' />;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='input-field '>
            <input
              onChange={this.handleChange}
              placeholder='First Name'
              id='firstName'
              type='text'
              className='validate'
            ></input>
          </div>
          <div className='row'>
            <div className='input-field '>
              <input
                onChange={this.handleChange}
                placeholder='Last Name'
                id='lastName'
                type='text'
                className='validate'
              ></input>
            </div>
          </div>

          <div className='row'>
            <div className='input-field '>
              <input
                onChange={this.handleChange}
                placeholder='Email'
                id='email'
                type='email'
                className='validate'
              ></input>
            </div>
          </div>
          <div className='row'>
            <div className='input-field '>
              <input
                onChange={this.handleChange}
                placeholder='Password'
                id='password'
                type='password'
                className='validate'
              ></input>
            </div>
          </div>
          <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
          <div className='red-text center'>{errMsg ? <p> {errMsg}</p> : null}</div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    errMsg: state.movieReducer.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
