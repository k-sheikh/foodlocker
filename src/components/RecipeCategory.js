// import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem';


// we dont want our recipes in the recipes component because we want to access these in other components.
// we want to add it tou our app.js, (our global state), then we can pass them down as props.

const RecipeCategory = ({ recipes, title }) => {
    return (
        <div className='RecipeCategory'>
            <h2>{title}</h2>
            <div className='RecipeCategoryContent'>
                {recipes.map((recipe) => (
                    <RecipeItem key={ recipe.id } recipe={recipe} />
                ))}
            </div>
        </div>
        
    )
}

RecipeCategory.propTypes = {
    title: PropTypes.string.isRequired,
    recipes: PropTypes.array.isRequired,
}

export default RecipeCategory;