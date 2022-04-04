import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as chairActions from '../../store/chairs'
import './chair.css'
import { animate, motion } from 'framer-motion';


const Chairs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(chairActions.getChairs())
    }, [dispatch])

    const chairs = useSelector(state => state.chair);

    const chairData = Object.values(chairs)

    return (
        <>
            <h1>Chair Listings</h1>
            <div className='chairCard'>
                {chairData.map((chair, idx) => (
                    <motion.a href={`/chairs/${chair.id}`}  className='chairDiv' key={idx} initial={{opacity: 0, translateY: 50}} animate={{opacity: 1, translateY: 0}} transition={{duration: 1.5}}>
                        <img src={chair.image1} width='250px' height='250px' />
                        <p>${chair.price} / night</p>
                        <p>{chair.name}</p>
                    </motion.a>
                ))}
            </div>
        </>
    )
}

export default Chairs;
