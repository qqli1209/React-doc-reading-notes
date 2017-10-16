import React from 'react';

export default class NumberList extends React.PureComponent {
  render() {
    const numList = this.props.numbers;
    const listItems = numList.map((number) => <li key={ number.toString() }>{ number }</li>);
    return (
      <ul>{ listItems }</ul>
    );
  }
}


