import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import * as chairActions from '../../store/chairs'
import EditChair from '../ChairEdit';
import './selectedChair.css'

const SelectedChair = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const [showEditForm, setShowEditForm] = useState(false)
    const chair = useSelector(state => state.chair)
    const selectedChair = Object.values(chair)

    console.log('Chair ==> ', chair.id );

    useEffect(() => {
        dispatch(chairActions.getChair(id))

        setShowEditForm(false);

        if(sessionUser.id === selectedChair[0].userId) {
            setShowEditForm(true)
        }
    }, [dispatch, selectedChair[0].id])


    console.log('Session User ID -->', sessionUser.id)


    // console.log('Chair -->', chair)


    console.log('User ID', selectedChair[0].userId)

    let content = null;



    if(showEditForm) {
        content = (
            <EditChair chair={chair} hideForm={() => setShowEditForm(false)} />
        )
    }

    return (
        <div className='seletedContainer'>
            {selectedChair.map((chair) => (
                <>
                    <div className='selectedChairDiv' key={chair.id}>
                        <h1>{chair.name}</h1>
                        <img src={chair?.image1} height='250px' width='250px'></img>
                        <img src={chair?.image3} height='250px' width='250px'></img>
                        <img src={chair?.image2} height='250px' width='250px'></img>
                        <p>Chair Offered by {chair?.User?.username}</p>
                        <p>${chair.price} / night</p>
                        <p>{chair.address}, {chair.state}, {chair.country}</p>
                    </div>
                    {content}
                </>
            ))}
        </div>
    )

}

export default SelectedChair;
