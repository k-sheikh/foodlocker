import React from 'react';

const Recipe = ( {recipe} ) => {
    return (
        <div className='recipe'>
            <h3>{recipe.name}</h3>
            <p>Desc: {recipe.description}</p>
            <p>Star Rating: {recipe.rating}</p>           
        </div>
    )
}

export default Recipe;
