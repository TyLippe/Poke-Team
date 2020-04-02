import React from 'react'

function NavBar() {
    
    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return(
        <div className='navDiv'>
            <h1>Poké-Team Builder</h1>
            <p>{localStorage.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default NavBar;