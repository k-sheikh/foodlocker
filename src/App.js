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
      const ids = []
      const getIds = async () => {
        {recipes.filter(recipe => recipe.rating === 5).map((recipe) => (
          ids.push(recipe.id)))}
      return ids
      }
      getIds()
      
      const randomIds = []
      const getRandomIds = async () => {
        for (let i=0; i<5; i++) {
          const data = await ids[Math.floor(Math.random() * ids.length)]
          randomIds.push(data)
        }
        console.log(randomIds)
        return randomIds
      }
      getRandomIds()
      //const randomIds = ids[Math.floor(Math.random() * ids.length)]
      //console.log(randomIds)   
      //console.log(randomIds)
      //return randomIds         
      return randomIds
                    
      }
    
    // 
    // return (
    //   <ul>
    //     {recipes.map((recipe) => (
    //         <li>{recipe.rating}</li>
          
    //     ))}
    //   </ul>
    // )
  }

  //{{recipe.rating==5} && <li key={recipe.id}>{recipe.name}</li>}
//   return (
//     <Router>
//     <div className="App">
//       <Header />
//       {/*{search === false ? <Home /> : <Search />}*/}
//       <Route path='/' exact component={Home} />
//       <Route path='/search' exact component={Search} />
//     </div>
//     </Router>
//   );
// }


export default App
