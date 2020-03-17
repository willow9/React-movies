import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

class Users extends Component {
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    // console.log(this.props);

    return (
      <>
        <ul>
          {this.props.users &&
            this.props.users.map(el => {
              return (
                <li key={el.id}>
                  <Link to={`/users/${el.id}`}>
                    <span>
                      {el.firstName} {el.lastName}
                    </span>
                  </Link>
                </li>
              );
            })}
        </ul>
        
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
