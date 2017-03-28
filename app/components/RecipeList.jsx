import React  from 'react' ;
import Recipe from './Recipe.jsx';

const RecipeList = (props)=>{
//    const recipes = props.recipes.map( (obj,index)=>{
//        return <Recipe key={obj.id} recipe={obj}/>
//    } );
    
    return (
        <div id='recipeContainer'>
          <Recipe/>
          <div className='recipe'>
              <h4>Spaghetti</h4>
          </div>
          <div className='recipe '>
              <h4>Onion Pie</h4>
          </div>          
        {/*  {recipes} */}
        </div>
    );
} 

export default RecipeList;

//const RecipeList = (props) => {
//    return (
//        <ul>
//            {props.recipes.map(function(elem, index){
//                return (<li key={index}>Recipe {elem.id}  {elem.name}</li>);
//            })}
//        </ul>
//    );
//}
