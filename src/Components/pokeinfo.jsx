import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PokeInfo(props) {
    const [data, setData] = useState([])
    const [pokeimg, setPokeimg] = useState([])

    useEffect(() => {
        axios
            .get(props.url)
            .then(res => {
                setData(res.data)
                setPokeimg(res.data.sprites)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <img src={pokeimg.front_default} />
            <p>{props.name}</p>
        </div>
    )
}

export default PokeInfo;