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
        <div className='names col s12 m4 l3'>
          <h3>Users</h3>
          <ul className='collection z-depth-5'>
            {this.props.users &&
              this.props.users.map(el => {
                return (
                  <li className='collection-item avatar valign-wrapper' key={el.id}>
                    <i className='material-icons circle '>avatar</i>
                    <Link to={`/users/${el.id}`}>
                      <span className='title valign-wrapper'>
                        {el.firstName} {el.lastName} {el.id}
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
