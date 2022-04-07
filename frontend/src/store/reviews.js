import { bindActionCreators } from "redux";
import { csrfFetch } from "./csrf";

const ADD = 'reviews/ADD'
const DELETE = 'reviews/DELETE'

const add = review => ({
    type: ADD,
    review
})

const reviewDelete = comment => ({
    type: DELETE,
    comment
})

export const deleteReview = reviewId => async dispatch => {
    console.log('Delete Review THunk')

    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });

    console.log('Delete Response', res)

    if(res.ok) {
        const id = await res.json()
        console.log('Id from delete ', id)
        dispatch(reviewDelete(id))
        return id
    }
}


export const addReview = (chairId, review) => async dispatch => {
    const res = await csrfFetch(`/api/chairs/${chairId}/reviews`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })

    if(res.ok) {
        const createdReview = await res.json();
        dispatch(add(createdReview))
        return createdReview;
    }
}



const initialState = {}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            if(!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review
                }
                return newState;
            }
            return {
                ...state,
                [action.revew.id]: {
                    ...state[action.review.id],
                    ...action.review
                }
            }
        case DELETE:
            const newState = {...state};
            delete newState[action.id]
            return newState
        default:
            return state;
    }
}

export default reviewReducer;
