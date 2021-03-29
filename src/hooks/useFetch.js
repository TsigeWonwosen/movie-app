import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  
  const getProducts = useCallback(async () => {

    try {
      setLoading(true)
      const response = await Axios(url);
      const products = await response.data;
      setData(products);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      setLoading([]);
    }
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, error, data };
};

export default useFetch;
