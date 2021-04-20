import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  
  const url = 'http://127.0.0.1:8000/recipes';
  // we want our state in the top level so that we can use them in other components.
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {    
      const recipesFromServer = await fetchRecipes();
      setRecipes(recipesFromServer);
    };

    getRecipes()
  }, [])

  const fetchRecipes = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const fiveStarData = data.filter((recipe) => (recipe.rating === 5));
        const topRated = [];
        for (let i=0; i<5; i++) {
          const randomRecipe = fiveStarData[Math.floor(Math.random() * fiveStarData.length)];
          topRated.push(randomRecipe);
        }

        // delete this console.log(). Just there to show the data exists.
        console.log(topRated);

        return topRated;
      };
    
  return (
    <Router>
      <div className='container'>
        <Header />
        <Recipes recipes ={recipes} />
        <Route path='/search' exact component={Search} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;


// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Home from './components/Home'
// import Search from './components/Search'
// import TopRated from './components/TopRated'
// import { useState, useEffect } from 'react'


// const App = () => {
//   const [search, setSearch] = useState(false)


      
      // const randomIds = []
      // const getRandomIds = () => {
      //   for (let i=0; i<5; i++) {
      //     const data = ids[Math.floor(Math.random() * ids.length)]
      //     randomIds.push(data)
      //   }
      //   console.log(randomIds)
      //   return randomIds
      // }
      // getRandomIds()

      // const getRecipes = async () => {
      //   for (const i in randomIds) {
      //     console.log('the next thing is i')
      //     console.log(i)
      //   }
      // }
      // getRecipes()
       
    //  return 123
                    
      
    
    // 
    // return (
    //   <ul>
    //     {recipes.map((recipe) => (
    //         <li>{recipe.rating}</li>
          
    //     ))}
    //   </ul>
    // )


//    return (
//     <Router>
//      <div className="App">
//       <Header />
//        {/*{search === false ? <Home /> : <Search />}*/}
//        <Route path='/' exact component={Home} />
//        <Route path='/search' exact component={Search} />
//      </div>
//     </Router>
//    );
// }


// export default App
