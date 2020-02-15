import React, { Component } from 'react'

class Users extends Component {
    render() {
        return (
            <div className='row'>
        <div className='names col s12 m4 l3'>
          <h5>Users</h5>
          <ul className='collection z-depth-5'>
            <li className='collection-item avatar valign-wrapper  '>
              <i class='material-icons circle '>avatar</i>
              <span className='title valign-wrapper'>FirstName LastName</span>
            </li>
            <li className='collection-item avatar valign-wrapper'>
              <i class='material-icons circle'>avatar</i>
              <span className='title valign-wrapper'>FirstName LastName</span>
            </li>
            <li className='collection-item avatar valign-wrapper'>
              <i class='material-icons circle'>avatar</i>
              <span className='title valign-wrapper'>FirstName LastName</span>
            </li>
            <li className='collection-item avatar valign-wrapper'>
              <i class='material-icons circle'>avatar</i>
              <span className='title valign-wrapper'>FirstName LastName</span>
            </li>
          </ul>
        </div>
        <div className='col s12 m8 l9'> Display all movies</div>
      </div>
        )
    }
}
export default Users