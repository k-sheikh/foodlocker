
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import Button from './Button'
import SearchRecipes from './SearchRecipes'

const Search = () => {

    
    
    // const onClick = () => {
    //     window.location = '/'
    //     console.log('go to home');
    // }


    // BELOW I HAVE DELETED onClick={onClick}
    return (
        <div>
            <Link to='/' >
                <Button text="Browse Recipes" />
            </Link>
            <div className='SearchBar'>
                <input type="text" placeholder='Search by ingredient'/>
                <button type="submit" style={{backgroundColor: '#a0e4b0', padding: '0.2rem 0.3rem'}}><FaSearch/></button>
            </div>
            <SearchRecipes />
        </div>
    )
}

export default Search
