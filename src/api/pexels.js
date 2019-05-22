import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.pexels.com',
  headers: {
    Authorization: '563492ad6f91700001000001c1dbb9199ea246bdbd6faac3521cb0fd'
  }
});
