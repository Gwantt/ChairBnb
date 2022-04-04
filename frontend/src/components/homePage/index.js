import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as chairActions from '../../store/chairs'
import './home.css'

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(chairActions.getHomePage());
    })

    const chairs = useSelector(state => state.chair);

    const chairData = Object.values(chairs);

    return (
        <>
            <h1>Welcome To ChairBnb!</h1>
            <div className='homeCard'>
                {chairData.map((chair, idx) => (
                    <a href={`/chairs/${chair.id}`} className='homeDiv grow' key={idx}>
                        <img src={chair.image1} width='250px' height='250px'></img>
                        <p>{chair.name} / night</p>
                        <p>{chair.price}</p>
                    </a>
                ))}
            </div>
        </>



    )
}

export default HomePage;
