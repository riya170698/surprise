// {
//     agencies:{
//       getAgencies
//       setAgencies { agencies }
//       setSelectedAgency { agencyId }
//     }
import {
  GET_AGENCIES,
  GetAgencies,
  SET_AGENCIES,
  SetAgencies,
  SET_SELECTED_AGENCIES,
  SetSelectedAgencies,
} from "../../types/smb/agencies";

export const getAgencies = (payload: any, callback: Function): GetAgencies => ({
  type: GET_AGENCIES,
  payload,
  callback,
});

export const setAgencies = (payload): SetAgencies => ({
  type: SET_AGENCIES,
  payload,
});

export const setSelectedAgencies = (payload): SetSelectedAgencies => ({
  type: SET_SELECTED_AGENCIES,
  payload,
});
