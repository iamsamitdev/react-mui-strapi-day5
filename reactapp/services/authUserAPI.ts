// import axios
import Axios from 'axios'

// login function
const authLogin = (data: any) => {
    return Axios.post('/auth/local', data , {
        baseURL: import.meta.env.VITE_BASE_URL_API,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}

export default { authLogin }