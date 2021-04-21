import { useState, useEffect } from 'react'
import RecipeCategory from './RecipeCategory'
import Button from './Button';

const Home = () => {
  const url = 'http://127.0.0.1:8000/recipes';
  // we want our state in the top level so that we can use them in other components.
  const [fiveStarRecipes, setFiveStarRecipes] = useState([]);
  const [quickRecipes, setQuickRecipes] = useState([]);

  useEffect(() => {
    const getFiveStarRecipes = async () => {    
      const fiveStarRecipesFromServer = await fetchFiveStarRecipes();
      setFiveStarRecipes(fiveStarRecipesFromServer);
    };

    getFiveStarRecipes()
  }, [])

  const fetchFiveStarRecipes = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const fiveStarData = data.filter((recipe) => (recipe.rating === 5));
        const topRated = [];
        for (let i=0; i<3; i++) {
          const randomRecipe = fiveStarData[Math.floor(Math.random() * fiveStarData.length)];
          topRated.push(randomRecipe);
        }

        // delete this console.log(). Just there to show the data exists.
        console.log(topRated);
        return topRated;
      };

  useEffect(() => {
    const getQuickRecipes = async () => {    
      const quickRecipesFromServer = await fetchQuickRecipes();
      setQuickRecipes(quickRecipesFromServer);
    };

    getQuickRecipes()
  }, [])

  const fetchQuickRecipes = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const quickData = data.filter((recipe) => (recipe.minutes <= 30));
        const quick = [];
        for (let i=0; i<3; i++) {
          const randomQuickRecipe = quickData[Math.floor(Math.random() * quickData.length)];
          quick.push(randomQuickRecipe);
        }

        // delete this console.log(). Just there to show the data exists.
        console.log(quick);
        return quick;
      };

    const onClick = () => {
        window.location = '/search'
        console.log('go to search');
    }

    return (
        <div>
            <Button text="search recipes" onClick={onClick}/>
            <RecipeCategory recipes={fiveStarRecipes} title='Five Star Recipes' />
            <RecipeCategory recipes={quickRecipes} title='Recipes That Take Under 30 Minutes' />
        </div>
        
    )
}


export default Home