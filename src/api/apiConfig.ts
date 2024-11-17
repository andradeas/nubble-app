import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.NkmVWfqoqyOVPPrRjk3NWS09T1LCmme9A7GKf-lHdJNeLBSOBOxG6g55gJQn',
  },
});
