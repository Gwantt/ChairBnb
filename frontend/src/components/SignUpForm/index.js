import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css'
import { motion } from 'framer-motion';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />

    const handleSubmit = e => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([])
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                })
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 1
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='container'
        >
            <div className='formDiv'>

                <form onSubmit={handleSubmit}>
                    <motion.ul variants={container} initial='hidden' animate='show' className='errors'>
                        {errors.map((error, idx) => <motion.li variants={item} key={idx}>{error}</motion.li>)}
                    </motion.ul>
                    <label className='label formItem'>
                        Email
                        <input
                            className='input formItem'
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label className='label formItem'>
                        Username
                        <input
                            className='input formItem'
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </label>
                    <label className='label formItem'>
                        Password
                        <input
                            className='input formItem'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <label className='label formItem'>
                        Confirm Password
                        <input
                            className='input formItem'
                            type='password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    <motion.button className='buttons grow' type='submit'>Sign Up</motion.button>
                </form>
            </div>
        </motion.div>
    )
}

export default SignupFormPage
