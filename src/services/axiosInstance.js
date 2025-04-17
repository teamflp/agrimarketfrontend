
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://127.0.0.1:8000/api', 
  // ou 'https://nom-domaine.com/api' si on fait le déploiement
});

export default axiosInstance;
