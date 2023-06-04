/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { SiteStatsVo } from "../models";
/**
 * ApiHaloRunV1alpha1StatsApi - axios parameter creator
 * @export
 */
export const ApiHaloRunV1alpha1StatsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Gets site stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryStats: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.halo.run/v1alpha1/stats/-`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ApiHaloRunV1alpha1StatsApi - functional programming interface
 * @export
 */
export const ApiHaloRunV1alpha1StatsApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    ApiHaloRunV1alpha1StatsApiAxiosParamCreator(configuration);
  return {
    /**
     * Gets site stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async queryStats(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SiteStatsVo>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.queryStats(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * ApiHaloRunV1alpha1StatsApi - factory interface
 * @export
 */
export const ApiHaloRunV1alpha1StatsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ApiHaloRunV1alpha1StatsApiFp(configuration);
  return {
    /**
     * Gets site stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryStats(options?: AxiosRequestConfig): AxiosPromise<SiteStatsVo> {
      return localVarFp
        .queryStats(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ApiHaloRunV1alpha1StatsApi - object-oriented interface
 * @export
 * @class ApiHaloRunV1alpha1StatsApi
 * @extends {BaseAPI}
 */
export class ApiHaloRunV1alpha1StatsApi extends BaseAPI {
  /**
   * Gets site stats
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1StatsApi
   */
  public queryStats(options?: AxiosRequestConfig) {
    return ApiHaloRunV1alpha1StatsApiFp(this.configuration)
      .queryStats(options)
      .then((request) => request(this.axios, this.basePath));
  }
}