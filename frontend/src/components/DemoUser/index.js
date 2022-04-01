import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './DemoUser.css'
import { motion } from 'framer-motion';

const DemoUser = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        return dispatch(sessionActions.demoUser({ credential:'Demo-lition', password:'password' }))
    }

    return (
        <div id='demoForm'>
            <form onSubmit={handleSubmit}>
                <button className='buttons grow' type='submit'>Demo User</button>
            </form>
        </div>
    )
}

export default DemoUser
