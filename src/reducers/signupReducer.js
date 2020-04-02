import {
    CREATE_USER,
    SUCCESS_CREATE,
    FAILED_CREATE
} from '../actions'

const initialState = {
    creatingUser: false,
    loggedIn: false,
    err: null
}

export function signupReducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_USER:
            return{
                ...state,               
                creatingUser: true,
                loggedIn: false,
                err: null
            }
        case SUCCESS_CREATE:
            return{
                ...state,
                creatingUser: false,
                loggedIn: true,
                err: null
            }
        case FAILED_CREATE:
            return{
                ...state,
                creatingUser: false,
                loggedIn: false,
                err: 'User not created'
            }
        default:
            return state
    }
}