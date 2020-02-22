import React, { Component } from 'react';
import {connect} from "react-redux"
import {signIn} from "../redux"

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e =>{
      e.preventDefault()
      console.log("halfway");
      
      this.props.signIn(this.state)

  }
  render() {
    return (
      <div className='container'>
        <form onSubmit = {this.handleSubmit}>
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
          <button className='btn pink lighten-1 z-depth-0'>Sign In</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
export default connect(null, mapDispatchToProps)(SignIn);
