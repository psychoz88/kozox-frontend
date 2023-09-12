import {AxiosResponse} from 'axios';

import {serverAgent} from 'store/config';
import {OFFERS} from './config.service';
import {objectToQueryString} from 'utils/queryUtils';

export enum ApiType {
  Offers,
}

export const createBaseUrl = (type: ApiType, url: string): string => {
  let baseURL: string;
  const Offers: string = OFFERS();

  switch (type) {
    case ApiType.Offers:
      baseURL = `${Offers}`;
      break;
  }
  return baseURL + url;
};

export const getRequest = async (
  type: ApiType,
  url: string,
  params?: any,
): Promise<any> => {
  try {
    let allUrl = createBaseUrl(type, url);
    if (params !== undefined) {
      allUrl += '?' + objectToQueryString(params);
    }
    const response: AxiosResponse<any> = await serverAgent.get(allUrl);
    return await response.data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
};

const request = async (
  type: ApiType,
  url: string,
  params?: any,
): Promise<any> => {
  const baseURL = createBaseUrl(type, url);
  try {
    const isFormData = params instanceof FormData;
    const data: FormData | string = isFormData
      ? params
      : JSON.stringify(params);
    const headers = {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    };

    const response: AxiosResponse<any> = await serverAgent.post(baseURL, data, {
      headers,
    });
    return await response.data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

const requestPut = async (
  type: ApiType,
  url: string,
  params?: any,
): Promise<any> => {
  const baseURL = createBaseUrl(type, url);
  try {
    const data: FormData | string =
      params instanceof FormData ? params : JSON.stringify(params);
    const headers = {
      'Content-Type': 'application/json',
    };

    const response: AxiosResponse<any> = await serverAgent.put(baseURL, data, {
      headers,
    });
    return await response.data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

const requestPatch = async (
  type: ApiType,
  url: string,
  params?: any,
): Promise<any> => {
  const baseURL = createBaseUrl(type, url);
  try {
    const data: FormData | string =
      params instanceof FormData ? params : JSON.stringify(params);
    const headers = {
      'Content-Type': 'application/json',
    };

    const response: AxiosResponse<any> = await serverAgent.patch(
      baseURL,
      data,
      {
        headers,
      },
    );
    return await response.data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

const requestDelete = async (
  type: ApiType,
  url: string,
  params?: any,
): Promise<any> => {
  const baseURL = createBaseUrl(type, url);
  try {
    const data: FormData | string =
      params instanceof FormData ? params : JSON.stringify(params);

    const headers = {
      'Content-Type': 'application/json',
    };

    const response: AxiosResponse<any> = await serverAgent.delete(baseURL, {
      headers,
      data,
    });
    return await response.data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};

export interface IApi {
  get: (type: ApiType, url: string, params?: any) => Promise<any>;
  add: (type: ApiType, url: string, params: any) => Promise<any>;
  update: (type: ApiType, url: string, params?: any) => Promise<any>;
  patch: (type: ApiType, url: string, params?: any) => Promise<any>;
  remove: (type: ApiType, url: string, params?: any) => Promise<any>;
  delete: (type: ApiType, url: string, params?: any) => Promise<any>;
}

// INTERFACE WITH MAIN CRUD OPERATION METHODS
const api: IApi = {
  get: (type: ApiType, url: string, params?: any) =>
    getRequest(type, url, params),
  add: (type: ApiType, url: string, params: any) => request(type, url, params),
  update: (type: ApiType, url: string, params?: any) =>
    requestPut(type, url, params),
  patch: (type: ApiType, url: string, params?: any) =>
    requestPatch(type, url, params),
  remove: (type: ApiType, url: string, params?: any) =>
    request(type, url, params),
  delete: (type: ApiType, url: string, params?: any) =>
    requestDelete(type, url, params),
};

export default api;
