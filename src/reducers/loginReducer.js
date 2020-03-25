import {
    FETCH_USER,
    SUCCESS_USER,
    FAILED_USER
} from '../actions'

const initialState = {
    fetchingUser: false,
    isLoggedIn: false,
    err: null
}

export function loginReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USER:
            return{
                ...state,
                fetchingUser: true,
                isLoggedIn: false,
                err: null
            }
        case SUCCESS_USER:
            return{
                ...state,
                fetchingUser: false,
                isLoggedIn: true,
                err: null
            }
        case FAILED_USER:
            return{
                ...state,
                fetchingUser: false,
                isLoggedIn: false,
                err: 'User not found'
            }
        default:
            return state
    }
}