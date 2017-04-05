import React  from 'react' ;
import Recipe from './Recipe.jsx';
import { connect } from 'react-redux';
import Dialog2     from './Dialog2.jsx';


const RecipeList = (props)=>{ 
  let recipes = props.recipes.map( (recipe, index)=>{
    console.log('The recipe name is: ', recipe.recipeName);
    return (<Recipe key={recipe.recipeIndex} name = {recipe.recipeName} ingredients={recipe.ingredients}
              recipeIndex = {recipe.recipeIndex} />)
  } ) 
  
    return (
      <div>
        <div id='recipeContainer'>
          {recipes}         
        </div>
        <Dialog2 ingredients = {[]} name = ""  callerButton="Add"/>          
        <button onClick={ ()=>{
                var dialog2 = document.getElementById('window2');
                dialogPolyfill.registerDialog(dialog2);
                dialog2.showModal();
          } }>Add Recipe</button> 
      </div>  
    );
} 

module.exports = connect(
  (state)=>{
    return{
      recipes:state.recipes //now recipes can be accesible inside the RecipeList component as props.recipes 
    };
  }
)(RecipeList);
