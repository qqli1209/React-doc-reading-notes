import React from 'react';

export default class CustomTextInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input type='text' ref={ (element) => this.textInput=element } />
        <input type='button' onClick={ this.focusTextInput } value='click to focus the input text' />
      </div>
    );
  }
}

export class AutoFocusTextInput extends React.PureComponent {
  componentDidMount() {
    this.textInput.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={ (input) => this.textInput=input } />
    );
  }
}

