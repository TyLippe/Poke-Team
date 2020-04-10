import React from 'react'
import { connect } from 'react-redux'
import { getPokeById } from '../actions'
import { useEffect } from 'react'
import '../styles/detail.scss'

function PokeDetail(props) {
    const id = props.match.params.id
    const poke = props.pokemon

    useEffect(() => {
        props.getPokeById(id)
    }, []);

    console.log(poke)

    return(
        <div className='detailDiv'>
            <div className='nameImg'>
            {poke && <h1 className='name'>{poke.name && poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h1>}
            {poke && <img src={poke.sprites.front_default} className='sprite' />}
            </div>
            <div className='details'>
            <h2>Types:</h2>
            {poke && poke.types.map(types => {
                return(
                    <div>
                        <li>{types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}</li>
                    </div>
                )
            })}
            <h2>Appears in:</h2>
            {poke && poke.game_indices.reverse().map(games => {
                return(
                    <div>
                        <li>{games.version.name.charAt(0).toUpperCase() + games.version.name.slice(1)}</li>
                    </div>
                )
            })}
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
    { getPokeById }
)(PokeDetail);