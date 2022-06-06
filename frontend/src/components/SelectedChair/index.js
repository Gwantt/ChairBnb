import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom'
import * as chairActions from '../../store/chairs'
import EditChair from '../ChairEdit';
import './selectedChair.css'
import { deleteChair } from '../../store/chairs';
import { deleteReview } from '../../store/reviews';
import ChairReview from '../ChairReview';
import { motion } from 'framer-motion';


const SelectedChair = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const [showEditForm, setShowEditForm] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)
    const chair = useSelector(state => state.chair)
    const reviews = useSelector(state => state.review)
    const selectedChair = Object.values(chair)

    // console.log('Chair ==> ', chair);
    // console.log('Select Chair =>', selectedChair)

    useEffect(() => {
        dispatch(chairActions.getChair(id))

        setShowEditForm(false);
        setShowDelete(false);

        if (sessionUser?.id === selectedChair[0]?.userId) {
            setShowDelete(true)
        }

    }, [dispatch, selectedChair[0].id, reviews])


    const onClick = async (review) => {
        await dispatch(deleteReview(review))
    }

    // console.log('Session User ID -->', sessionUser.id)


    // console.log('Chair -->', chair)


    // console.log('User ID', selectedChair[0].userId)

    let content = null;
    let reviewContent = null;
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

    if (!showEditForm && sessionUser?.id === selectedChair[0]?.userId) {
        content = (
            <>
                <button type='button' className='buttons grow' onClick={() => setShowEditForm(true)}>Edit Chair</button>
            </>
        )
    }

    if (sessionUser) {
        reviewContent = (
            <button type='button' className='buttons grow' onClick={() => setShowReviewForm(!showReviewForm)}>Leave A Review</button>
        )
    }

    // if (showDelete) {

    // }




    return (
        <motion.div
            className='seletedContainer'
            initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5 }}
        >
            {selectedChair.map((chair) => (
                <>
                    <h1 className='chairName'>{chair.name}</h1>
                    <div className='containerDiv'>
                        <div className='selectedChairDiv' key={chair.id}>
                            <img src={chair?.image1} height='500px' width='500px'></img>
                            <img src={chair?.image3} height='500px' width='500px'></img>
                            <img src={chair?.image2} height='500px' width='500px'></img>
                        </div>
                    </div>
                    <div className='inner'>
                        <p className='reviews'>Chair Offered by {chair?.User?.username}</p>
                        <p className='reviews'>${chair.price} / night</p>
                        <p className='reviews'>{chair.address}, {chair?.state}, {chair.country}</p>
                    </div>
                    {content}
                </>
            ))}
            <h2 className='reviewH2'>Reviews</h2>
            {reviewContent}
            <div className='reviewDiv'>
                {sessionUser && showReviewForm && (
                    <ChairReview hideForm={() => setShowReviewForm(false)} />
                )}
                {selectedChair.map((chair) => (
                    <>
                        {chair?.Reviews?.map((review, idx) => (
                            <div key={idx} className='reviewInd'>
                                <div className='innerDiv'>
                                    <p className='reviews nowrap'>{review?.User.username} </p>
                                    <p className='reviews nowrap' > {review?.rating} / 5 </p>
                                    <p className='reviews' key={review?.id}>{review?.review} </p>
                                </div>
                                {sessionUser?.id === chair.Reviews[idx].userId && (
                                    <div className='deleteButton'>
                                        <motion.button className='delete' onClick={() => onClick(review.id)}
                                            initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }}
                                            transition={{ duration: 1.5 }}
                                        >Delete Review</motion.button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                ))}
            </div>
        </motion.div>
    )

}

export default SelectedChair;
