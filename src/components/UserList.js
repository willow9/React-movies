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
        <div className='user-list-col col s12 m2 l2 hide-on-small-only'>
         
          <ul className='collection users-collection'>
            {this.props.users &&
              this.props.users.map(el => {
                return (
                  <li className='collection-item avatar valign-wrapper' key={el.id}>
                    <i className='material-icons circle '>avatar</i>
                    <Link to={`/users/${el.id}`}>
                      <span className=' valign-wrapper user-name-in-list'>
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
