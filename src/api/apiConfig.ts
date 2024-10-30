import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.etrD9hb9CQbQJ0EvuA-tM8jz1VLVQa9bceUnpcfp4snrBmc1-JB4qXFC2uMo',
  },
});
