export const GET_ALL_BRAND_DETAILS = "GET_ALL_BRAND_DETAILS";
export const GET_BRAND_METRICS = "GET_BRAND_METRICS";
export const SET_ALL_BRAND_DETAILS = "SET_ALL_BRAND_DETAILS";
export const SET_BRAND_METRICS = "SET_BRAND_METRICS";
export const SET_ALL_BRAND_TYPES = "SET_ALL_BRAND_TYPES";

export type BrandDetails = any;

export type BrandMetrics = {
  brandId: string;
  metrics: any;
};
export type BrandTypes = {
  good: string[];
  alarming: string[];
  escalation: string[];
  inline: string[];
};

export type GetAllBrandDetails = {
  type: typeof GET_ALL_BRAND_DETAILS;
  payload: { agencyId: string };
  callback: Function;
};

export type GetBrandMetrics = {
  type: typeof GET_BRAND_METRICS;
  payload: {
    brandId: any;
    selectedMonth: string;
    selectedYear: string;
  };
  callback: Function;
};

export type SetAllBrandDetails = {
  type: typeof SET_ALL_BRAND_DETAILS;
  payload: BrandDetails;
};

export type SetBrandMetrics = {
  type: typeof SET_BRAND_METRICS;
  payload: BrandMetrics;
};

export type SetAllBrandTypes = {
  type: typeof SET_ALL_BRAND_TYPES;
  payload: { types: BrandTypes };
};

export type BrandState = {
  data: {} | null;
  types: BrandTypes;
};
