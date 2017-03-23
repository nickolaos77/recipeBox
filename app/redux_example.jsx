const redux = require('redux');

console.log('Starting redux example');

const actions = require('./actions/actions');
const store   = require('./store/configureStore').configure();


//Combine the reducers
//---------------------------------------




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
