import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import { useState, useEffect } from 'react'


const App = () => {
  const [search, setSearch] = useState(false)

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    fetch('/recipes')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setRecipes(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name}
          </li>
        ))}
      </ul>
    )
  }

  // return (
  //   <Router>
  //   <div className="App">
  //     <Header />
  //     {/*{search === false ? <Home /> : <Search />}*/}
  //     <Route path='/' exact component={Home} />
  //     <Route path='/search' exact component={Search} />
  //   </div>
  //   </Router>
  // );
}

export default App;
