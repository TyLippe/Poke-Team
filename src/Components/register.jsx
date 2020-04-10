import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../actions'
import '../styles/register.scss'

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
    }

    const login = () => {
        window.location.href = '/login';
    }

    return(
        <div className='registerDiv'>
            {props.created && <Redirect to='/login' />}
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit} className='regForm'>
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
            <p>Already Have an Account?</p>
            <button onClick={login}>Log In</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        creds: state.creds,
        created: state.signup.created
    }
}

export default connect(
    mapStateToProps,
    { signup }
)(Register);