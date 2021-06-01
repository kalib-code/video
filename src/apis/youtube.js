
import axios from 'axios';
import env from "react-dotenv";


const KEY = env.KEY;


export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults : 5,
        key: KEY
    }

});