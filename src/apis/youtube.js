
import axios from 'axios';
const KEY = 'AIzaSyCTqKOhCYRhDWLP-8m6Ct0D8pCk2frDMI8';


export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults : 5,
        key: KEY
    }

});