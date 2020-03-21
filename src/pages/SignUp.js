import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../redux';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      image: null,
      rawImage: null
    };
  }

  invokeImgInput = () => {
    this.imgInput.click();
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    const { signUpUser } = this.props;
    e.preventDefault();
    signUpUser(this.state);
  };

  onSelectImage = e => {
    const files = e.target.files[0];
    const reader = new FileReader();
    reader.onload = ev => {
      this.setState({ image: ev.target.result });
    };
    reader.readAsDataURL(files);
    this.setState({ rawImage: files });
  };

  render() {
    const { auth, errMsg } = this.props;
    const { image } = this.state;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="input-field ">
                <input
                  onChange={this.handleChange}
                  placeholder="First Name"
                  id="firstName"
                  type="text"
                  required
                />
              </div>
              <div className="input-field ">
                <input
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  id="lastName"
                  type="text"
                  required
                />
              </div>

              <div className="input-field ">
                <input
                  onChange={this.handleChange}
                  placeholder="Email"
                  id="email"
                  type="email"
                  required
                />
              </div>

              <div className="input-field ">
                <input
                  onChange={this.handleChange}
                  placeholder="Password"
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="col s12 m6 l6">
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
              <div
                className="base-image-input"
                style={{ backgroundImage: `url(${image})` }}
                onClick={this.invokeImgInput}
              >
                {!image ? (
                  <span className="placeholder">Choose an Image</span>
                ) : null}
                <input
                  className="file-input"
                  id="imgInput"
                  ref={imgInput => {
                    this.imgInput = imgInput;
                  }}
                  type="file"
                  onChange={this.onSelectImage}
                />
              </div>
            </div>
          </div>
          <div className="row center-align">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              {errMsg ? <p> {errMsg}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    errMsg: state.userReducer.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUpUser: newUser => dispatch(signUp(newUser))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
