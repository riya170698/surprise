import { AxiosRequestConfig } from "axios";
import axios from "../utils/axios";

const httpService = {
  get: (
    baseUrl: string,
    api: string,
    user?: any,
    responseType?: any,
    params?: any
  ) =>
    axios.get(baseUrl + api, {
      auth: user,
      responseType: responseType,
      params,
    }),
  post: (
    baseUrl: string,
    api: string,
    user: any,
    data: any,
    token?: string | undefined,
    config?: AxiosRequestConfig,
    canceltoken?: any
  ) =>
    axios.post(baseUrl + api, data, {
      auth: user,
      ...config,
      cancelToken: canceltoken,
    }),
  delete: (baseUrl: string, api: string, user: any, data?: any) =>
    axios.delete(baseUrl + api, { auth: user, data }),
  put: (
    baseUrl: string,
    api: string,
    user: any,
    data: any,
    canceltoken?: any
  ) =>
    axios.put(baseUrl + api, data, {
      headers: {},
      auth: user,
      cancelToken: canceltoken,
    }),
  patch: (baseUrl: string, api: string, token: string | undefined, data: any) =>
    axios.patch(baseUrl + api, data, { headers: { token } }),
};

export default httpService;
