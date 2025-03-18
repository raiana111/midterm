import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://calculator-tracker-8c379-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;
