import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from './pages/User';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/users/:id' component={UserProfile} />
          <Route exaxt path='/signup' component={SignUp} />
          <Route exaxt path='/signin' component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


