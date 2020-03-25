import axios from 'axios'

export function axiosWithAuth() {
    const token = localStorage.getItem('token')
        return axios.create({
            headers: {
                Authorization: token
            },
            baseURL: `localhost:5000/api`
    })
}   