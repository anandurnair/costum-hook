import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const contentType = response.headers.get('Content-Type');

        let parsedData;
        if (contentType && contentType.includes('application/json')) {
          parsedData = await response.json();
        } else {
          parsedData = await response.text(); 
        }

        setData(parsedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;




