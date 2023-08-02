import { useEffect, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let cachedData = null;
        const cachedDataString = localStorage.getItem("productsData");
        if (cachedDataString) {
          const { data: cachedDataValue, expirationTimestamp } = JSON.parse(cachedDataString);
          if (expirationTimestamp > Date.now()) {
            cachedData = cachedDataValue;
          }
        }

        if (cachedData) {
          setData(cachedData);
        } else {
          const response = await fetch("/api/get-products", {
            method: "GET",
            headers: {
              "Cache-Control": "max-age=86400, private", 
            },
          });

          if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            setError(message);
          } else {
            const fetchedData = await response.json();
            setData(fetchedData);

            const expirationTime = Date.now() + 86400 * 1000; 
            const dataToCache = { data: fetchedData, expirationTimestamp: expirationTime };
            localStorage.setItem("productsData", JSON.stringify(dataToCache));
          }
        }
      } catch (error) {
        const message = `An error has occurred: ${error.message}`;
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return { data, loading, error };
}
