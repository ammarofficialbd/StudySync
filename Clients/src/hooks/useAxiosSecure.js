import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

// Create an axios instance
export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Request interceptor to add token to headers
    const requestInterceptor = axiosSecure.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
     
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
       // console.log(config);
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle errors
    const responseInterceptor = axiosSecure.interceptors.response.use(
      response => response,
      async error => {
        console.log('Error tracked in the interceptor', error.response);
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on component unmount
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
