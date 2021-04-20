import { Link } from 'react-router-dom'
import RecipeCategory from './RecipeCategory'
import Button from './Button';

const Home = () => {
    const onClick = () => {
        window.location = '/search'
        console.log('go to search');
    }

    return (
        <div>
            <Button text="search recipes" onClick={onClick}/>
            <RecipeCategory text='Top-rated'/>
        </div>
    )
}


export default Home