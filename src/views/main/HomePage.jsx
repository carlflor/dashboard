import React, { Component } from 'react';
import { withAppContext } from '../../context.js';
import './HomePage.scss';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div className="App">
        Hello Home
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

export default withAppContext(HomePage);
