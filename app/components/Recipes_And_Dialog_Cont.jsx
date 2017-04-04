import React      from 'react' ;
import RecipeApp  from './RecipeApp.jsx';
//import Dialog     from './Dialog.jsx';

class Recipes_And_Dialog_Cont extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id='Recipes_and_Dialog_Cont'>
        <RecipeApp/>
        {/* <Dialog/> */}
      </div>    
    );
  }
}

export default Recipes_And_Dialog_Cont;
