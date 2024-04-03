import { AxiosResponse } from 'axios';
import { POST_LOGIN_DATA_EP } from './endpoints';
import { apiHandler } from '@/utils/apiHadnler';
import { LoginData } from './types';

export function postLoginData(data: LoginData): Promise<AxiosResponse<any> | Error> {
  return apiHandler?.({
    ep: POST_LOGIN_DATA_EP,
    method: 'POST',
    body: { mobile_number: data?.phoneNumber }
  });
}
