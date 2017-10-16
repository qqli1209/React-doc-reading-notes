import React from 'react';

class UserGreeting extends React.PureComponent {
  render() {
    return (
      <h1>Welcome back!</h1>
    );
  }
}

class GuestGreeting extends React.PureComponent {
  render() {
    return (
      <h1>Please sign up.</h1>
    );
  }
}

class Greeting extends React.PureComponent {
  render() {
    return this.props.isLoggedIn ? <UserGreeting />:<GuestGreeting />;
  }
}

class LoginButton extends React.PureComponent {
  render() {
    return (
      <button onClick={ this.props.onClick }>
        Login
      </button>
    );
  }
}

class LogoutButton extends React.PureComponent {

  render() {
    return (
      <button onClick={ this.props.onClick }>
        Logout
      </button>
    );
  }
}

export default class LoginControl extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      isLoggedIn: false,
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  }

  render() {
    const isLoggedIn=this.state.isLoggedIn;
    const button = isLoggedIn
      ? <LogoutButton onClick={ this.handleClick } />
      : <LoginButton onClick={ this.handleClick } />;

    return (
      <div>
        <Greeting isLoggedIn={ isLoggedIn }/>
        { button }
      </div>
    );
  }
}

