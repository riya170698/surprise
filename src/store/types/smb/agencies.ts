export const GET_AGENCIES = "GET_AGENCIES";
export const SET_AGENCIES = "SET_AGENCIES";
export const SET_SELECTED_AGENCIES = "SET_SELECTED_AGENCIES";

export type Agency = any;

export type AgenciesId = string;

export type GetAgencies = {
  type: typeof GET_AGENCIES;
  payload: {
    user: any;
  };
  callback: Function;
};

export type SetAgencies = {
  type: typeof SET_AGENCIES;
  payload: Agency[];
};

export type SetSelectedAgencies = {
  type: typeof SET_SELECTED_AGENCIES;
  payload: AgenciesId;
};

export type AgenciesState = {
  data: Agency[];
  selected: Agency | null;
};
