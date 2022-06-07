import Cookies from "js-cookie";
import { csrfFetch } from "./csrf";

const LOAD = 'chairs/LOAD';
const ADD_CHAIR = 'chairs/ADD_CHAIR';
const UPDATE_ITEM = 'chairs/UPDATE_ITEM'
const REMOVE_CHAIR = 'chairs/REMOVE_CHAIR'

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

const remove = chairId => ({
    type: REMOVE_CHAIR,
    chairId
})

export const getChair = id => async dispatch => {
    const res = await csrfFetch(`/api/chairs/${id}`);
    // console.log('RES ->',res);
    if(res.ok) {
        const chair = await res.json();
        dispatch(load([chair]))
    }
}

export const createChair = chair => async dispatch => {
    const {userId, images, price, name, city, state, country, address} = chair
    // console.log('Create Chair thunk');
    const formData = new FormData()
    formData.append('userId', userId)
    formData.append('price', price)
    formData.append('name', name)
    formData.append('city', city)
    formData.append('state', state)
    formData.append('country', country)
    formData.append('address', address)

    if(images && images.length !== 0) {
        for(let i = 0; i < images.length; i++) {
            formData.append('images', images[i])
        }
    }

    const res = await csrfFetch('/api/chairs', {
        method: 'POST',
        headers: {"Content-Type": "multipart/form-data"},
        body: formData
    })

    if(res.ok) {
        const chair = await res.json();
        // console.log('chair -->', chair)
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

export const deleteChair = chairId => async dispatch =>{
    const res = await csrfFetch(`/api/chairs/${chairId}`, {
        method: 'DELETE'
    })

    if(res.ok) {
        dispatch(remove(chairId))
    }

}


export const getChairs = () => async dispatch =>{
    const res = await csrfFetch('/api/chairs');

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
            // console.log('Action.chairs ==>', action.chairs)
            const allChairs = {};
            action.chairs.forEach(chair => {
                allChairs[chair.id] = chair
            })
            return {
                ...allChairs,
                ...state.chairs
            }
        case ADD_CHAIR:
            // console.log('action chair', action.chair)
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
        case REMOVE_CHAIR:
            const newState = {...state};
            delete newState[action.chairId];
            return newState;
        default:
            return state;
    }
}

export default chairReducer;
