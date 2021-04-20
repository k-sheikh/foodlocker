import React from 'react';
import Button from './Button';


// const Header = ({ title }) => {
    // const onClick = () => {
    //     console.log('click')
    // };

//     return (
//         <div>
//             <h1>{ title }</h1>
//             <Button text='This is a button' onClick = {onClick} />
//         </div>
//     )
// }

// export default Header;


import PropTypes from 'prop-types';
import logo from '../logo.PNG'
import Navbar from './Navbar';

const Header = ({ logo }) => { 
     const onClick = () => {
        console.log('click')
    }; 

    return (
        <header>
            <Navbar /> 
            <img src={logo} alt='' />
            <Button text='This is a button' onClick = {onClick} />
        </header>
    )
}

Header.defaultProps = {
    logo: logo,
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default Header;
