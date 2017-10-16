import React from 'react';

export default class NameForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name: <input type='number' value={ this.state.value } onChange={ this.handleChange } />
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export class TextForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('The content was submitted ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Name: <textarea type='number' value={ this.state.value } onChange={ this.handleChange } />
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export class FlavorForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      value: 'coconut',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Your favorite flavor is: ' + this.state.value);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Pick your favorite La Croix flavor:
          <select value={ this.state.value } onChange={ this.handleChange }>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}
