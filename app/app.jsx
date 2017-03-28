import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import ReactRedux from 'react-redux';
const redux = require('redux');
const actions = require('./actions/actions.jsx');
const store   = require('./store/configureStore.jsx').configure();

import Recipes_And_Dialog_Cont from 'Recipes_And_Dialog_Cont.jsx';
 

ReactDOM.render(
  <Recipes_And_Dialog_Cont/>,
  document.getElementById('app')
);

//subscribe to changes

const unsubscribe = store.subscribe( ()=>{
        let state = store.getState();
        console.log(state);
    }
);

// Create Actions

//Dispatch the actions

store.dispatch(actions.expandPanelAG(1));
store.dispatch(actions.contractPanelAG(1));
store.dispatch(actions.expandPanelAG(2));
store.dispatch(actions.addRecAG('makaronia', ['makaronia', 'saltsa ntomata']));
store.dispatch(actions.delRecAG(1));
store.dispatch(actions.addRecAG('makaronia', ['makaronia', 'saltsa ntomata']));
store.dispatch(actions.editRecAG('makaronia', ['makaronia', 'saltsa ntomata', 'kaseri'],2));
store.dispatch(actions.showModalAG());
store.dispatch(actions.hideModalAG());
