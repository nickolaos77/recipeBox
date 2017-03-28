var expect  = require('chai').expect;

var actions = require('../../actions/actions.jsx');
//using the alias at webpack.config.js
//var actions = require('actions.jsx');

describe('Testing the actions component', function(){
    it('should pass this canary test in actions', function(){
        expect(true).to.eql(true);
    });
    
});

describe ('Actions', ()=>{
    it('should generate an Add Recipe Action', ()=>{
        var action ={
            type: 'ADD_RECIPE',
            recipeName:"Spanakoryzo",
            ingredients:["Spanaki", "Ryzi","Ladi"]
        };
        var addRecipeActionGenResponse = actions.addRecAG(action.recipeName, action.ingredients)
        
        expect(addRecipeActionGenResponse).to.eql(action)
    });
    it('should generate a Delete Recipe Action', ()=>{
        var action ={
            type: 'DEL_RECIPE',
            recipeIndex: 1
        };
        var deleteRecipeActionGenResponse = actions.delRecAG(action.recipeIndex)
        
        expect(deleteRecipeActionGenResponse).to.eql(action)
    });    
    
    
 it('should generate an Edit Recipe Action', ()=>{
        var action ={
            type: 'EDIT_RECIPE',
            recipeName: 'Lasagna',
            ingredients:['butter', 'pasta', 'cheese'],
            recipeIndex: 1
            
        };
        var editRecipeActionGenResponse = actions.editRecAG(action.recipeName, action.ingredients, action.recipeIndex)
        
        expect(editRecipeActionGenResponse).to.eql(action)
    });        
 
 it('should generate an Expand Panel Action', ()=>{
        var action ={
            type: 'EXPAND_PANEL',
            recipeIndex: 1
            
        };
        var expandPanelActionGenResponse = actions.expandPanelAG(action.recipeIndex);
        expect(expandPanelActionGenResponse).to.eql(action)
    });      

 it('should generate a Contract Panel Action', ()=>{
        var action ={
            type: 'CONTRACT_PANEL',
            recipeIndex: 1
            
        };
        var contractPanelActionGenResponse = actions.contractPanelAG(action.recipeIndex);
        expect(contractPanelActionGenResponse).to.eql(action)
    });     
    
 it('should generate a Show Modal Action', ()=>{
        var action ={
            type: 'SHOW_MODAL'
        };
        var showModalActionGenResponse = actions.showModalAG();
        expect(showModalActionGenResponse).to.eql(action)
    });         
    
 it('should generate a Hide Modal Action', ()=>{
        var action ={
            type: 'HIDE_MODAL'
        };
        var hideModalActionGenResponse = actions.hideModalAG();
        expect(hideModalActionGenResponse).to.eql(action)
    });     
    
});