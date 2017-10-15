import './HandlingEvent.css';

import React from 'react';

export default class HandlingEvent extends React.Component {
  handleClick(event) {
    event.preventDefault();
    console.log('clicked');
  }

  render() {
    return (
      <a href='http://baidu.com' onClick={ this.handleClick }>Click me</a>
    );
  }
}

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const className = `toggleButton ${this.state.isToggleOn ? 'toggleButtonOn' : 'toggleButtonOff'}`;
    return (
      <button
        className={ className }
        onClick={ this.handleClick }>
        { this.state.isToggleOn ? 'On' : 'Off' }
      </button>
    );
  }
}
