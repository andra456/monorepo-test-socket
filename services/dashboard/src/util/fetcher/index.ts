import { handleErrors, _checkStatus } from "../errorhandling";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

function filtered(obj: any) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
      delete obj[propName];
    }
  }
  return obj;
}

export const fetcher = async (url: string, config?: AxiosRequestConfig) => {
  let requestConfig: object = {
    ...config,
    ...(config?.params ? { params: filtered(config.params) } : {}),
    url,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    let { data } = await axios.request(requestConfig);
    return data;
  } catch (error) {
    throw (error as AxiosError).response;
  }
};
