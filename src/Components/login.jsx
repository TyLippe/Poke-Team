import React, {useState} from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'

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
        console.log(creds)
    }

    return(
        <div className='registerDiv'>
            <h1>Poké-Team Builder</h1>
            <h1>Log In</h1>
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        creds: state.creds
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login);