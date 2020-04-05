import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function PokeDetail(props) {
    const [name, setName] = useState()
    const [type, setType] = useState([])
    const [sprite, setSprite] = useState()
    const [game, setGame] = useState([])
    const id = props.match.params.id

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setName(res.data.name)
                setType(res.data.types)
                setSprite(res.data.sprites.front_default)
                setGame(res.data.game_indices)
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
                        <li>{types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}</li>
                    </div>
                )
            })}
            <h2>Appears in:</h2>
            {game && game.reverse().map(games => {
                return(
                    <div>
                        <li>{games.version.name.charAt(0).toUpperCase() + games.version.name.slice(1)}</li>
                    </div>
                )
            })}
        </div>
    )
}

export default PokeDetail