import React, { useEffect, useState } from 'react';
import { getPoke } from '../actions'
import { connect } from 'react-redux'
import PokeInfo from './pokeinfo'
import '../styles/styles.scss'


function GetPokemon(props) {
    const [amount, setAmount] = useState(20)

    useEffect(() => {
        props.getPoke(amount)
    }, []);

    const loadMore = () => {
        setAmount(amount + 20)
        props.getPoke(amount + 20)
    }

    return(
        <div>
            <div className='pokeDiv'>
            {props.pokemon && props.pokemon.map(pokemon => {
                return(
                    <div>
                        <PokeInfo name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} 
                                  url={pokemon.url} />
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

const mapStateToProps = state => {
    console.log(state)
    return {
        pokemon: state.poke.pokeData[0]
    }
}

export default connect(
    mapStateToProps,
    { getPoke }
)(GetPokemon);