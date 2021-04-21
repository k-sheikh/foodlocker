import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem';

// we dont want our recipes in the recipes component because we want to access these in other components.
// we want to add it tou our app.js, (our global state), then we can pass them down as props.

const RecipeCategory = ({ recipes, title }) => {
    
    return (
        <>
            <h3>{title}</h3>
            {recipes.map((recipe) => (
                <RecipeItem key={ recipe.id } recipe={recipe}/>
            ))}
        </>
        
    )
}

RecipeCategory.propTypes = {
    title: PropTypes.string.isRequired,
    recipes: PropTypes.object.isRequired,
}

export default RecipeCategory;