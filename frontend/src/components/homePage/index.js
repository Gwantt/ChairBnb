import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as chairActions from '../../store/chairs'
import './home.css'
import { motion } from 'framer-motion';
// import '../../Vector 1.png'
const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(chairActions.getHomePage());
    }, [dispatch])

    const chairs = useSelector(state => state.chair);

    const chairData = Object.values(chairs);

    return (
        <>
            {/* <h1>Welcome To ChairBnb!</h1> */}
            <div className='homeCard'>
                {chairData.map((chair, idx) => (
                    <motion.a href={`/chairs/${chair.id}`} className='homeDiv' key={idx} initial={{opacity: 0, translateY: 50}} animate={{opacity: 1, translateY: 0}} transition={{duration: 1.5}}>
                        <img src={chair.image1} width='250px' height='250px'></img>
                        <p>{chair.name}</p>
                        <p>${chair.price} / night</p>
                    </motion.a>
                ))}
            </div>
        </>



    )
}

export default HomePage;
