import React from 'react' ;

class Dialog extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {
	      (function () {
            var node = document.querySelector(".container");
            var dialog = document.getElementById('window');
            dialogPolyfill.registerDialog(dialog);
            document.getElementById('show').onclick = function () {
                dialog.showModal();
                console.log('B');
                //node.className += " opaque"; 
            };
            document.getElementById('exit').onclick = function () {
                dialog.close();
            };
        })();
	}
  
  render(){
  return (
    <dialog id="window">
        <div className='flexContWind'>
            <div id='titleFlexContainer'>
              <h3 >Edit Recipe!</h3>
              <span id='x'>x</span>   
            </div>    
            <hr/>
            <h4>Recipe</h4>
            <input value='Spaghetti'/>
            <h4>Ingredients</h4>
            <textarea rows="4" cols="40">Comma seperaged ingredients</textarea>
            <div className='windowButtonContainer'>
           <button id="editRecipe">Edit Recipe</button>  
           <button id="close" className='default'>Close</button>
            </div>    
        </div>
    </dialog>    
  );
  }
}

export default Dialog;
