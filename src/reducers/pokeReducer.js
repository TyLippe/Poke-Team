import {
    FETCH_POKE,
    SUCCESS_POKE,
    FAILED_POKE,
    ADD_POKE_TEAM,
    DELETE_POKE_TEAM
} from '../actions'

const initialState = {
    poke: [],
    fetchingPoke: false,
    addingPoke: false,
    pokeShowing: false,
    deletingPoke: false,
    err: null
}

export function pokeReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKE:
            return{
                ...state,
                fetchingPoke: true,
                addingPoke: false,
                pokeShowing: false,
                deletingPoke: false,
                err: null
            }
        case SUCCESS_POKE:
            return{
                ...state,
                fetchingPoke: false,
                addingPoke: false,
                pokeShowing: true,
                deletingPoke: false,
                err: null
            }
        case FAILED_POKE:
            return{
                ...state,
                fetchingPoke: false,
                addingPoke: false,
                pokeShowing: false,
                deletingPoke: false,
                err: 'Could not fetch Pokemon'
            }
        case ADD_POKE_TEAM:
            return{
                ...state,
                poke: [...state.poke, action.payload],
                fetchingPoke: false,
                addingPoke: true,
                pokeShowing: false,
                deletingPoke: false,
                err: null
            }
        case DELETE_POKE_TEAM:
            return{
                ...state,
                poke: state.poke.filter(poke => poke.id !== action.payload),
                fetchingPoke: false,
                addingPoke: false,
                pokeShowing: false,
                deletingPoke: true,
                err: null
            }
        default:
            return state
    }
}