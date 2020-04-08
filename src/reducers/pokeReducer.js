import {
    FETCH_POKE,
    SUCCESS_POKE,
    FAILED_POKE,
    FETCH_ID_POKE,
    SUCCESS_ID_POKE,
    FAILED_ID_POKE
} from '../actions'

const initialState = {
    pokeData: [],
    fetchingPoke: false,
    err: null
}

export function pokeReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKE:
            return{
                ...state,
                pokeData: [],
                fetchingPoke: true,
                err: null
            }
        case SUCCESS_POKE:
            return{
                ...state,
                pokeData: [action.payload],
                fetchingPoke: false,
                err: null
            }
        case FAILED_POKE:
            return{
                ...state,
                pokeData: [],
                fetchingPoke: false,
                err: "Unable to fetch Pokemon"
            }
        case FETCH_ID_POKE:
            return{
                ...state,
                pokeData: [],
                fetchingPoke: true,
                err: null
            }
        case SUCCESS_ID_POKE:
            return{
                ...state,
                pokeData: [action.payload],
                fetchingPoke: false,
                err: null
            }
        case FAILED_ID_POKE:
            return{
                ...state,
                pokeData: [],
                fetchingPoke: false,
                err: "Unable to fetch Pokemon by Id"
            }
        default:
            return state
    }
}