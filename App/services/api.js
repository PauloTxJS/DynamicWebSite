import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.25.183:8080/homeapp'
});

export default api;