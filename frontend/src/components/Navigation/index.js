import React, { useState } from 'react';
import { NavLink, Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css'
import ProfileButton from './ProfileButton';
import logo from '../../images/logo.png'
import DemoUser from '../DemoUser';
import { motion, transform } from 'framer-motion';
import * as searchActions from '../../store/search'

// import './Navgation.css'


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams()
    const history = useHistory()
    const [searchContent, setSearchContent] = useState('')

    const dispatch = useDispatch()
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
                <NavLink activeClassName='active' className='aButton' to='/chairs' onClick={() => searchActions.searchThunk({ searchParams: '' })}>Chair Listings</NavLink>
                <DemoUser />
            </>
        )
    }

    const handleSubmit = e => {
        e.preventDefault()
        history.push('/chairs')
        const payload = {
            searchParams: searchContent
        }
        //dispatch search thunk using search params

        dispatch(searchActions.searchThunk(payload))
        //load the search results on the page instead of everything else

    }

    return (
        <motion.nav
        // animate={open ? 'open' : 'closed'}
        // variants={variants}
        >
            <li>
                <NavLink activeClassName='active' className='aButton' exact to='/'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>

            <li className='logoLi'>
                <div className='logoDiv'>
                    <img className='logo' src={logo} alt='ChairBnb' />
                </div>
            </li>
            <form onSubmit={handleSubmit} style={{position:'absolute', transform:'translate(99em, -6.5em)'}}>
                <input
                    style={{height: '25px'}}
                    className='formItem'
                    type='text'
                    value={searchContent}
                    placeholder='Search For Chairs'
                    onChange={e => setSearchContent(e.target.value)}
                />
            </form>
        </motion.nav>
    )
}

export default Navigation
