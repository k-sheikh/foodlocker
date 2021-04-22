import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem';


// we dont want our recipes in the recipes component because we want to access these in other components.
// we want to add it tou our app.js, (our global state), then we can pass them down as props.

const RecipeCategory = ({ recipes, title }) => {
    const [pics, setPics]  = useState([]);

    useEffect(() => {
        const getPics = async (query) => {
            const response = await fetch(
            `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: '563492ad6f9170000100000112c00782d84d44bbafd7828b5154b405'
                }
            }
            );
        const result = await response.json();
        setPics(result.photos ?? []);
        }

        const query = (recipes.map(recipe => recipe.name))
        getPics(query)
        

    }, [recipes]);
    
    return (
        <div className='RecipeCategory'>
            <h2>{title}</h2>
            <div className='RecipeCategoryContent'>
                {recipes.map((recipe) => (
                    <RecipeItem key={ recipe.id } recipe={recipe} image={pics.map(pic => pic.src.small)} />
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