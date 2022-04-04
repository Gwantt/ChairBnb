import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import * as chairActions from '../../store/chairs'
import './selectedChair.css'

const SelectedChair = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(chairActions.getChair(id))
    }, [dispatch])

    const chair = useSelector(state => state.chair)

    console.log('Chair -->', chair)

    const selectedChair = Object.values(chair)



    return (
        <div className='seletedContainer'>
            {selectedChair.map((chair, idx) => (
                <>
                    <div className='selectedChairDiv' key={idx}>
                        <h1>{chair.name}</h1>
                        <img src={chair.image1} height='250px' width='250px'></img>
                        <img src={chair.image3} height='250px' width='250px'></img>
                        <img src={chair.image2} height='250px' width='250px'></img>
                        <p>Chair Offered by {chair?.User?.username}</p>
                        <p>${chair.price} / night</p>
                        <p>{chair.address}, {chair.state}, {chair.country}</p>
                    </div>
                </>
            ))}
        </div>
    )

}

export default SelectedChair;
