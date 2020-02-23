import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles.scss'

function PokeInfo(props) {
    const [data, setData] = useState([])
    const [pokeimg, setPokeimg] = useState([])
    const [imgURL, setImgURL] = useState()
    const [shiny, setShiny] = useState(false)
    const [gender, setGender] = useState(false)

    useEffect(() => {
        axios
            .get(props.url)
            .then(res => {
                setData(res.data)
                setPokeimg(res.data.sprites)
                setImgURL(res.data.sprites.front_default)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const switchShiny = e => {
        e.preventDefault()
        if(shiny === false) {
            setImgURL(pokeimg.front_default)
            setShiny(true)
        } else {
            setImgURL(pokeimg.front_shiny)
            setShiny(false)
        }
    }

    const switchGender = e => {
        e.preventDefault()
        if(gender === false) {
            setImgURL(pokeimg.front_default)
            setGender(true)
        } else {
            setImgURL(pokeimg.front_female)
            setGender(false)
        }
    }

    const capitalPoke = props.name.charAt(0).toUpperCase() + props.name.slice(1)

    console.log(data)

    return(
        <div className='pokeContainer'>
            <div className='pokeNum'> 
            <p>{data.id}</p>
            </div>
            <img src={imgURL} />
            <p>{capitalPoke}</p>
            <div className='switchButtons'>
            {pokeimg.front_shiny !== null &&
                <button onClick={switchShiny}>Shiny</button>
            }
            {pokeimg.front_female !== null &&
                <button onClick={switchGender}>Gender</button>
            }
            </div>
        </div>
    )
}

export default PokeInfo;