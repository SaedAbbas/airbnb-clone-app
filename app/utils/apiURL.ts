import axios from "axios";



const apiUrl = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BASE_URL,
})

export default apiUrl;