import React, { useState, useEffect } from 'react';
import { getPoke } from '../actions'
import { connect } from 'react-redux'
import PokeInfo from './pokeinfo'
import '../styles.scss'


function GetPokemon(props) {
    const [poke, setPoke] = useState([])

    useEffect(() => {
        props.getPoke()
    }, []);

    return(
        <div>
            <div className='pokeDiv'>
            {/* {poke.map(pokemon => {
                return(
                    <div>
                        <PokeInfo name={pokemon.name} url={pokemon.url} />
                    </div>
                )
            })} */}
            </div>
            <div className='buttonDiv'>
            {/* <button onClick={loadMore} className='loadButton'>Load More!</button> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(
    mapStateToProps,
    { getPoke }
)(GetPokemon);