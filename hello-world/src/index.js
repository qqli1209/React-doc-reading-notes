import './index.css';

import HandlingEvent, { Toggle } from './HandlingEvent/HandlingEvent';
import NameForm, { FlavorForm, TextForm } from './Forms/Forms.js'

import App from './App/App';
import Calculator from './LiftingStateUp/Calculator'
import Clock from './Clock/Clock';
import FilterableProductTable from './ThinkingInReact/FilterableProductTable.js';
import LoginControl from './ConditionalRendering/LoginControl';
import NumberList from './ListsAndKeys/ListsAndKeys';
import Page from './ConditionalRendering/Page';
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpDialog from './CompositionVsInheritance/Composition';
import registerServiceWorker from './registerServiceWorker';

const numbers = [1, 2, 3, 4, 5];

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

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

ReactDOM.render(<Calculator />, document.getElementById("Calculator"));

ReactDOM.render(<SignUpDialog />, document.getElementById("SignUpDialog"));

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />,
  document.getElementById('FilterableProductTable')
);

registerServiceWorker();
