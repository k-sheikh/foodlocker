import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem';
import { useEffect, useState } from 'react'

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
                    Authorization: '563492ad6f917000010000018668d3f31cdb4ed28fb1450a0946d3e1'
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
    recipes: PropTypes.object.isRequired,
}

export default RecipeCategory;