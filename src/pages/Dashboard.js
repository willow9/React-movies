import React, { Component } from 'react';
import Users from '../components/UserList';
import UserMovies from '../components/UserMovies'
import SearchBar from '../components/SearchBar';

class Dashboard extends Component {
  render() {
    return <div className='row'>
     <Users />
     <SearchBar/>
     <UserMovies/>
    </div>
  }
}
export default Dashboard;
