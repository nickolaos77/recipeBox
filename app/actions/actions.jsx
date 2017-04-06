//C.R.U.D. action generators
//---------------------------------------

export const addRecAG = (recipeName, ingredients) =>{
    return {
        type: 'ADD_RECIPE',
        recipeName,
        ingredients
    }
}

export const addRecipesAG = (recipes)=>{
  console.log("Action generator", recipes)
  return {
    type:'ADD_RECIPES',
    recipes
  }
}


export const delRecAG = (recipeIndex) =>{
    return {
        type: 'DEL_RECIPE',
        recipeIndex
    }
}

export const editRecAG = (recipeName, ingredients, recipeIndex) =>{
    return {
        type:'EDIT_RECIPE',
        recipeName,
        ingredients, 
        recipeIndex
    }
}


//Panel action generators
//---------------------------------------

export const expandPanelAG = recipeIndex => {
    return {
        type : 'EXPAND_PANEL',
        recipeIndex
    }
}

export const contractPanelAG = recipeIndex => {
    return {
        type : 'CONTRACT_PANEL',
        recipeIndex
    }
}

//Modal action generators
//---------------------------------------

export const showModalAG = () => {
    return {
        type : 'SHOW_MODAL',
    }
}

export const hideModalAG = () => {
    return {
        type :'HIDE_MODAL',
    }
}
