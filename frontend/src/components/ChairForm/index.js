import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as chairActions from '../../store/chairs';
import { createChair } from '../../store/chairs';
// import './DemoUser.css'
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const ChairForm = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    console.log('Session User -->', sessionUser);

    const handleSubmit = async e => {

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

        createdChair = await dispatch(chairActions.createChair(payload));

        if(createChair) {
            history.push(`/chairs/${createdChair.id}`)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='input'
                    placeholder='Address'
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <input
                    type='input'
                    placeholder='City'
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <input
                    type='input'
                    placeholder='State (Optional)'
                    value={state}
                    onChange={e => setState(e.target.value)}
                />
                <input
                    type='input'
                    placeholder='Country'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <input
                    type='image'
                    placeholder='URL Address'
                    value={image1}
                    onChange={e => setImage1(e.target.value)}
                />
                <input
                    type='image'
                    placeholder='URL Address'
                    value={image2}
                    onChange={e => setImage2(e.target.value)}
                />
                <input
                    type='image'
                    placeholder='URL Address'
                    value={image2}
                    onChange={e => setImage2(e.target.value)}
                />
                <input
                    type='input'
                    placeholder='Name of Chair'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <button type='submit'>Create New Chair</button>
                <button type='button' onClick={() => history.push('/')}>Cancel</button>
            </form>
        </div>
    )

}

export default ChairForm
