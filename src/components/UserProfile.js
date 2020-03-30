import React, { Component } from 'react';
import { connect } from 'react-redux';
import noPicture from '../images/noPicture.jpg';
import { findUser } from '../redux';

class UserProfile extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }

  render() {
    const { user, findUserError } = this.props;
    return (
      <div className="col s12 m4 l4 user-profile-wrapper">
        <div className="valign-wrapper user-profile">
          <img
            className="z-depth-5"
            src={user.photoUrl ? user.photoUrl : noPicture}
            alt="user"
          />
          {!findUserError ? (
            <h4 className="center-align">
              {user.firstName} {user.lastName}
            </h4>
          ) : (
            <h3 className="center-align red-text text-lighten-2">
              {findUserError}
            </h3>
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
    fetchUser: userId => dispatch(findUser(userId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
