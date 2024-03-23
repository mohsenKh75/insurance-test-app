import { SelectInsuranceInputType } from "./types";

export function transformVehiclesData(data: any): SelectInsuranceInputType {
  return {
    id: data?.id,
    title: data?.title,
  };
}

export function transformCompaniesData(data: any): SelectInsuranceInputType {
  return {
    id: data?.id,
    title: data?.title,
  };
}

export function transformInsuranceDiscount(
  data: any
): SelectInsuranceInputType {
  return {
    id: data?.id,
    title: data?.title,
  };
}
