import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { withAppContext } from '../context.js';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import flow from 'lodash/flow';

import LoginPage from './sessions/LoginPage.jsx';
import HomePage from './main/HomePage.jsx';

import './App.scss';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/" component={HomePage} isAuthenticated={isAuthenticated} />
      </Switch>
    );
  }
}

export default flow(
  withAppContext,
  withRouter,
)(App);
