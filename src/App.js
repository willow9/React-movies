import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from './pages/User';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import TestingModal from './pages/TestingModal';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' component={Dashboard}></Route>
          <Route exact path='/users/:id' component={UserProfile} />
          <Route exaxt path='/signup' component={SignUp} />
          <Route exaxt path='/signin' component={SignIn} />
          <Route exaxt path='/testing' component={TestingModal} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


