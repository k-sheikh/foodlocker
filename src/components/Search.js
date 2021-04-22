
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
            <Link to='/' style={{textDecoration: 'none'}} >
                <Button text="Browse Recipes" />
            </Link>
            
            <SearchRecipes />
        </div>
    )
}

export default Search
