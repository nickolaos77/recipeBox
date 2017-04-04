import React from 'react' ;
import { connect } from 'react-redux';
const actions = require('../actions/actions.jsx');

class Dialog2 extends React.Component{
  constructor(props){
    super(props)
   
   this.state = {
			recipeName: 'Add a recipe',
   ingredients:'Add a comma (,) seperated list of ingredients'   
		  };
    
  }
  handleInput = (event) => {
		this.setState({
			recipeName: event.target.value
		});
	}
  
  handleTextArea = (event) => {
		this.setState({
			ingredients: event.target.value
		});
	

}  
  
  ingredientsString = this.props.ingredients.join(",");
  
  render(){
   
      return(
        <dialog id="window2" >
        <div className='flexContWind'>
            <div id='titleFlexContainer'>
              <h3 >Add Recipe!</h3>
              <span id='closeX2'>x</span>   
            </div>    
            <hr/>
            <h4>Recipe</h4>
            <input placeholder={this.state.recipeName} onChange={this.handleInput} />
            <h4>Ingredients</h4>
            <textarea rows="4" cols="40" placeholder={this.state.ingredients} onChange={this.handleTextArea}></textarea>
            <div className='windowButtonContainer'>
            {/*dispatch is available inside of props because I connected the Recipe component */}
           <button id="addRecipe" onClick ={ ()=>{
                  var dialog2 = document.getElementById('window2');
                  dialogPolyfill.registerDialog(dialog2);  
                  dialog2.close();
                  this.props.dispatch(actions.addRecAG( this.state.recipeName, this.state.ingredients.split(',') , this.props.recipeIndex  )) 
                  this.setState({
			                     recipeName: 'Add a recipe',
                        ingredients:'Add a comma (,) seperated list of ingredients'   
		                      });  
                  console.log("this is the new state");
                  console.log(this.state.ingredients);
                }}>Add Recipe</button>  
           <button id="closeButton2" className='default' onClick = { ()=>{
                document.getElementById('closeButton2').onclick = function () {
                var dialog2 = document.getElementById('window2');
                dialogPolyfill.registerDialog(dialog2);  
                dialog2.close();
                        };
                }}>Close</button>
                
            </div>    
        </div>
    </dialog>
      )
  }
}

module.exports = connect()(Dialog2);
