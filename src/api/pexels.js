import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.pexels.com',
  headers: {
    Authorization: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
});
