
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa"
import Button from './Button'

const Search = ({text}) => {
    const onClick = () => {
        window.location = '/'
        console.log('go to home');
    }

    return (
        <div>
            <Button text="browse recipes" onClick={onClick} />
            <h3>{text}</h3>
            <input type="text" placeholder='Search by ingredient'/>
            <button type="submit"><FaSearch/></button>
        </div>
    )
}

export default Search
