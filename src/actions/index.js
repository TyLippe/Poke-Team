import axios from 'axios'

export const FETCH_USER = 'FETCH_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const FAILED_USER = 'FAILED_USER'

export const CREATE_USER = 'CREATE_USER'
export const SUCCESS_CREATE = 'SUCCESS_CREATE'
export const FAILED_CREATE = 'FAILED_CREATE'

export const FETCH_POKE = 'FETCH_POKE';
export const SUCCESS_POKE = 'SUCCESS_POKE';
export const FAILED_POKE = 'FAILED_POKE';
export const ADD_POKE_TEAM = 'ADD_POKE_TEAM';
export const DELETE_POKE_TEAM = 'DELETE_POKE_TEAM';



export function getPoke(amount) {
    return dispatch => {
        dispatch({ type: FETCH_POKE })
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/?limit=${amount}`)
                .then(res => {
                    dispatch({ type: SUCCESS_POKE, payload: res.data.results })
                })
                .catch(err => dispatch({ type: FAILED_POKE, payload: err }))
    }
}

export function deletePoke(id) {
    return dispatch => {
        dispatch({ type: DELETE_POKE_TEAM })
            axios
                .delete(`localhost:5000/api/team/${id}`)
                .then(res => {
                    dispatch({ type: SUCCESS_POKE, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_POKE, payload: err }))
    }
}

export function addPoke(id, poke) {
    return dispatch => {
        dispatch({ type: ADD_POKE_TEAM})
            axios
                .post(`localhost:5000/api/user/${id}/addpoke`, poke)
                .then(res => {
                    dispatch({ type: SUCCESS_POKE, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_POKE, payload: err }))
    }
}

export function login(creds) {
    return dispatch => {
        dispatch({ type: FETCH_USER })
            axios
                .post(`localhost:5000/api/user/login`, creds)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userId', res.data.id)
                    dispatch({ type: SUCCESS_USER })
                })
                .catch(err => dispatch({ type: FAILED_USER, payload: err }))
    }
}

export function signup(creds) {
    return dispatch => {
        dispatch({ type: CREATE_USER })
            axios
                .post(`localhost:5000/api/user/register`, creds)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    dispatch({ type: SUCCESS_CREATE })
                })
                .catch(err => dispatch({ type: FAILED_USER, payload: err }))
    }
}