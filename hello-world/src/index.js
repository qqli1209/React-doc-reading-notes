import './index.css';

import HandlingEvent, { Toggle } from './HandlingEvent/HandlingEvent';

import App from './App/App';
import Clock from './Clock/Clock';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Clock />, document.getElementById('clock'));

ReactDOM.render(<HandlingEvent />, document.getElementById('HandlingEvent'));

ReactDOM.render(<Toggle />, document.getElementById('Toggle'));

registerServiceWorker();
