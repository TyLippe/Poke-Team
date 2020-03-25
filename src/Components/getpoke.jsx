import React, { useEffect } from 'react';
import { getPoke } from '../actions'
import { connect } from 'react-redux'
import PokeInfo from './pokeinfo'
import '../styles.scss'


function GetPokemon(props) {
    useEffect(() => {
        props.getPoke()
    }, []);

    console.log(props.pokemon)
    
    return(
        <div>
            <div className='pokeDiv'>
            {props.pokemon && props.pokemon.map(pokemon => {
                return(
                    <div>
                        <PokeInfo name={pokemon.name} url={pokemon.url} />
                    </div>
                )
            })}
            </div>
            <div className='buttonDiv'>
            {/* <button onClick={loadMore} className='loadButton'>Load More!</button> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.poke.pokeData[0]
    }
}

export default connect(
    mapStateToProps,
    { getPoke }
)(GetPokemon);