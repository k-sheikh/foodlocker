import PropTypes from 'prop-types'
import { FaChild, FaStar } from "react-icons/fa"
import { useState } from 'react'
import Recipe from './Recipe'

const RecipeItem = ( {recipe, image} ) => {
    const [showRecipe, setShowRecipe] = useState(false)

    const onClick = () => {
        setShowRecipe(!showRecipe);
    }

    return (
        <div className='RecipeItem'>
            <img src={image} alt='img'/>
            <h3 onClick={onClick} className='RecipeTitle'>{recipe.name}</h3>
            <p>Rating: {recipe.rating} <FaStar style={{color: 'gold'}}/></p>
            <p>Rated by: {recipe.n_ratings} <FaChild style={{color: 'green'}}/></p>
            {showRecipe && <Recipe recipe={recipe} /> }           
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object,
    image: PropTypes.array
}

export default RecipeItem;