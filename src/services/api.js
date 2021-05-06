import axios from 'axios'

const api = axios.create({
    baseURL: 'https://movieapp-db.herokuapp.com/movies',
});

export default api;