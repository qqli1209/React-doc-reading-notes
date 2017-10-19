import React from 'react';

class ListsOfWords extends React.PureComponent {
  render() {
    return (
      <div>{ this.props.words.join(',') }</div>
    );
  }
}

export default class WordAdder extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      words: ['mark']
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      words: [...prevState.words, 'mark']
    }));
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Add Word</button>
        <ListsOfWords words={ this.state.words }/>
      </div>
    );
  }
}

