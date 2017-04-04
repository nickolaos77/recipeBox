import React      from 'react' ;
import Ingredient from './Ingredient.jsx';

const IngredientList = (props)=>{ 
  let ingredients = props.recipes.map( (recipe, index)=>{
    console.log('The recipe name is: ', recipe.recipeName);
    return (<Recipe key={index} name = {recipe.recipeName} ingredients={recipe.ingredients}/>)
  } ) 
  
    return (
        <div id='recipeContainer'>
          {ingredients}         
        </div>
    );
} 