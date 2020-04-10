import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'
import '../styles/login.scss'

function Login(props) {
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.login(creds)
    }

    const register = () => {
        window.location.href = '/register';
    }

    return(
        <div className='loginDiv'>
            {props.isLoggedIn && <Redirect to='/home' />}
            <h1>LOG IN</h1>
            <form onSubmit={handleSubmit} className='loginForm'>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={creds.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={creds.password}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" className='submit' />
            </form>
            <p>No account?</p>
            <button onClick={register}>Register</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        creds: state.creds,
        isLoggedIn: state.login.isLoggedIn
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login);