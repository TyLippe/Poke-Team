import React, {useState} from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions'

function Register(props) {
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
        props.signup(creds)
        setTimeout(() => signupChecker(), 2000)
    }

    const signupChecker = () => {
        if(!props.loggedIn){
            props.history.push('/login')
        } else {
            alert('SignUp Failed')
        }
    }

    const login = () => {
        window.location.href = '/login';
    }

    return(
        <div className='registerDiv'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Submit" />
            </form>
            <button onClick={login}>Log In</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        creds: state.creds,
        loggedIn: state.signup.loggedIn
    }
}

export default connect(
    mapStateToProps,
    { signup }
)(Register);