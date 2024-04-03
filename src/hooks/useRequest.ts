import { useEffect, useState } from 'react';

export function useRequest(request?: () => Promise<any>) {
  const [data, setData] = useState<any>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<unknown>(null); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request?.();
        setData(response);
        setError(null);
      } catch (err) {
        console.error('error on fetching data:', err);
        setError(err);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return { isPending, data, error };
}
