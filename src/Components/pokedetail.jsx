import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function PokeDetail(props) {
    const [details, setDetails] = useState([])

    let id = props.match.params.id

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                setDetails(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(details.moves)

    return(
        <div>
            <h1>{details.name}</h1>
        </div>
    )
}

export default PokeDetail