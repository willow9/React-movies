import React, { Component } from 'react';
import Users from '../components/Users';

class Dashboard extends Component {
  render() {
    return <div className='row'>
     <Users />
    </div>
  }
}
export default Dashboard;