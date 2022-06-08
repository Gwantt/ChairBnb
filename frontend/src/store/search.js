import {crsfFetch, csrfFetch} from './csrf'

const SEARCH = 'search/SEARCH'
const CLEAR = 'search/CLEAR'

const search = search => ({
    type: SEARCH,
    search
})

const clear = () => ({
    type: CLEAR,
})

export const searchThunk = searchParam => async dispatch => {
    console.log(searchParam)
    const res = await csrfFetch('/api/chairs/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchParam)
    })

    if(res.ok) {
        const chairs = await res.json()
        console.log('searched Chairs => ', chairs)
        dispatch(clear())
        dispatch(search(chairs))
    }
}

export const clearSearchThunk = () => dispatch => {
    console.log('clearing')
    dispatch(clear())
}

const searchReducer = (state = {}, action) => {
    switch(action.type) {
        case SEARCH:
            const allSearchResults = {}
            action.search.forEach(searchRes => {
                allSearchResults[searchRes.id] = searchRes
            })
            return {
                ...allSearchResults,
                ...state
            }
        case CLEAR:
            return {}
        default:
            return state
    }
}

export default searchReducer
