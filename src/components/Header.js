import PropTypes from 'prop-types';
import logo from '../logo.PNG';
import Navbar from './Navbar';

const Header = ({ logo }) => {

       

    return (
        <header className='Header'>
            <Navbar /> 
            <img src={logo} alt='' className='Logo'/>
            
        </header>
    )
}

Header.defaultProps = {
    logo: logo,
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default Header

//recipe?recipe?rating=5?limit=3
// /recipe?recipe={insert recipe id here}
// http://127.0.0.1:8000/recipe?recipe=5