import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const RecipeCategory = ({ text }) => {
    // const [error, setError] = useState(null)
    // const [isLoaded, setIsLoaded] = useState(false)
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
      fetch('/recipes')
        .then(res => res.json())
        .then(
          (result) => {
            // setIsLoaded(true)
            setRecipes(result)
          }
        //   (error) => {
        //     setIsLoaded(true)
        //     setError(error)
        //   }
        )
    }, [])
    
    // if (error) {
    //   return <div>Error: {error.message}</div>
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>
    // } else {
          
    const ids = recipes.filter(recipe => recipe.rating === 5)
    console.log('IDs', ids)
    
    const topRated = []
    for (let i=0; i<5; i++) {
      const randomRecipe = ids[Math.floor(Math.random() * ids.length)]
      console.log(randomRecipe)
      topRated.push(randomRecipe)
    }
    console.log('top-rated', topRated)

    return ( 
        <div>
            <h3>{text}</h3>
            <p>{topRated.map(recipe => <RecipeItem name={recipe.name} rating={recipe.rating} />)}</p>
        </div>
    )
}

RecipeCategory.propTypes = {
    text: PropTypes.string.isRequired,
}

export default RecipeCategory