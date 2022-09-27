import HttpService from "../../../HttpService/httpService";
import {
  GetAllBrandDetails,
  GetBrandMetrics,
  GET_ALL_BRAND_DETAILS,
  GET_BRAND_METRICS,
} from "../../types/smb/brand";
import { call, takeLatest } from "redux-saga/effects";

function* getAllBrandDetails(action: GetAllBrandDetails): any {
  let {
    payload: { agencyId },
    callback,
  } = action;
  try {
    const urlParams = `https://core-performance-dev.pixis.ai/v4/api/agencies/${agencyId}/dashboard-summary`;
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

function* getBrandMetrics(action: GetBrandMetrics): any {
  let {
    payload: { brandId, selectedMonth, selectedYear },
    callback,
  } = action;
  try {
    const urlParams = `https://core-performance-dev.pixis.ai/v4/api/brands/${brandId}/dashboard/metrics-data?month=${selectedMonth}&year=${selectedYear}`;
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

export function* BrandsWatcher() {
  yield takeLatest(GET_ALL_BRAND_DETAILS, getAllBrandDetails);
  yield takeLatest(GET_BRAND_METRICS, getBrandMetrics);
}
