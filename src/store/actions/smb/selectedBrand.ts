// selectedBrand: {
//     setSelectedBrandId { brandId }
//     getAllAiGroupsDetails { brandID }
//     getAIGroupMetrics { aiGroupID, selectedMonth, selectedYear }
//     setAllAIGroupsDetails { allAiGroupsDetails }
//     setAIGroupMetrics { aiGroupId, metrics }
//   }

import {
  GetAIGroupMetrics,
  GetAllAiGroupsDetails,
  GET_AI_GROUP_METRICS,
  GET_ALL_AI_GROUPS_DETAILS,
  PostResultMetrics,
  POST_RESULT_METRICS,
  SetAIGroupMetrics,
  SetAllAIGroupsDetails,
  SetSelectedBrandId,
  SET_AI_GROUP_METRICS,
  SET_ALL_AI_GROUPS_DETAILS,
  SET_SELECTED_BRAND_ID,
} from "../../types/smb/selectedBrand";

export const getAllAiGroupsDetails = (
  payload: {
    brandId: any;
  },
  callback: Function
): GetAllAiGroupsDetails => ({
  type: GET_ALL_AI_GROUPS_DETAILS,
  payload,
  callback,
});

export const getAIGroupMetrics = (
  payload: {
    aiGroupId: any;
    selectedMonth: string;
    selectedYear: any;
    brandId: any;
  },
  callback: Function
): GetAIGroupMetrics => ({
  type: GET_AI_GROUP_METRICS,
  payload,
  callback,
});

export const setSelectedBrandId = (payload): SetSelectedBrandId => ({
  type: SET_SELECTED_BRAND_ID,
  payload,
});
export const setAllAIGroupsDetails = (payload): SetAllAIGroupsDetails => ({
  type: SET_ALL_AI_GROUPS_DETAILS,
  payload,
});
export const setAIGroupMetrics = (payload): SetAIGroupMetrics => ({
  type: SET_AI_GROUP_METRICS,
  payload,
});

export const postResultMetrics = (
  payload: { brandId: any },
  callback: Function
): PostResultMetrics => ({
  type: POST_RESULT_METRICS,
  payload,
  callback,
});
