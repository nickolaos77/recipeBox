

//C.R.U.D. Recuder
//----------------

var nextRecipeIndex = 1;

export const crudRecReducer = (state = [], action)=>{
    
    switch (action.type){
        
        case 'ADD_RECIPE':
            {//create a block of scope
            let newState = state.concat([{recipeName : action.recipeName,
                                                 ingredients: action.ingredients,
                                                 recipeIndex: nextRecipeIndex++ }]);
            return newState;
            }
        
        case 'ADD_RECIPES':{
          return [...action.recipes];
          
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

//Panel Recuder 
//--------------

export const panelReducer = (state=[], action) => {
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

//Modal Recuder 
//-------------//

export const modalOpenReducer = (state='false',action)=>{
switch (action.type){
        case 'SHOW_MODAL':
            return 'true';
            
        case 'HIDE_MODAL':
            return 'false'; 
        
         default:
            return state;
}
}
