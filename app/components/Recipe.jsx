import React from 'react' ;

const Recipe = (props) => {
    return (
          <div className='recipe'>
              <h4>Pumpkin Pie</h4>
              <div className='ingredients'>
                  <h4>Ingredients</h4>
                  <hr/>
                  <div className='ingredientsContainer'>
                      <p>Ingredient 1</p>
                      <p>Ingredient 2</p>
                      <p>Ingredient 3</p>
                      <p>Ingredient 4</p>
                  </div>
                  <div className='buttonContainer'>
                      <button className="danger">
                          Delete
                      </button>
                      <button className="default" id="show">
                          Edit
                      </button>
                  </div>
              </div>
          </div>
    );
}

export default Recipe;