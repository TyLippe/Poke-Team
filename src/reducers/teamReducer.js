import {
    FETCH_TEAM,
    SUCCESS_TEAM,
    FAILED_TEAM,
    ADD_POKE_TEAM,
    FAILED_ADD_POKE,
    DELETE_POKE_TEAM
} from '../actions'

const initialState = {
    team: [],
    pokeData: [],
    fetchingTeam: false,
    addingPoke: false,
    deletingPoke: false,
    err: null
}

export function teamReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TEAM:
            return{
                ...state,
                team: [],
                pokeData: [],
                fetchingTeam: true,
                addingPoke: false,
                deletingPoke: false,
                err: null
            }
        case SUCCESS_TEAM:
            return{
                ...state,
                team: [action.payload],
                fetchingTeam: false,
                addingPoke: false,
                deletingPoke: false,
                err: null
            }
        case FAILED_TEAM:
            return{
                ...state,
                team: [],
                fetchingTeam: false,
                addingPoke: false,
                deletingPoke: false,
                err: "Unable to fetch team"
            }
        case ADD_POKE_TEAM:
            return{
                ...state,
                team: [],
                fetchingTeam: false,
                addingPoke: true,
                deletingPoke: false,
                err: null
            }
        case FAILED_ADD_POKE:
            return{
                ...state,
                team: [],
                fetchingTeam: false,
                addingPoke: false,
                deletingPoke: false,
                err: "Unable to add to team"
            }
        case DELETE_POKE_TEAM:
            return{
                ...state,
                team: state.poke.filter(poke => poke.id !== action.payload),
                fetchingPoke: false,
                addingPoke: false,
                deletingPoke: true,
                err: null
            }
        default:
            return state
    }
}