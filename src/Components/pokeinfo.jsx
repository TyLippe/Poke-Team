import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPoke } from '../actions'
import '../styles.scss'

function PokeInfo(props) {
    const [data, setData] = useState([])
    const [pokeimg, setPokeimg] = useState([])
    const [imgURL, setImgURL] = useState()
    const [shiny, setShiny] = useState(false)
    const [gender, setGender] = useState('male')
    const [poke, setPoke] = useState({
        sprite: '',
        poke_num: '',
        poke_name: '',
        poke_type: []
    })

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
        if(gender === 'male' && shiny === false) {
            setImgURL(pokeimg.front_shiny)
            setShiny(true)
        } else if (gender === 'male' && shiny === true) {
            setImgURL(pokeimg.front_default)
            setShiny(false)
        } else if (gender === 'female' && shiny === false) {
            setImgURL(pokeimg.front_female_shiny)
            setShiny(true)
        } else if (gender === 'female' && shiny === true) {
            setImgURL(pokeimg.front_female)
            setShiny(false)
        }
    }

    const switchGender = e => {
        e.preventDefault()
        if(gender === 'male' && shiny === false) {
            setImgURL(pokeimg.front_female)
            setGender('female')
        } else if (gender === 'male' && shiny === true) {
            setImgURL(pokeimg.front_shiny_female)
            setGender('female')
        } else if (gender === 'female' && shiny === false) {
            setImgURL(pokeimg.front_default)
            setGender('male')
        } else if (gender === 'female' && shiny === true) {
            setImgURL(pokeimg.front_female_shiny)
            setGender('male')
        }
    }

    const handlePoke = e => {
        setPoke({
            ...poke,
            sprite: pokeimg.front_default,
            poke_num: data.id,
            poke_name: capitalPoke,
            poke_type: data.types
        })
    }

    const addTeam = e => {
        props.addPoke(2, poke)
    }

    const capitalPoke = props.name.charAt(0).toUpperCase() + props.name.slice(1)

    return(
        <div className='pokeContainer'>
            <div className='pokeNum'> 
                <p>{data.id}</p>
            </div>
                <img src={imgURL} />
                <Link to={`/poke/${data.id}`} className='nameLink'>{capitalPoke}</Link>
            <div className='switchButtons'>
                {pokeimg.front_shiny !== null &&
                    <button onClick={switchShiny}>Shiny</button>
                }
                {pokeimg.front_female !== null &&
                    <button onClick={switchGender}>Gender</button>
                }
                <button onClick={handlePoke}>+</button>
                <button onClick={addTeam}>+</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        poke: state.capitalPoke
    }
}

export default connect(
    mapStateToProps,
    { addPoke }
)(PokeInfo);