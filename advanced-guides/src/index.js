import './index.css';

import CustomTextInput, { AutoFocusTextInput } from './RefsAndTheDOM/CustomTextInput'

import App from './App/App';
import AppWithErrorBoundary from './ErrorBoundaries/AppWithErrorBoundary'
import AppWithPortal from './Portals/AppWithPortal'
import GrandParent from './RefsAndTheDOM/ExposingDOMRef';
import React from 'react';
import ReactDOM from 'react-dom';
import WordAdder from './OptimizingPerformance/WordAdder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<CustomTextInput />, document.getElementById('CustomTextInput'));

ReactDOM.render(<AutoFocusTextInput />, document.getElementById('AutoFocusTextInput'));

ReactDOM.render(<GrandParent />, document.getElementById('GrandParent'));

ReactDOM.render(<WordAdder />, document.getElementById('WordAdder'));

ReactDOM.render(<AppWithPortal />, document.getElementById('app-root'));

ReactDOM.render(<AppWithErrorBoundary />, document.getElementById('AppWithErrorBoundary'));


registerServiceWorker();
