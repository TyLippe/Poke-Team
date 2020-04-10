import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.scss'

function NavBar() {
    const username = localStorage.username
    
    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return(
        <div className='navDiv'>
            <Link to={`/home`} className='logo'>Poké-Team Builder</Link>
            <div className='user'>
            {username && <Link to={`/team/${username}`} className='username'>{username}</Link>}
            {username && <button onClick={logout} className='logout'>Log Out</button>}
            </div>
        </div>
    )
}

export default NavBar;