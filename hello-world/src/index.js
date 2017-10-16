import './index.css';

import HandlingEvent, { Toggle } from './HandlingEvent/HandlingEvent';

import App from './App/App';
import Clock from './Clock/Clock';
import LoginControl from './ConditionalRendering/LoginControl';
import Page from './ConditionalRendering/Page';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Clock />, document.getElementById('clock'));

ReactDOM.render(<HandlingEvent />, document.getElementById('HandlingEvent'));

ReactDOM.render(<Toggle />, document.getElementById('Toggle'));

ReactDOM.render(<LoginControl />,document.getElementById("LoginControl"));

ReactDOM.render(<Page />,document.getElementById("Page"));
registerServiceWorker();
