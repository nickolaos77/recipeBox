import React      from 'react' ;
import RecipeList from './RecipeList';

class RecipeApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            recipes : [
                {
                id: 1,
                name : "Makaronia me kima"
                       },
                       {
                id   : 2,
                name : "Spanakoryzo"
                       }]
        };
    }
    
render (){
    return(
      <div className = 'container'>
        <RecipeList/>  
        <button>Add Recipe</button>    
      </div>  
    );
} 
    
};

export default RecipeApp;

    
   