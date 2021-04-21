import React from 'react'; 
import Recipe from './Recipe';

// we dont want our recipes in the recipes component because we want to access these in other components.
// we want to add it tou our app.js, (our global state), then we can pass them down as props.

const Recipes = ({ recipes, title }) => {
    
    return (
        <>
            <h3>{title}</h3>
            {recipes.map((recipe) => (
                <Recipe key={ recipe.id } recipe={recipe}/>
            ))}
        </>
        
    )
}

export default Recipes;
