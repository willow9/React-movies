import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

class Users extends Component {
  componentWillMount() {
    const { fetch } = this.props;
    fetch();
  }

  setVisibility = () => {
    const { visibility } = this.props;
    return visibility === 'dashboard'
      ? 'user-list-col col m2 l2 hide-on-small-only '
      : 'user-list-col';
  };

  render() {
    const { users } = this.props;
    return (
      <>
        <div className={this.setVisibility()}>
          <ul className="collection users-collection">
            {users &&
              users.map(el => {
                return (
                  <li
                    className="collection-item avatar valign-wrapper"
                    key={el.id}
                  >
                    {el.photoUrl ? (
                      <img src={el.photoUrl} alt="" className="circle" />
                    ) : (
                      <i className="material-icons circle ">avatar</i>
                    )}

                    <Link to={`/users/${el.id}`}>
                      <span className=" valign-wrapper user-name-in-list">
                        {el.firstName} {el.lastName}
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchUsers())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
