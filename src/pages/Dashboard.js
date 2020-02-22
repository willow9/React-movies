import React, { Component } from 'react';
import Users from '../components/UserList';
import UserMovies from '../components/UserMovies'

class Dashboard extends Component {
  render() {
    return <div className='row'>
     <Users />
     <UserMovies/>
    </div>
  }
}
export default Dashboard;
