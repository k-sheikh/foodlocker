import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = ({ title }) => {

       

    return (
        <header>
            <Navbar /> 
            <h1>{title}</h1> 
        </header>
    )
}

Header.defaultProps = {
    title: 'Food Locker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
