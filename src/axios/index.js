import axios from "axios"

const instance = axios.create({
    //baseURL: "http://localhost:3001",
    baseURL: "https://PR5front.onrender.com"

})

export default instance