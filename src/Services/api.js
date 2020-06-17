import axios from 'axios'

const api = axios.create({
    baseURL: 'https://uxarch.herokuapp.com/'
})

export default api