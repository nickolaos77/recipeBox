const redux = require('redux');

console.log('Starting redux example');


//C.R.U.D. Recuder and action generators
//---------------------------------------
var nextRecipeIndex = 1;

const crudRecReducer = (state = [], action)=>{
    
    switch (action.type){
            
        case 'ADD_RECIPE':
            {//create a block of scope
            let newState = state.concat([{recipeName : action.recipeName,
                                                 ingredients: action.ingredients,
                                                 recipeIndex: nextRecipeIndex++ }]);
            return newState;
            }
            
        case 'EDIT_RECIPE':
            {//create a block of scope
            let newState =state.filter(function(recipe){
                return recipe.recipeIndex !== action.recipeIndex ;
            });
            newState = newState.concat([{recipeName : action.recipeName,
                                                 ingredients: action.ingredients,
                                                 recipeIndex: action.recipeIndex }]);
            return newState; 
            }               
        case 'DEL_RECIPE':
            {//create a block of scope
            let newState =state.filter(function(recipe){
                return recipe.recipeIndex !== action.recipeIndex ;
            })
            return newState;
            }
            
        default:
            return state;
    };   
};

const addRecAG = (recipeName, ingredients) =>{
    return {
        type: 'ADD_RECIPE',
        recipeName,
        ingredients
    }
}

const delRecAG = (recipeIndex) =>{
    return {
        type: 'DEL_RECIPE',
        recipeIndex
    }
}

const editRecAG = (recipeName, ingredients, recipeIndex) =>{
    return {
        type:'EDIT_RECIPE',
        recipeName,
        ingredients, 
        recipeIndex
    }
}


//Panel Recuder and action generators
//---------------------------------------
const panelReducer = (state=[], action) => {
  switch (action.type){
      case 'EXPAND_PANEL':
          {//create a block of scope
          let newState = state.concat({expanded:true, recipeIndex:action.recipeIndex});
          return newState;
          }
      case 'CONTRACT_PANEL':
          {//create a block of scope
          let newState =state.filter(function(recipe){return recipe.recipeIndex !== action.recipeIndex})
            return newState;
          }
      default:
          return state;   
}
};
const expandPanelAG = recipeIndex => {
    return {
        type : 'EXPAND_PANEL',
        recipeIndex
    }
}

const contractPanelAG = recipeIndex => {
    return {
        type : 'CONTRACT_PANEL',
        recipeIndex
    }
}

//Modal Recuder and action generators
//---------------------------------------


const modalOpenReducer = (state='false',action)=>{
switch (action.type){
        case 'SHOW_MODAL':
            return 'true';
            
        case 'HIDE_MODAL':
            return 'false'; 
        
         default:
            return state;
}
}

const showModalAG = () => {
    return {
        type : 'SHOW_MODAL',
    }
}

const hideModalAG = () => {
    return {
        type :'HIDE_MODAL',
    }
}


//Combine the reducers
//---------------------------------------


const reducer = redux.combineReducers({
    modalOpen :  modalOpenReducer,
    recipes   :  crudRecReducer,
    panelOpen :  panelReducer
})
 

//redux.compose allow us to add middleware functions. Here I add a function to use the redux dev tools
const store = redux.createStore(reducer, redux.compose( 
    window.devToolsExtension ? window.devToolsExtension(): f=>f
));

//subscribe to changes

const unsubscribe = store.subscribe(
    ()=>{
        let state = store.getState();
        console.log(state);
    }
);

// Create Actions

//Dispatch the actions

store.dispatch(expandPanelAG(1));
store.dispatch(contractPanelAG(1));
store.dispatch(expandPanelAG(2));
store.dispatch(addRecAG('makaronia', ['makaronia', 'saltsa ntomata']));
store.dispatch(delRecAG(1));
store.dispatch(addRecAG('makaronia', ['makaronia', 'saltsa ntomata']));
store.dispatch(editRecAG('makaronia', ['makaronia', 'saltsa ntomata', 'kaseri'],2));
store.dispatch(showModalAG());
store.dispatch(hideModalAG());
