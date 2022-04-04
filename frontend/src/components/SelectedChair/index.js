import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import * as chairActions from '../../store/chairs'

const SelectedChair = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(chairActions.getChair(id))
    }, [dispatch])

    const chair = useSelector(state => state.chair)

    console.log('Chair -->', chair)

    const selectedChair = Object.values(chair)

    console.log('Selected Chair -->', selectedChair)

    return (
        <div>
            {selectedChair.map((chair, idx) => (
                <>
                    <div key={idx}>
                        <h1>{chair.name}</h1>
                        <img src={chair.image1}></img>
                        <img src={chair.image3}></img>
                        <img src={chair.image2}></img>
                        <p>${chair.price} / night</p>
                    </div>
                </>
            ))}
        </div>
    )

}

export default SelectedChair;
