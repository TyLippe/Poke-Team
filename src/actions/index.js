import axios from 'axios'
import { axiosWithAuth } from '../auth/axiosWithAuth';

// Login
export const FETCH_USER = 'FETCH_USER'
export const SUCCESS_USER = 'SUCCESS_USER'
export const FAILED_USER = 'FAILED_USER'

// Register
export const CREATE_USER = 'CREATE_USER'
export const SUCCESS_CREATE = 'SUCCESS_CREATE'
export const FAILED_CREATE = 'FAILED_CREATE'

// Get Poke
export const FETCH_POKE = 'FETCH_POKE';
export const SUCCESS_POKE = 'SUCCESS_POKE';
export const FAILED_POKE = 'FAILED_POKE';

// Poke Data
export const FETCH_POKE_DATA = 'FETCH_POKE_DATA';
export const SUCCESS_POKE_DATA = 'SUCCESS_POKE_DATA';
export const FAILED_POKE_DATA = 'FAILED_POKE_DATA';

// Specific Poke Data
export const FETCH_ID_POKE = 'FETCH_ID_POKE'
export const SUCCESS_ID_POKE = 'SUCCESS_ID_POKE'
export const FAILED_ID_POKE = 'FAILED_ID_POKE'

// Team
export const FETCH_TEAM = 'FETCH_TEAM'
export const SUCCESS_TEAM = 'SUCCESS_TEAM'
export const FAILED_TEAM = 'FAILED_TEAM'

// Edit Team
export const ADD_POKE_TEAM = 'ADD_POKE_TEAM';
export const FAILED_ADD_POKE = 'FAILED_ADD_POKE';
export const DELETE_POKE_TEAM = 'DELETE_POKE_TEAM';


export function login(creds) {
    return dispatch => {
        dispatch({ type: FETCH_USER })
            axios
                .post(`http://localhost:5000/api/user/login`, creds)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('userId', res.data.id)
                    localStorage.setItem('username', res.data.username)
                    console.log(res.data)
                    dispatch({ type: SUCCESS_USER })
                })
                .catch(err => dispatch({ type: FAILED_USER, payload: err }))
    }
}

export function signup(creds) {
    return dispatch => {
        dispatch({ type: CREATE_USER })
            axios
                .post(`http://localhost:5000/api/user/register`, creds)
                .then(res => {
                    dispatch({ type: SUCCESS_CREATE })
                })
                .catch(err => dispatch({ type: FAILED_USER, payload: err }))
    }
}

export function getPoke(amount) {
    return dispatch => {
        dispatch({ type: FETCH_POKE })
            axiosWithAuth()
                .get(`https://pokeapi.co/api/v2/pokemon/?limit=${amount}`)
                .then(res => {
                    dispatch({ type: SUCCESS_POKE, payload: res.data.results })
                })
                .catch(err => dispatch({ type: FAILED_POKE, payload: err }))
    }
}

export function getPokeById(id) {
    return dispatch => {
        dispatch({ type: FETCH_ID_POKE })
            axiosWithAuth()
                .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => {
                    dispatch({ type: SUCCESS_ID_POKE, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_ID_POKE, payload: err }))
    }
}

export function getTeam(id) {
    return dispatch => {
        dispatch({ type: FETCH_TEAM })
            axiosWithAuth()
                .get(`http://localhost:5000/api/user/${id}/team`)
                .then(res => {
                    dispatch({ type: SUCCESS_TEAM, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_TEAM, payload: err }))
    }
}

export function addPoke(id, poke) {
    return dispatch => {
        dispatch({ type: ADD_POKE_TEAM})
            axiosWithAuth()
                .post(`http://localhost:5000/api/user/${id}/addpoke`, poke)
                .then(res => {
                    dispatch({ type: SUCCESS_POKE, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_ADD_POKE, payload: err }))
    }
}

export function deletePoke(id) {
    return dispatch => {
        dispatch({ type: DELETE_POKE_TEAM })
            axiosWithAuth() 
                .delete(`http://localhost:5000/api/team/${id}`)
                .then(res => {
                    dispatch({ type: SUCCESS_POKE, payload: res.data })
                })
                .catch(err => dispatch({ type: FAILED_POKE, payload: err }))
    }
}
