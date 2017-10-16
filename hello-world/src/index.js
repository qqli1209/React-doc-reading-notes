import './index.css';

import HandlingEvent, { Toggle } from './HandlingEvent/HandlingEvent';
import NameForm, { FlavorForm, TextForm } from './Forms/Forms.js'

import App from './App/App';
import Clock from './Clock/Clock';
import LoginControl from './ConditionalRendering/LoginControl';
import NumberList from './ListsAndKeys/ListsAndKeys';
import Page from './ConditionalRendering/Page';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Clock />, document.getElementById('clock'));

ReactDOM.render(<HandlingEvent />, document.getElementById('HandlingEvent'));

ReactDOM.render(<Toggle />, document.getElementById('Toggle'));

ReactDOM.render(<LoginControl />,document.getElementById("LoginControl"));

ReactDOM.render(<Page />,document.getElementById("Page"));

ReactDOM.render(<NumberList numbers={ numbers }/>, document.getElementById("NumberList"));

ReactDOM.render(<NameForm value='18' />, document.getElementById("NameForm"));

ReactDOM.render(<TextForm value='some content' />, document.getElementById("TextForm"));

ReactDOM.render(<FlavorForm />, document.getElementById("FlavorForm"));

registerServiceWorker();
