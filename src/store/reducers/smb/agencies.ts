import {
  AgenciesState,
  SetAgencies,
  SetSelectedAgencies,
  SET_AGENCIES,
  SET_SELECTED_AGENCIES,
} from "../../types/smb/agencies";

const initialAgencyState: AgenciesState = {
  data: [],
  selected: null,
};

const actions: any = {
  [SET_AGENCIES]: (state, payload) => ({
    ...state,
    data: payload,
  }),

  [SET_SELECTED_AGENCIES]: (state, payload) => ({
    ...state,
    selected: payload,
  }),
};

export default function agenciesReducer(
  state = initialAgencyState,
  action: SetAgencies | SetSelectedAgencies
) {
  return actions[action.type](state, action.payload);
}
