import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api",
  withCredentials: true,
  timeout: 15000, 
  headers: {
    "Content-Type": "application/json", 
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken');
  if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

apiClient.interceptors.response.use(
  (response) => response, 
  async (error) => {
      if (error.response.status === 401) {
          const refreshToken = Cookies.get('refreshToken');
          const res = await axios.post(`${baseURL}/auth/refresh`, {
              refreshToken
          });
          
          Cookies.set('accessToken', res.data.accessToken, { secure: true, sameSite: 'Strict', expires: 1 / 24 });
          error.config.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
          return axios.request(error.config);
      }
      return Promise.reject(error);
  }
);

export default axiosInstance;
