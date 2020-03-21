import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TestingModal from './pages/TestingModal';
import UserProfile from './pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/user-list" component={UserList} />
        <Route exact path="/users/:id" component={UserProfile} />
        <Route exaxt path="/signup" component={SignUp} />
        <Route exaxt path="/signin" component={SignIn} />
        <Route exaxt path="/testing" component={TestingModal} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
