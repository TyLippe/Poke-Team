import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTeam } from '../actions'
import '../styles/team.scss'

function Team(props) {
    const id = localStorage.userId

    useEffect(() => {
        props.getTeam(id)
    }, [])

    return(
        <div className='teamDiv'>
            {props.team && props.team.map(pokemon => {
                return(
                    <div className='team'>
                        <img src={pokemon.sprite} />
                        <Link to={`/poke/${pokemon.poke_num}`} className='name'>{pokemon.poke_name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        team: state.team.team[0]
    }
}

export default connect(
    mapStateToProps,
    { getTeam }
)(Team);