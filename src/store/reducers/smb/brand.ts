import {
  BrandState,
  BrandTypes,
  SetAllBrandDetails,
  SetAllBrandTypes,
  SetBrandMetrics,
  SET_ALL_BRAND_DETAILS,
  SET_ALL_BRAND_TYPES,
  SET_BRAND_METRICS,
} from "../../types/smb/brand";

const initialBrandState: BrandState = {
  data: [],
  types: {
    good: [],
    alarming: [],
    escalation: [],
    inline: [],
  },
};

const actions: any = {
  [SET_ALL_BRAND_DETAILS]: (state, payload) => ({
    ...state,
    data: payload,
  }),

  [SET_BRAND_METRICS]: (state, payload) => ({
    ...state,
    data: {
      ...state.data,
      [payload.brandId]: {
        ...state[payload.brandId],
        metrics: payload.metrics,
      },
    },
  }),

  [SET_ALL_BRAND_TYPES]: (state, payload) => ({
    ...state,
    types: payload,
  }),
};
export default function brandReducer(
  state = initialBrandState,
  action: SetAllBrandDetails | SetBrandMetrics | SetAllBrandTypes
) {
  return actions[action.type](state, action.payload);
}
