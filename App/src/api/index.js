import axios from 'axios';

const api = axios.create({
    baseURL: "http://172.16.7.158:3000"
})

export default api;