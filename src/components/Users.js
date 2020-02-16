import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux';

class Users extends Component {
  render() {
    return (
      <>
        <div className='names col s12 m4 l3'>
          <ul className='collection z-depth-5'>
            {this.props.users &&
              this.props.users.map(el => {
                return (
                  <li className='collection-item avatar valign-wrapper' key={el.id}>
                    <i className='material-icons circle '>avatar</i>
                    <span className='title valign-wrapper'>
                      {el.firstName} {el.lastName}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className='col s12 m8 l9'> Display all movies</div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch(addUser())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
