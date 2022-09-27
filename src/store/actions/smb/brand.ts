// brands:{
//     getAllBrandsDetails { agencyID }
//     getBrandMetrics { brandID, selectedMonth, selectedYear }
//     setAllBrandsDetails { allBrandDetails }
//     setBrandMetrics { brandId, metrics }
//     setAllBrandTypes { Types : { type: []} }
//   }

import {
  GetAllBrandDetails,
  GetBrandMetrics,
  GET_ALL_BRAND_DETAILS,
  GET_BRAND_METRICS,
  SetAllBrandDetails,
  SetAllBrandTypes,
  SetBrandMetrics,
  SET_ALL_BRAND_DETAILS,
  SET_ALL_BRAND_TYPES,
  SET_BRAND_METRICS,
} from "../../types/smb/brand";

export const getAllBrandsDetails = (
  payload: {
    agencyId: string;
  },
  callback: Function
): GetAllBrandDetails => ({
  type: GET_ALL_BRAND_DETAILS,
  payload,
  callback,
});

export const getBrandMetrics = (
  payload: {
    brandId: any;
    selectedMonth: string;
    selectedYear: string;
  },
  callback: Function
): GetBrandMetrics => ({
  type: GET_BRAND_METRICS,
  payload,
  callback,
});

export const setAllBrandsDetails = (payload): SetAllBrandDetails => ({
  type: SET_ALL_BRAND_DETAILS,
  payload,
});

export const setBrandMetrics = (payload): SetBrandMetrics => ({
  type: SET_BRAND_METRICS,
  payload,
});
export const setAllBrandTypes = (payload): SetAllBrandTypes => ({
  type: SET_ALL_BRAND_TYPES,
  payload,
});
