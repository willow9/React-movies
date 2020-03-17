import React, { Component } from 'react';
import UserList from '../components/UserList';
import UserMovies from '../components/UserMovies';
import SearchBar from '../components/SearchBar';

class Dashboard extends Component {
  render() {
    return (
      <div className='row'>
        <UserList visibility='dashboard' />
        <SearchBar />
        <UserMovies containerSize='dashboard' />
      </div>
    );
  }
}
export default Dashboard;
