const LOAD = 'chairs/LOAD';

const load = chairs => ({
    type: LOAD,
    chairs
})


export const getChairs = () => async dispatch =>{
    const res = await fetch('/api/chairs/');

    if(res.ok) {
        const chairs = await res.json();
        dispatch(load(chairs))
    }
}

const initialState = {
    chairs: [],
}

const chairReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const allChairs = {};
            action.chairs.forEach(chair => {
                allChairs[chair.id] = chair
            })
            return {
                ...allChairs,
                ...state.chairs
            }
        default:
            return state;
    }
}

export default chairReducer;
