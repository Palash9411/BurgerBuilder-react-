import axios from 'axios';

const instance = axios.create({
    baseURL :'https://burgerbuilder-35205.firebaseio.com/'
})

export default instance ; 