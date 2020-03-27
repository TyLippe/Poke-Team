import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function PokeDetail(props) {
    const [name, setName] = useState()
    const [type, setType] = useState([])
    const [sprite, setSprite] = useState()
    const [moves, setMoves] = useState([])
    let id = props.match.params.id

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setType(res.data.types)
                setSprite(res.data.sprites.front_default)
                setMoves(res.data.moves)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <h1>{name && name.charAt(0).toUpperCase() + name.slice(1)}</h1>
            <img src={sprite} />
            <h2>Types:</h2>
            {type && type.map(types => {
                return(
                    <div>
                        <p>{types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}</p>
                    </div>
                )
            })}
            <h2>Moves:</h2>
            {moves && moves.map(move => {
                return(
                    <div>
                        <p>{move.move.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PokeDetail