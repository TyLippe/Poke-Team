import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/navbar'
import Poke from './Components/getpoke'
import PokeDetail from './Components/pokedetail';
import Login from './Components/login'
import Team from './Components/team'
import PrivateRoute from './PrivateRoute'
import Register from './Components/register'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute exact path='/home' component={Poke} />
        <PrivateRoute path='/poke/:id' component={PokeDetail} />
        <PrivateRoute exact path='/team/:username' component={Team} />
      </div>  
    </Provider>
    </Router>
  );
}

export default App;
