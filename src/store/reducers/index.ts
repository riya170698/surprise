import { combineReducers } from "redux";
import agenciesReducer from "./smb/agencies";
import brandReducer from "./smb/brand";
import commonReducer from "./smb/common";
import selectedBrandReducer from "./smb/selectedBrand";

const rootReducer = combineReducers({
  agenciesReducer,
  brandReducer,
  commonReducer,
  selectedBrandReducer,
});

export default rootReducer;
