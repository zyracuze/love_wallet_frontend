import axios from 'axios';

const BASE_URL = 'http://139.59.106.112/api';

export const getHello = () => axios.get(`${BASE_URL}/hello`);
