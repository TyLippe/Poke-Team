import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { pokeReducer } from './pokeReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    poke: pokeReducer
})

export default rootReducer