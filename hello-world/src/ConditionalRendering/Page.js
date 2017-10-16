import './Page.css';

import React from 'react';

class WarningBanner extends React.PureComponent {
  render() {
    return (
      this.props.warn
        ? <div className="warning">Warning!</div>
        : null
    );
  }
}

export default class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      showWarning: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={ this.state.showWarning }
        />
        <button onClick={ this.handleToggleClick }>
          { this.state.showWarning ? 'Hide' : 'show' }
        </button>
      </div>
    );
  }
}

