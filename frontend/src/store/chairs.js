import Cookies from "js-cookie";
import { csrfFetch } from "./csrf";

const LOAD = 'chairs/LOAD';
const ADD_CHAIR = 'chairs/ADD_CHAIR';
const UPDATE_ITEM = 'chairs/UPDATE_ITEM'

const load = chairs => ({
    type: LOAD,
    chairs
})

const addChair = chair => ({
    type: ADD_CHAIR,
    chair
})

const update = chair => ({
    type: UPDATE_ITEM,
    chair
})

export const getChair = id => async dispatch => {
    const res = await fetch(`/api/chairs/${id}`);
    if(res.ok) {
        const chair = await res.json();
        dispatch(load([chair]))
    }
}

export const createChair = chair => async dispatch => {

    console.log('Create Chair thunk');

    const res = await csrfFetch('/api/chairs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(chair)
    })

    console.log('res ->', res);

    if(res.ok) {
        const chair = await res.json();
        console.log('chair -->', chair)
        dispatch(addChair(chair));
        return chair;
    }
}

export const editChair = (id, chair) => async dispatch => {
    const res = await csrfFetch(`/api/chairs/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(chair)
    })

    if(res.ok) {
        const chair = await res.json();
        dispatch(update(chair))
        return chair;
    }
}


export const getChairs = () => async dispatch =>{
    const res = await fetch('/api/chairs');

    if(res.ok) {
        const chairs = await res.json();
        dispatch(load(chairs))
    }
}

export const getHomePage = () => async dispatch => {
    const res = await fetch('/api/chairs/home');

    if(res.ok) {
        const homeChairs = await res.json();
        dispatch(load(homeChairs))
    }
}

const initialState = {
    chairs: [],
}

const chairReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            console.log('Action.chairs ==>', action.chairs)
            const allChairs = {};
            action.chairs.forEach(chair => {
                allChairs[chair.id] = chair
            })
            return {
                ...allChairs,
                ...state.chairs
            }
        case ADD_CHAIR:
            console.log('action chair', action.chair)
            if(!state[action.chair.id]) {
                const newState = {
                    ...state,
                    [action.chair.id]: action.chair
                };
                // console.log('New State --> ', newState)
                // const chairList = newState.chairs.map(id => newState[id]);
                // chairList.push(action.chair);
                return newState;
            }
            return {
                ...state,
                [action.chair.id]: {
                    ...state[action.chair.id],
                    ...action.chair
                }
            }
        case UPDATE_ITEM:
            return {
                ...state,
                [action.chair.id]: action.chair
            };
        default:
            return state;
    }
}

export default chairReducer;
