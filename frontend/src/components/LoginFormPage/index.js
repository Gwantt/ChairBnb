import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { motion } from 'framer-motion';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    )
    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
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
                        Username or Email
                        <input
                            className='input formItem'
                            type='text'
                            value={credential}
                            onChange={e => setCredential(e.target.value)}
                        />
                    </label>
                    <label className='label formItem'>
                        Password
                        <input
                            className='input formItem'
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <button className='buttons grow' type='submit'>Log In</button>
                </form>
            </div>
        </motion.div>
    )


}

export default LoginFormPage;
