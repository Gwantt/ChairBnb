import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css'
import ProfileButton from './ProfileButton';
import DemoUser from '../DemoUser';
// import './Navgation.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton className='aButton' user={sessionUser}/>
        )
    } else {
        sessionLinks = (
            <>
                <NavLink activeClassName='active' className='aButton' to='/login'>Log In</NavLink>
                <NavLink activeClassName='active' className='aButton' to='/signup'>Sign Up</NavLink>
            </>
        )
    }

    return (
        <ul>
            <li>
                <NavLink activeClassName='active' className='aButton' exact to='/'>Home</NavLink>
                {isLoaded && sessionLinks}
                <DemoUser />
            </li>
        </ul>
    )
}

export default Navigation
