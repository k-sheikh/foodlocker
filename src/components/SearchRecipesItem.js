import React from 'react';

const SearchRecipesItem = ({recipe}) => {
    return (
        <div>
            <h3>{recipe.name}</h3>
            <p>Description: {recipe.description}</p>
            <p>Steps: {recipe.steps}</p>
            <p><small>Minutes: {recipe.minutes}</small></p>
        </div>
    )
}

export default SearchRecipesItem;