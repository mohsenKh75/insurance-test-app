import axios, { AxiosResponse } from 'axios'; // Assuming you have axios installed

export interface ApiRequest {
  ep: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
}

export const apiHandler = async ({
  ep,
  method = 'GET',
  body = null
}: ApiRequest): Promise<AxiosResponse<any> | Error> => {
  try {
    const response = await axios({
      method,
      url: ep,
      data: body
    });

    return response;
  } catch (err) {
    return err as Error;
  }
};
