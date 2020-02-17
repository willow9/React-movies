import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserProfile from "./pages/User";
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/users/:id' component={UserProfile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
