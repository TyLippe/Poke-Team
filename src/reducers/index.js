import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { signupReducer } from './signupReducer'
import { pokeReducer } from './pokeReducer'
import { teamReducer } from './teamReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    poke: pokeReducer,
    team: teamReducer
})

export default rootReducer