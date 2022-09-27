import { all } from "redux-saga/effects";
import { AgenciesWatcher } from "./smb/agencies";
import { BrandsWatcher } from "./smb/brand";
import { SelectedBrandWatcher } from "./smb/selectedBrand";

export function* rootSaga() {
  yield all([AgenciesWatcher(), BrandsWatcher(), SelectedBrandWatcher()]);
}
