import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeInfo from './pokeinfo'
import '../styles.scss'


function GetPokemon() {
    const [poke, setPoke] = useState([])
    const [amount, setAmount] = useState(60)

    useEffect(() => {
        loadData()
    }, []);

    const loadData = () => {
        axios  
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=${amount}&offset=0`)
            .then(res => {
                setPoke(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loadMore = () => {
        if(amount <= 964) {
            setAmount(amount + 60)
            console.log(amount)
            loadData()
        }
        else {
            alert('No more to load!')
        }
    }

    return(
        <div>
            <div className='pokeDiv'>
            {poke.map(pokemon => {
                return(
                    <div>
                        <PokeInfo name={pokemon.name} url={pokemon.url} />
                    </div>
                )
            })}
            </div>
            <div className='buttonDiv'>
            <button onClick={loadMore} className='loadButton'>Load More!</button>
            </div>
        </div>
    )
}

export default GetPokemon;