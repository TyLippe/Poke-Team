import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const username = localStorage.username
    
    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return(
        <div className='navDiv'>
            <Link to={`/home`}>Poké-Team Builder</Link>
            <Link to={`/team/${username}`}>{username}</Link>
            {username && <button onClick={logout}>Log Out</button>}
        </div>
    )
}

export default NavBar;