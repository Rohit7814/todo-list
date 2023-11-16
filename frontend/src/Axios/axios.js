import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-back-8df3.onrender.com"
})
export default instance