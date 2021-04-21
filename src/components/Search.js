
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import Button from './Button'

const Search = () => {

    
    
    const onClick = () => {
        window.location = '/'
        console.log('go to home');
    }

    return (
        <div>
            <Button text="Browse Recipes" onClick={onClick} />
            <div className='SearchBar'>
                <input type="text" placeholder='Search by ingredient'/>
                <button type="submit" style={{backgroundColor: '#a0e4b0', padding: '0.2rem 0.3rem'}}><FaSearch/></button>
            </div>
        </div>
    )
}

export default Search
