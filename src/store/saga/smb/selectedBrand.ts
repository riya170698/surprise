import {
  GetAIGroupMetrics,
  GetAllAiGroupsDetails,
  GET_AI_GROUP_METRICS,
  GET_ALL_AI_GROUPS_DETAILS,
  PostResultMetrics,
  POST_RESULT_METRICS,
} from "../../types/smb/selectedBrand";
import { call, takeLatest } from "redux-saga/effects";
import HttpService from "../../../HttpService/httpService";

function* getAllAiGroupsDetails(action: GetAllAiGroupsDetails): any {
  let {
    payload: { brandId },
    callback,
  } = action;
  try {
    const urlParams = `https://core-performance-dev.pixis.ai/v4/api/brands/${brandId}/dashboard-summary`;
    const response = yield call(HttpService.get, CROSS_PLATFORM_URL, urlParams);
    if (!response.data.error) {
      callback && callback(response.data, false);
    } else {
      callback && callback(response, true);
    }
  } catch (error: any) {
    callback && callback(error.response, true);
  }
}

function* getAIGroupMetrics(action: GetAIGroupMetrics): any {
  let {
    payload: { brandId, selectedMonth, selectedYear, aiGroupId },
    callback,
  } = action;
  try {
    const urlParams = `https://core-performance-dev.pixis.ai/v4/api/brands/${brandId}/optimizers/${aiGroupId}/dashboard/metrics-data?month=${selectedMonth}&year=${selectedYear}`;
    const response = yield call(HttpService.get, CROSS_PLATFORM_URL, urlParams);
    if (!response.data.error) {
      callback && callback(response.data, false);
    } else {
      callback && callback(response, true);
    }
  } catch (error: any) {
    callback && callback(error.response, true);
  }
}

function* postResultMetrics(action: PostResultMetrics): any {
  let {
    payload: { brandId },
    callback,
  } = action;
  try {
    const urlParams = `https://core-performance-dev.pixis.ai/v4/api/brands/${brandId}/dashboard/result-metrics`;
    const response = yield call(
      HttpService.post,
      CROSS_PLATFORM_URL,
      urlParams
    );
    if (response.data.code === "101") {
      return;
    }
    if (!response.data.error) {
      callback && callback(response.data, false);
    } else {
      callback && callback(response, true);
    }
  } catch (error: any) {
    console.log("function*postResultMetrics ~ error", error);
    callback && callback(error.response, true);
  }
}

export function* SelectedBrandWatcher() {
  yield takeLatest(GET_ALL_AI_GROUPS_DETAILS, getAllAiGroupsDetails);
  yield takeLatest(GET_AI_GROUP_METRICS, getAIGroupMetrics);
  yield takeLatest(POST_RESULT_METRICS, postResultMetrics);
}
