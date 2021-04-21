import React, {useState} from 'react';
import SearchRecipesItem from './SearchRecipesItem';

const SearchRecipes = () => {

    const [query, setQuery] = useState('');
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    
    const searchRecipes = async (e) => {
        e.preventDefault();
        // console.log("this works");

        // const query = "pineapple";

        const url = `http://127.0.0.1:8000/search?ingredients=${query}`;

        try {  
            const response = await fetch(url);
            const data = await response.json();
            
            const fiveStarSearch = data.filter((recipe) => (recipe.rating === 5));
            const topRatedSearch = [];
            for (let i=0; i<2; i++) {
            const randomRecipe = fiveStarSearch[Math.floor(Math.random() * fiveStarSearch.length)];
            topRatedSearch.push(randomRecipe);
            }
            setSearchedRecipes(topRatedSearch);

        }catch(err) {
            console.error(err);
        }
        
    }

    return (
        <>
            <form onSubmit={searchRecipes}>
                <label htmlFor="query">Recipe Search</label>
                <input name = "query" placeholder="enter ingredient" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div>
                {searchedRecipes.map(recipe => (
                    <SearchRecipesItem key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </>
    )
}

export default SearchRecipes;