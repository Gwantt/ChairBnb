import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { addReview } from '../../store/reviews';
import { useHistory, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/reviews';
import './ChairReview.css'


const ChairReview = ({ hideForm }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');
    const { id } = useParams()
    const sessionUser = useSelector(state => state.session.user);
    const chair = useSelector(state => state.chair);


    // console.log('Chair Review Form Chair => ', chair[id]);

    useEffect(() => {
        const errors = []

        if (review.length <= 0) errors.push('Please leave a review');
        if (rating > 5 || rating < 1) errors.push('Rating must be between 1 and 5');

        setErrors(errors);
    }, [review, rating])

    const handleSubmit = async e => {
        e.preventDefault();

        if (errors.length > 0) return;

        const payload = {
            userId: sessionUser.id,
            spotId: chair[id].id,
            review,
            rating,
        }


        await dispatch(addReview(chair[id].id, payload))
        hideForm();
    }

    const handleCancelClick = e => {
        e.preventDefault();
        hideForm();
    }

    return (
        <div className='reviewContainer'>
            <div className='reviewFormDiv'>
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li className='errors' key={idx}>{error}</li>
                        ))}
                    </ul>
                    <input
                        className='formItem'
                        type='text'
                        placeholder='Review'
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    />
                    <input
                        className='formItem'
                        type='number'
                        placeholder='Rating'
                        value={rating}
                        onChange={e => setRating(e.target.value)}

                    />
                    <button className='buttons grow' type='submit'>Confirm</button>
                    <button className='buttons grow' type='button' onClick={handleCancelClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default ChairReview
