import axios from 'axios';

//https://stv-api-image.herokuapp.com/api
// works: http://localhost:5000/api 
export default axios.create({
    baseURL: 'https://stv-api-image.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
        'Content-Type': 'application/json'
    }
});

