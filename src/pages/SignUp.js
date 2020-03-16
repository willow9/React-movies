import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp, addImage } from '../redux';
import { Redirect } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    image: null,
    rawImage: null
  };
  invokeImgInput = () => {
    this.imgInput.click();
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.signUp(this.state);
    this.props.addImage(this.state);
  };

  onSelectImage = e => {
    let files = e.target.files[0];
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({ image: e.target.result });
    };
    reader.readAsDataURL(files);
    this.setState({ rawImage: files });
  };
  render() {
    const { auth, errMsg } = this.props;
    if (auth.uid) return <Redirect to='/' />;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col s12 m6 l6'>
              <div className='input-field '>
                <input
                  onChange={this.handleChange}
                  placeholder='First Name'
                  id='firstName'
                  type='text'
                  required
                ></input>
              </div>
              <div className='input-field '>
                <input onChange={this.handleChange} placeholder='Last Name' id='lastName' type='text' required></input>
              </div>

              <div className='input-field '>
                <input onChange={this.handleChange} placeholder='Email' id='email' type='email' required></input>
              </div>

              <div className='input-field '>
                <input
                  onChange={this.handleChange}
                  placeholder='Password'
                  id='password'
                  type='password'
                  required
                ></input>
              </div>
            </div>
            <div className='col s12 m6 l6'>
              <div
                className='base-image-input'
                style={{ backgroundImage: `url(${this.state.image})` }}
                onClick={this.invokeImgInput}
              >
                {!this.state.image ? <span className='placeholder'>Choose an Image</span> : null}
                <input
                  className='file-input'
                  id='imgInput'
                  ref={imgInput => {
                    this.imgInput = imgInput;
                  }}
                  type='file'
                  onChange={this.onSelectImage}
                />
              </div>
            </div>
          </div>
          <div className='row center-align'>
            <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
            <div className='red-text center'>{errMsg ? <p> {errMsg}</p> : null}</div>
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
    signUp: newUser => dispatch(signUp(newUser)),
    addImage: rowImage => dispatch(addImage(rowImage))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
