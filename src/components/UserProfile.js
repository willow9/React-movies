import React, { Component } from 'react';
import { connect } from 'react-redux';
import noPicture from '../images/noPicture.jpg';
import { findUser } from '../redux';

class UserProfile extends Component {
  componentWillMount() {
    this.props.findUser(this.props.userId);
  }
  render() {
    return (
      <div className='col s12 m4 l4 user-profile-wrapper'>
        <div className='valign-wrapper user-profile'>
          <img className='z-depth-5' src={this.props.user.photoUrl ? this.props.user.photoUrl : noPicture} alt='user' />
          {!this.props.findUserError ? (
            <h4 className='center-align'>
              {this.props.user.firstName} {this.props.user.lastName}
            </h4>
          ) : (
            <h3 className='center-align red-text text-lighten-2'>{this.props.findUserError}</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    findUserError: state.userReducer.findUserError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findUser: userId => dispatch(findUser(userId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
