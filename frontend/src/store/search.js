import {crsfFetch} from './csrf'

const SEARCH = 'search/SEARCH'
const CLEAR = 'search/CLEAR'

const search = search => ({
    type: SEARCH,
    search
})

const clear = () => ({
    type: CLEAR,
})



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
