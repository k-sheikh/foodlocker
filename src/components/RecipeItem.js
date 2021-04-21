import PropTypes from 'prop-types'

const RecipeItem = ( {recipe} ) => {
    return (
        <div className='recipe'>
            <h3>{recipe.name}</h3>
            <p>Desc: {recipe.description}</p>
            <p>Star Rating: {recipe.rating}</p>           
        </div>
    )
}

RecipeItem.propTypes = {
    recipe: PropTypes.object
}

export default RecipeItem;