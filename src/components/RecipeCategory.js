import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const RecipeCategory = ({ text }) => {
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

        getPics('fried chicken');

    }, []);

    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
      fetch('/recipes')
        .then(res => res.json())
        .then(
          (result) => {
            setRecipes(result)
          }
        )
    }, [])

    const topRated = () => {
        const ids = recipes.filter(recipe => recipe.rating === 5)

        const randomFiveStar = []
        for (let i=0; i<5; i++) {
            const randomRecipe = ids[Math.floor(Math.random() * ids.length)]
            console.log(randomRecipe)
            randomFiveStar.push(randomRecipe)
        }
        console.log('top-rated', randomFiveStar)
        return randomFiveStar
    }

    return ( 
        <div>
            <h3>{text}</h3>
            <p>{pics.map(pic => <img src={pic.src.small} alt='img' />)}</p>
            <p>{topRated().map(recipe => <RecipeItem image='img' name={recipe.name} rating={recipe.rating} />)}</p>
        </div>
    )
}

RecipeCategory.propTypes = {
    text: PropTypes.string.isRequired,
}

export default RecipeCategory