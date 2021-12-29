import axios from 'axios';
import { CORS_PROXY_URL } from './constants';

// by default I'm using the proxy url to avoid CORS for all requests
const baseInstance = axios.create({
  baseURL: `${CORS_PROXY_URL}`,
});

export default baseInstance;
