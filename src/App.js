import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import TopRated from './components/TopRated'
import { useState, useEffect } from 'react'


const App = () => {
  const [search, setSearch] = useState(false)


      
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


   return (
    <Router>
     <div className="App">
      <Header />
       {/*{search === false ? <Home /> : <Search />}*/}
       <Route path='/' exact component={Home} />
       <Route path='/search' exact component={Search} />
     </div>
    </Router>
   );
}


export default App
