// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import RecipeCategory from './RecipeCategory'
// import Button from './Button';

// const Home = () => {
//     // const [error, setError] = useState(null)
//     // const [isLoaded, setIsLoaded] = useState(false)
//     const [recipes, setRecipes] = useState([])
    
//     useEffect(() => {
//       fetch('/recipes')
//         .then(res => res.json())
//         .then(
//           (result) => {
//             // setIsLoaded(true)
//             setRecipes(result)
//           }
//         //   (error) => {
//         //     setIsLoaded(true)
//         //     setError(error)
//         //   }
//         )
//     }, [])
    
//     // if (error) {
//     //   return <div>Error: {error.message}</div>
//     // } else if (!isLoaded) {
//     //   return <div>Loading...</div>
//     // } else {
          
//     const ids = recipes.filter(recipe => recipe.rating === 5)
//     console.log('IDs', ids)
    
//     const dataArray = []
//     for (let i=0; i<5; i++) {
//       const data = ids[Math.floor(Math.random() * ids.length)]
//       dataArray.push(data)
//       console.log('type of :', typeof(data))
//       console.log('data', data)
//     }
//     console.log(dataArray)

//     const onClick = () => {
//         window.location = '/search'
//         console.log('go to search');
//     }

//     return (
//         <div>
//             <Button text="search recipes" onClick={onClick}/>
//             <RecipeCategory text='Top-rated'/>
//             <ul>
                
//                 <li key={dataArray[0].id}>{dataArray[0].name}</li>
                  
                
//             </ul>
//         </div>
        
//     )
// }


// export default Home