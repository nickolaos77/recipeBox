import React from 'react' ;
import { connect } from 'react-redux';
const actions = require('../actions/actions.jsx');

class Dialog extends React.Component{
  constructor(props){
    super(props)
   
   this.state = {
			recipeName: '',
   ingredients:'',
   textAreaValue : '',
   inputValue: ''   
		  };
    
  }
  handleInput = (event) => {
		this.setState({
			recipeName: event.target.value,
   inputValue:event.target.value
		});
	}
  
  handleTextArea = (event) => {
		this.setState({
			ingredients: event.target.value,
   textAreaValue : event.target.value
		});
	}
  
  initializeFormFields = ()=>{
    var dialog = document.getElementById('window'); 
    dialog.close(); this.setState({inputValue:"",textAreaValue:""});
    }
  
  
  ingredientsString = this.props.ingredients.join(",");
  
  render(){

  return (
    <dialog id="window">
        <div className='flexContWind'>
            <div id='titleFlexContainer'>
              <h3 >Edit Recipe!</h3>
              <span id='closeX' onClick={this.initializeFormFields}>x</span>   
            </div>    
            <hr/>
            <h4>Recipe</h4>
            <input placeholder={this.props.name} onChange={this.handleInput} value={this.state.inputValue}/>
            <h4>Ingredients</h4>
            <textarea rows="4" cols="40" onChange={this.handleTextArea} placeholder={this.props.ingredients.join(',')} value={this.state.textAreaValue}></textarea>
            <div className='windowButtonContainer'>
            {/*dispatch is available inside of props because I connected the Recipe component */}
           <button id={"editRecipe"+this.props.recipeIndex}  onClick ={ ()=>{
                  {/* how to call a nested function */}
                  this.initializeFormFields()
                  if (this.state.recipeName){
                  this.props.dispatch(actions.editRecAG( this.state.recipeName, this.state.ingredients.split(',') , this.props.recipeIndex  ))
                
                  }
                  else {
                    this.props.dispatch(actions.editRecAG( this.props.name, this.state.ingredients.split(',') , this.props.recipeIndex  ))
                  }
                  
                                     }}>Edit Recipe</button>  
           <button id="closeButton" className='default' onClick={this.initializeFormFields} >Close</button>
            </div>    
        </div>
    </dialog>    
  );
    //}
  }
}

module.exports = connect()(Dialog);
