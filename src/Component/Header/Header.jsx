import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex gap-6 text-3xl justify-center mb-10 '>
            <Link to='/'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;