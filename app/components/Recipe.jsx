import React from 'react' ;
import { connect } from 'react-redux';
import Dialog     from './Dialog.jsx';
const actions = require('../actions/actions.jsx');

const Recipe = (props) => {
    let ingredients = props.ingredients.map( (ingredient,index)=>{
      console.log("This is an ingredient", ingredient);
      return (
        <p key={index}> {ingredient} </p>
      )
    } )
     
    var openPanels = props.panelOpen.map( obj=> obj.recipeIndex);
  
    if ( openPanels.indexOf(props.recipeIndex ) > -1 ){

      return (
          <div>
          <Dialog ingredients = {props.ingredients} name = {props.name} recipeIndex = {props.recipeIndex} callerButton="Edit" className = "hidden"/>
          <div className='recipe'> {/*dispatch is available inside of props because I connected the Recipe component */}
              <h3 onClick={ ()=>{ props.dispatch(actions.contractPanelAG(props.recipeIndex))} }>{props.name}</h3>
              <div className='ingredients'>
                  <h3>Ingredients</h3>
                  <hr/>
                  <div className='ingredientsContainer'>
                    {ingredients}
                  </div>
                  <div className='buttonContainer'>
                      <button className="danger" onClick={()=>{ props.dispatch(actions.delRecAG(props.recipeIndex))} }  >
                          Delete
                      </button>
                      <button  className="default" id={props.recipeIndex} onClick = { ()=>{
                        document.getElementById('window').className =""; 
                        var dialog = document.getElementById('window');
                        dialogPolyfill.registerDialog(dialog);
                                     dialog.showModal();
                        document.getElementById('closeButton').onclick = function () {
                        dialog.close();
                        };
                        document.getElementById('closeX').onclick = function () {
                        dialog.close();
                        }; 
                      
                      } }>
                          Edit
                      </button>
                  </div>
              </div>
        
          </div>
        </div>  
    );
    }
  else {
  return(
      <div className='recipe' >
        <h3 onClick={ ()=>{ 
          {/* close all open panels */}
          console.log("Open panels");
          console.log(openPanels);
          openPanels.forEach( (panel)=>{
            props.dispatch(actions.contractPanelAG(panel))
          }         
          )
          props.dispatch(actions.expandPanelAG(props.recipeIndex))} } >{props.name}</h3>
              <div className='hidden' >
                  <h3>Ingredients</h3>
                  <hr/>
                  <div className='ingredientsContainer'>
                    {ingredients}
                  </div>
                  <div className='buttonContainer'>
                      <button className="danger" onClick={()=>{ props.dispatch(actions.delRecAG(props.recipeIndex))} }  >
                          Delete
                      </button>
                      <button className="default" id={props.recipeIndex} >
                          Edit
                      </button>
                  </div>
              </div>        
      </div>
  )
  }
  
  
}
module.exports = connect(
  (state)=>{
    return{
      panelOpen:state.panelOpen 
    };
  }
)(Recipe);