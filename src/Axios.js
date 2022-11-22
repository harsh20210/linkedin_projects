import axios from 'axios';

const baseurl = axios.create({
    baseURL:'http://localhost:5001'
})

export default baseurl;