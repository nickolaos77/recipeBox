import React from 'react' ;
import { connect } from 'react-redux';
const actions = require('../actions/actions.jsx');

class Dialog2 extends React.Component{
  constructor(props){
    super(props)
   
   this.state = {
			recipeName: 'Add a recipe',
   ingredients:'Add a comma (,) seperated list of ingredients',
   textAreaValue : '',
   inputValue: ''   
		  };
   //this._initializeFormFields = () => this.initializeFormFields();
    
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
    var dialog2 = document.getElementById('window2'); 
    dialog2.close();
    this.setState({inputValue:"",textAreaValue:""});
    } 
  
  

  ingredientsString = this.props.ingredients.join(",");
  
  render(){
   
      return(
        <dialog id="window2" >
        <div className='flexContWind'>
            <div id='titleFlexContainer'>
              <h3 >Add Recipe!</h3>
              <span id='closeX2' onClick={this.initializeFormFields}>x</span>   
            </div>    
            <hr/>
            <h4>Recipe</h4>
            <input placeholder='Add a recipe' onChange={this.handleInput} value={this.state.inputValue} />
            <h4>Ingredients</h4>
            <textarea rows="4" cols="40" placeholder='Add a comma (,) seperated list of ingredients' onChange={this.handleTextArea} value={this.state.textAreaValue} ></textarea>
            <div className='windowButtonContainer'>
            {/*dispatch is available inside of props because I connected the Recipe component */}
           <button id="addRecipe" onClick ={  ()=>{
                  {/* how to call a nested function */}
                  this.initializeFormFields()
                  {/* how to call a nested function */}
                  this.props.dispatch(actions.addRecAG( this.state.recipeName, this.state.ingredients.split(',') , this.props.recipeIndex  ))
                  }}>Add Recipe</button>  
           <button id="closeButton2" className='default' onClick = { ()=>{
                  {/* how to call a nested function */}
                  this.initializeFormFields()     
                }}>Close</button>
                
            </div>    
        </div>
    </dialog>
      )
  }
}

module.exports = connect()(Dialog2);
