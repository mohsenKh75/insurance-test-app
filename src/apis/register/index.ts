import { apiHandler } from '@/utils/apiHadnler';

import { POST_REGISTER_DATA_EP } from './endpoints';
import { AxiosResponse } from 'axios';

export function postRegisterData(data: RegisterType): Promise<AxiosResponse<any> | Error> {
  return apiHandler({
    ep: POST_REGISTER_DATA_EP,
    method: 'POST',
    body: {
      first_name: data?.firstName,
      family_name: data?.lastName,
      password: data?.password
    }
  });
}
