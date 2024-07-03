import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchApi = (url, delayTime = 0) => {
  const apiUrl = 'https://study-buddy-server-two.vercel.app/api' || 'http://localhost:8080/api';
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //await new Promise(resolve => setTimeout(resolve, delayTime));
        const response = await axios.get(apiUrl + url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, [url, delayTime]);

  return { data, isLoading, error };
};

export default useFetchApi;
