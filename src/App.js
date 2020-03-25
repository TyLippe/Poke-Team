import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/navbar'
import Poke from './Components/getpoke'
import PokeDetail from './Components/pokedetail';
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
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Poke} />
        <Route path='/poke/2' component={PokeDetail} />
      </div>  
    </Provider>
    </Router>
  );
}

export default App;
