import PropTypes from 'prop-types'
import { FaChild, FaStar } from "react-icons/fa"
import Recipe from './Recipe'

const RecipeItem = ( {recipe, image} ) => {
    const onClick = () => {
        window.location = '/recipe'
        console.log('go to recipe');
    }

    return (
        <div className='RecipeItem'>
            <img src={image} alt='img'/>
            <h3><a onClick={onClick} style={{cursor: 'pointer'}}>{recipe.name}</a></h3>
            <p>Rating: {recipe.rating} <FaStar style={{color: 'gold'}}/></p>
            <p>Rated by {recipe.n_ratings} <FaChild style={{color: 'green'}}/></p>
            <Recipe recipe={recipe} />           
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object,
    image: PropTypes.array
}

export default RecipeItem;