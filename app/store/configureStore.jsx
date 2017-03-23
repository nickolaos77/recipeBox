var redux = require('redux');
import {crudRecReducer, panelReducer, modalOpenReducer} from './../reducers/reducers'; 

export const configure =()=>{
const reducer = redux.combineReducers({
    modalOpen :  modalOpenReducer,
    recipes   :  crudRecReducer,
    panelOpen :  panelReducer
});
 

//redux.compose allow us to add middleware functions. Here I add a function to use the redux dev tools
const store = redux.createStore(reducer, redux.compose( 
    window.devToolsExtension ? window.devToolsExtension(): f=>f
));
    return store;
}