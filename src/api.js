import axios from 'axios';
import { API_KEY } from './config';

export async function getWeather (city){
    try{
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`);
        return response.data;
    }catch(error){
        console.error(error)
        return null;
    }
}