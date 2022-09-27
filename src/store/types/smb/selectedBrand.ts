// selectedBrand: {
//     setSelectedBrandId { brandId }
//     getAllAiGroupsDetails { brandID }
//     getAIGroupMetrics { aiGroupID, selectedMonth, selectedYear }
//     setAllAIGroupsDetails { allAiGroupsDetails }
//     setAIGroupMetrics { aiGroupId, metrics }
//   }

export const GET_ALL_AI_GROUPS_DETAILS = "GET_ALL_AI_GROUPS_DETAILS";
export const GET_AI_GROUP_METRICS = "GET_AI_GROUP_METRICS";
export const SET_SELECTED_BRAND_ID = "SET_SELECTED_BRAND_ID";
export const SET_ALL_AI_GROUPS_DETAILS = "SET_ALL_AI_GROUPS_DETAILS";
export const SET_AI_GROUP_METRICS = "SET_AI_GROUP_METRICS";
export const POST_RESULT_METRICS = "POST_RESULT_METRICS";

export type BrandId = string;

export type AiGroupDetails = {};

export type AiGroupMetrics = {
  aiGroupId: any;
  metrics: any;
};

export type GetAllAiGroupsDetails = {
  type: typeof GET_ALL_AI_GROUPS_DETAILS;
  payload: { brandId: any };
  callback: Function;
};

export type GetAIGroupMetrics = {
  type: typeof GET_AI_GROUP_METRICS;
  payload: {
    aiGroupId: any;
    selectedMonth: string;
    selectedYear: any;
    brandId: any;
  };
  callback: Function;
};

export type SetSelectedBrandId = {
  type: typeof SET_SELECTED_BRAND_ID;
  payload: BrandId;
};

export type SetAllAIGroupsDetails = {
  type: typeof SET_ALL_AI_GROUPS_DETAILS;
  payload: AiGroupDetails;
};

export type SetAIGroupMetrics = {
  type: typeof SET_AI_GROUP_METRICS;
  payload: AiGroupMetrics;
};

export type PostResultMetrics = {
  type: typeof POST_RESULT_METRICS;
  payload: {
    brandId: any;
  };
  callback: Function;
};

export type SelectedBrandState = {
  id: "";
  aiGroups: {} | null;
};
