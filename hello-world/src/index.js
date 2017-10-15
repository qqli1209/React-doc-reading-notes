import './index.css';

import App from './App';
import Clock from './Clock';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Clock />, document.getElementById('clock'));

registerServiceWorker();
