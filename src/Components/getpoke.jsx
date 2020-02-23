import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeInfo from './pokeinfo'


function GetPokemon() {
    const [poke, setPoke] = useState([])
    const [amount, setAmount] = useState(20)

    useEffect(() => {
        loadData()
    }, []);

    const loadData = () => {
        axios  
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=${amount}&offset=0`)
            .then(res => {
                setPoke(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loadMore = () => {
        if(amount <= 60) {
            setAmount(amount + 20)
            loadData()
        }
        else {
            alert('No more to load!')
        }
    }

    return(
        <div>
            Pokemon
            {poke.map(pokemon => {
                return(
                    <div>
                        <PokeInfo name={pokemon.name} url={pokemon.url}/>
                    </div>
                )
            })}
            <button onClick={() => {loadMore()}}>Load More!</button>
        </div>
    )
}

export default GetPokemon;