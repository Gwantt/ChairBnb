import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css'
import ProfileButton from './ProfileButton';
import logo from '../../images/logo.png'
import DemoUser from '../DemoUser';
// import './Navgation.css'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink activeClassName='active' className='aButton' to='/chairs'>Chair Listings</NavLink>
                <NavLink activeClassName='active' className='aButton' to='/create'>Create A Listing</NavLink>
                <ProfileButton className='aButton' user={sessionUser} />

            </>
        )
    } else {
        sessionLinks = (
            <>
                <NavLink activeClassName='active' className='aButton' to='/login'>Log In</NavLink>
                <NavLink activeClassName='active' className='aButton' to='/signup'>Sign Up</NavLink>
                <NavLink activeClassName='active' className='aButton' to='/chairs'>Chair Listings</NavLink>
                <DemoUser />
            </>
        )
    }

    return (
        <ul>
            <li>
                <NavLink activeClassName='active' className='aButton' exact to='/'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>

            <li className='logoLi'>
                <div className='logoDiv'>
                    <img className='logo' src={logo} alt='ChairBnb' />
                </div>
            </li>
        </ul>
    )
}

export default Navigation
