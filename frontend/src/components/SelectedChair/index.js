import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom'
import * as chairActions from '../../store/chairs'
import EditChair from '../ChairEdit';
import './selectedChair.css'
import { deleteChair } from '../../store/chairs';
const SelectedChair = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const [showEditForm, setShowEditForm] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const chair = useSelector(state => state.chair)
    const selectedChair = Object.values(chair)

    console.log('Chair ==> ', chair);
    console.log('Select Chair =>', selectedChair)
    useEffect(() => {
        dispatch(chairActions.getChair(id))

        setShowEditForm(false);
        setShowDelete(false);

        if (sessionUser.id === selectedChair[0].userId) {
            setShowDelete(true)
        }
    }, [dispatch, selectedChair[0].id])


    console.log('Session User ID -->', sessionUser.id)


    // console.log('Chair -->', chair)


    console.log('User ID', selectedChair[0].userId)

    let content = null;



    if (showEditForm && showDelete) {
        content = (
            <>
                <EditChair chair={chair} hideForm={() => setShowEditForm(false)} />
                <>
                <button onClick={() => {
                    dispatch(deleteChair(id))
                    history.push('/chairs')
                }}>Delete Chair Listing</button>
                </>
            </>
        )
    }

    if (!showEditForm && sessionUser.id === selectedChair[0].userId) {
        content = (
            <button type='button' className='buttons grow' onClick={() => setShowEditForm(true)}>Edit Chair</button>
        )
    }

    // if (showDelete) {

    // }




    return (
        <div className='seletedContainer'>
            {selectedChair.map((chair) => (
                <>
                    <h1>{chair.name}</h1>
                    <div className='selectedChairDiv' key={chair.id}>
                        <img src={chair?.image1} height='250px' width='250px'></img>
                        <img src={chair?.image3} height='250px' width='250px'></img>
                        <img src={chair?.image2} height='250px' width='250px'></img>
                        <div className='inner'>
                            <p>Chair Offered by {chair?.User?.username}</p>
                        </div>
                        <div className='inner'>
                            <p>${chair.price} / night</p>
                        </div>
                        <div className='inner'>
                            <p>{chair.address}, {chair.state}, {chair.country}</p>
                        </div>
                    </div>
                    {content}
                </>
            ))}
        </div>
    )

}

export default SelectedChair;
