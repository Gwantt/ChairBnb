import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as chairActions from '../../store/chairs';
import { createChair } from '../../store/chairs';
// import './DemoUser.css'
import { motion } from 'framer-motion';
import { Redirect, useHistory } from 'react-router-dom';
import './chairForm.css'

const ChairForm = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // console.log('Session User -->', sessionUser);

    if (!sessionUser) {
        history.push('/chairs');
    }

    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    useEffect(() => {
        const errors = [];

        if (address.length < 5) errors.push('Please Enter your full Address ');
        if (city.length < 5) errors.push('Please Enter your City ');
        if (country.length < 3) errors.push('Please Enter a Valid Country ');
        if (!(image1.match(url))) errors.push('Please Enter a URL for the first image ');
        if (!(image2.match(url))) errors.push('Please Enter a URL for the second image ');
        if (!(image3.match(url))) errors.push('Please Enter a URL for the third image ');
        if (name.length < 3) errors.push('Name must be 3 characters or longer ');
        if (price <= 0) errors.push('Please enter a price');

        setErrors(errors);
    }, [address, city, country, image1, image2, image3, name, price])

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            userId: sessionUser.id,
            address,
            city,
            state,
            country,
            image1,
            image2,
            image3,
            name,
            price
        }
        let createdChair;

        // dispatch(chairActions.createChair(payload)).then(res => history.push(`/chairs/${res.id}`))
        createdChair = await dispatch(chairActions.createChair(payload));
        // console.log('Created Chair', createdChair.id)
        const chair = Object.values(createdChair);
        // console.log('Chair after creatoin', chair)
        if (createChair) {
            history.push(`/chairs/${chair[0]}`)
        }
    };

    // const item = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1 }
    // }

    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 1
    //         }
    //     }
    // }

    return (
        <div className='container' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className='formDiv'>
                <form onSubmit={handleSubmit}>
                    <ul className='errors'>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <input
                        className='formItem'
                        type='input'
                        placeholder='Address'
                        required
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='City'
                        required
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='State (Optional)'
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='Country'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='First Image'
                        required
                        value={image1}
                        onChange={e => setImage1(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='Second Image'
                        value={image2}
                        onChange={e => setImage2(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='Third Image'
                        value={image3}
                        onChange={e => setImage3(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='input'
                        placeholder='Name of Chair'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='number'
                        placeholder='Price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                    <button className='buttons grow' type='submit' disabled={errors.length > 0}>Create New Chair</button>
                    <button className='buttons grow' type='button' onClick={() => history.push('/')}>Cancel</button>
                </form>
            </div>
        </div>
    )

}

export default ChairForm
