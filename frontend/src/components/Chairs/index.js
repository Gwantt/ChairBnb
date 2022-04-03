import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getChairs } from '../../store/chairs';
import * as chairActions from '../../store/chairs'
import './chair.css'
import { animate, motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import * as sessionActions from '../../store/session';
// import { motion } from 'framer-motion';


const Chairs = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    useEffect(() => {
        dispatch(chairActions.getChairs())
    }, [dispatch])

    const chairs = useSelector(state => state.chair);

    const chairData = Object.values(chairs)

    console.log('Data -->',);
    console.log('chairs -->', chairs)
    return (
        <>
            <h1>Chair Listings</h1>
            <div className='chairCard'>
                {chairData.map((chair, idx) => (
                    <motion.div className='chairDiv' key={idx} initial={{opacity: 0, translateY: 50}} animate={{opacity: 1, translateY: 0}} transition={{duration: 1.5}}>
                        <img src={chair.image1} width='250px' height='250px' />
                        <p>${chair.price} / night</p>
                        <p>{chair.name}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default Chairs;
