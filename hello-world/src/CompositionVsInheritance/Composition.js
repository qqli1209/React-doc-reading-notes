import './Composition.css';

import React from 'react';

class FancyBorder extends React.PureComponent {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        { this.props.children }
      </div>
    );
  }
}

class Dialog extends React.PureComponent {
  render() {
    return (
      <FancyBorder color='blue'>
        <h1 className='Dialog-title'>{ this.props.title }</h1>
        <p className='Dialog-message'>{ this.props.message }</p>
        { this.props.children }
      </FancyBorder>
    );
  }
}

/*
class WelcomeDialog extends React.PureComponent {
  render() {
    return (
      <Dialog title='Welcome' message='Thank you for visiting our spacecraft!'></Dialog>
    );
  }
}
*/

export default class SignUpDialog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={ value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSignUp() {
    console.log(this.state.value);
  }

  render() {
    return (
      <Dialog
        title='Mars Exploration Program'
        message = 'How should we refer to you?'
      >
      <input value={ this.state.value } onChange={ this.handleChange } />
      <button onClick={ this.handleSignUp }>Sign Me Up!</button>
      </Dialog>
    );
  }
}

