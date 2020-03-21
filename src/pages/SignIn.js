import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../redux';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const { signInUser } = this.props;
    e.preventDefault();
    // console.log(this.props);
    signInUser(this.state);
  };

  render() {
    const { auth, errMsg } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field ">
              <input
                onChange={this.handleChange}
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field ">
              <input
                onChange={this.handleChange}
                placeholder="Password"
                id="password"
                type="password"
                className="validate"
              />
            </div>
          </div>
          <button className="btn pink lighten-1 z-depth-0">Sign In</button>
          <div className="red-text center">
            {errMsg ? <p>{errMsg}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signInUser: credentials => dispatch(signIn(credentials))
  };
};
const mapStateToProps = state => {
  return {
    errMsg: state.userReducer.authError,
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
