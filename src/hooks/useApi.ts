import { AxiosResponse } from "axios";
import { useState } from "react";

export function useApi({ onSuccess }: { onSuccess?: () => void }) {
  const [data, setData] = useState<any>({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const onRequest = async (
    dataToPost: (data: any) => Promise<AxiosResponse<any> | Error>
  ) => {
    setIsPending(true);
    const response = await dataToPost(data);

    if (response instanceof Error) {
      setData(null);
      setError(response);
      console.error("error on sending data:", response?.message);
      setIsPending(false);
      return;
    }

    setData(response?.data);
    setError(null);
    setIsPending(false);
    onSuccess?.();
  };

  return { isPending, data, error, onRequest };
}
