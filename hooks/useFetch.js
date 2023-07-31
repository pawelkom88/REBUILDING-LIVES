import { useEffect, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const controller = new AbortController();

  useEffect(() => {
    const signal = controller.signal;

    (async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/get-products", signal);
        
        if (!response.ok) {
          const message = `An error has occurred: ${response.status}`;
          setError(message);
          setLoading(false);
        }

        const data = await response.json();
        setData(data);
        setLoading(false);

      } catch (error) {
        const message = `An error has occurred: ${error.message}`;
        setError(message);
        setLoading(false);
      }
    })();

    return () => controller.abort("cancel request");
  }, []);

  return { data, loading, error };
}
