import React from 'react';
import {Link} from "react-router-dom";

// Styles
import '../../../styles/App.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link className='navbar__item' to='/posts'>Посты</Link>
                <Link className='navbar__item' to='/users'>Пользователи</Link>
            </div>
        </div>
    );
};

export default Navbar;