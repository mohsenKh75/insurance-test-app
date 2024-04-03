import { apiHandler } from '@/utils/apiHadnler';
import { GET_INSURANCE_COMPANIES_DATA, GET_INSURANCE_DISCOUNT_DATA_EP, GET_VEHICLES_DATA_EP } from './endpoints';
import { transformCompaniesData, transformInsuranceDiscount, transformVehiclesData } from './transformers';

export function getVehiclesData() {
  return apiHandler?.({ ep: GET_VEHICLES_DATA_EP })?.then((res: any) => res?.data?.map?.(transformVehiclesData));
}

export function getInsuranceCompaniesData() {
  return apiHandler?.({
    ep: GET_INSURANCE_COMPANIES_DATA
  }).then((res: any) => res?.data?.map(transformCompaniesData));
}

export function getInsuranceDiscountsData() {
  return apiHandler?.({ ep: GET_INSURANCE_DISCOUNT_DATA_EP }).then((res: any) =>
    res?.data?.map?.(transformInsuranceDiscount)
  );
}
