import axios from 'axios';

import { API_BASE_URL } from '../constants/stuff';

const apiClient = axios.create({
  baseURL: API_BASE_URL
});

export default apiClient;
