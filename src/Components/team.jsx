import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../auth/axiosWithAuth'
import { Link } from 'react-router-dom'


function Team() {
    const id = localStorage.userId
    const [team, setTeam] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`http://localhost:5000/api/user/${id}/team`)
            .then(res => {
                setTeam(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(team)

    return(
        <div className='teamDiv'>
            {team && team.map(pokemon => {
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

export default Team;