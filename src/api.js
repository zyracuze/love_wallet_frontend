import axios from 'axios';

const BASE_URL = 'http://localhost:8882/api';

export const getHello = () => axios.get(`${BASE_URL}/hello`);
