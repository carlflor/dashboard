import React, { Component } from 'react';
import { withAppContext } from '../../context.js';
import { Redirect } from 'react-router-dom';
import './LoginPage.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    document.body.className = "login-body";
  }

  componentWillUnmount() {
    document.body.className = null;
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)
    this.props.login();
  }

  render() {
    const onChange = {onChange: this.handleChange};

    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { isAuthenticated } = this.props;

    if (isAuthenticated) return <Redirect to={from} />;

    return (
      <div className="login-page">
        <h1 className="title">Log in to Dashboard</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label className="field">
            Username
            <input type="text" name="username" value={this.state.username} required {...onChange}/>
          </label>
          <label className="field">
            Password
            <input type="password" name="password" minLength="8" value={this.state.password} required {...onChange}/>
          </label>
          <input type="submit" name="submit" className="submit" value="Log in"/>
          <div className="reset">
            Forgot Password?
          </div>
        </form>
      </div>
    );
  }
}

export default withAppContext(LoginPage);
