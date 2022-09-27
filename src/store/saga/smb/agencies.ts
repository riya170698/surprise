import { GetAgencies, GET_AGENCIES } from "../../types/smb/agencies";
import { call, takeLatest } from "redux-saga/effects";
import HttpService from "../../../HttpService/httpService";

function* getAgencies(action: GetAgencies): any {
  let { payload: user, callback } = action;
  try {
    const urlParams = `https://core-performance-dev.pixis.ai/v4/api/agencies?smb=true`;
    const response = yield call(
      HttpService.get,
      CROSS_PLATFORM_URL,
      urlParams,
      user
    );
    if (!response.data.error) {
      callback && callback(response.data, false);
    } else {
      callback && callback(response, true);
    }
  } catch (error: any) {
    console.log("function*getAllAgencies ~ error", error);
    callback && callback(error.response, true);
  }
}

export function* AgenciesWatcher() {
  yield takeLatest(GET_AGENCIES, getAgencies);
}
