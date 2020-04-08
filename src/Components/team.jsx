import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTeam } from '../actions'


function Team(props) {
    const id = localStorage.userId

    useEffect(() => {
        props.getTeam(id)
    }, [])

    return(
        <div className='teamDiv'>
            {props.team && props.team.map(pokemon => {
                return(
                    <div>
                        <img src={pokemon.sprite} />
                        <Link to={`/poke/${pokemon.poke_num}`}>{pokemon.poke_name}</Link>
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