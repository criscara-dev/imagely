import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID e56cc04792c3ed3206578a0042957ebee010f53c3ca68f2a5795986a801183af'
  }
});
