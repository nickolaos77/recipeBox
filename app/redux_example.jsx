var redux = require('redux');

console.log('Starting redux example');

var recipes ={ 
    recWinOpen: 'false',
    recipes: [{
    recipeName:'recipeName',
    ingredients: [],
    recipeIndex: 0    
    }]
};
var reducer = (state = recipes, action)=>{
    console.log(state);
    switch (action.type){
        case 'SHOW_ADD_REC_WIN':
            return {
            ...state,
                recWinOpen: 'true'
            };
        case 'HIDE_ADD_REC_WIN':
            return {
            ...state,
                recWinOpen: 'false'
            };            
        case 'ADD_REC':
            {//seperate scope
            let newRecipesArray = state.recipes.concat([{recipeName:action.recipeName, ingredients:action.ingredients}]);
            return {
            ...state,
                recipes: newRecipesArray
            };
            }
        case 'DEL_REC':
            {//seperate scope
            let newRecipesArray = [...state.recipes.slice(0,action.index),
                                   ...state.recipes.slice(action.index + 1)]
            return {
            ...state,
                recipes: newRecipesArray
            };
            }
            
        default:
            return state;
    };   
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState',currentState);

var showAddRecWin = {
    type:'SHOW_ADD_REC_WIN'
};

var hideAddRecWin = {
    type:'HIDE_ADD_REC_WIN'
};


var addRec = {
    type:'ADD_REC',
    recipeName:'Lasagna',
    ingredients:['makaronia', 'cheese']
};

var showRec = {
    type: 'Show_Rec'
};

var hideRec = {
    type: 'Hide_Rec'
};

var delRec = {
    type:'DEL_REC',
    index:0
};

var editRec = {
    type:'EDIT_REC'
};

store.dispatch(showAddRecWin);

console.log('Recipe window should open', store.getState());

store.dispatch(hideAddRecWin);

console.log('Recipe window should hide', store.getState());

store.dispatch(addRec);

console.log('Recipe should be added', store.getState());

store.dispatch(delRec);

console.log('Recipe should be deleted', store.getState());