import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/navbar'
import Poke from './Components/getpoke'
import PokeDetail from './Components/pokedetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route exact path='/poke' component={Poke} />
        <Route path='/poke/2' component={PokeDetail} />
      </div>  
    </Router>
  );
}

export default App;
