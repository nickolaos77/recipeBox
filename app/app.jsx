import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import ReactRedux from 'react-redux';


ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);

require('./redux_example');
