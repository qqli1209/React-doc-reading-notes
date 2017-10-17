import React from 'react';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class BoilingVerdict extends React.PureComponent {
  render() {
    return (
      this.props.celsius >= 100
        ? <p>The water will boil.</p>
        : <p>The water will not boil.</p>
    );
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in { scaleNames[scale] }:</legend>
        <input value={ temperature } onChange={ this.handleChange } />
      </fieldset>
    );
  }
}

export default class Calculator extends React.PureComponent {
  constructor(props)  {
    super(props);
    this.state={
      temperature: '',
      scale: 'c'
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature,
      scale: 'c'
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature,
      scale: 'f'
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale==='c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = scale==='f' ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        <TemperatureInput
          temperature={ celsius }
          onTemperatureChange={ this.handleCelsiusChange }
          scale='c'
        />
        <TemperatureInput
          temperature={ fahrenheit }
          onTemperatureChange={ this.handleFahrenheitChange }
          scale='f'
        />        
        <BoilingVerdict celsius={ celsius } />
      </div>
    );
  }
}
