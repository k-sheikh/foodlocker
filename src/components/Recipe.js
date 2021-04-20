import React from 'react';

const Recipe = ( {recipe} ) => {
    return (
        <div className='recipe'>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <p>{recipe.rating}</p>           
        </div>
    )
}

export default Recipe;
