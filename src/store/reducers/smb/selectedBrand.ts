import {
  SelectedBrandState,
  SetAIGroupMetrics,
  SetAllAIGroupsDetails,
  SetSelectedBrandId,
  SET_AI_GROUP_METRICS,
  SET_ALL_AI_GROUPS_DETAILS,
  SET_SELECTED_BRAND_ID,
} from "../../types/smb/selectedBrand";

const initialSelectedBrandState: SelectedBrandState = {
  id: "",
  aiGroups: {},
};

const actions: any = {
  [SET_ALL_AI_GROUPS_DETAILS]: (state, payload) => ({
    ...state,
    aiGroups: payload,
  }),

  [SET_AI_GROUP_METRICS]: (state, payload) => ({
    ...state,
    aiGroups: {
      ...state.aiGroups,
      [payload.aiGroupId]: {
        ...state[payload.aiGroupId],
        metrics: payload.metrics,
      },
    },
  }),

  [SET_SELECTED_BRAND_ID]: (state, payload) => ({
    ...state,
    id: payload,
  }),
};

export default function selectedBrandReducer(
  state = initialSelectedBrandState,
  action: SetAllAIGroupsDetails | SetAIGroupMetrics | SetSelectedBrandId
) {
  return actions[action.type](state, action.payload);
}
