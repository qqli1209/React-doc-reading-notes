import React from 'react';

function CustomTextInput(props) {
  return (
    <div>
      <input ref={ props.inputRef } />
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      My input: <CustomTextInput inputRef={ props.inputRef } />
    </div>
  );
}

export default class GrandParent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.inputElement.focus();
  }

  render() {
    return (
      <div>
        <Parent inputRef={ (input) => this.inputElement=input } />
        <button onClick={ this.handleClick }>focus on input element</button>
      </div>
    );
  }
}
