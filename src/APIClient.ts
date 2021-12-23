/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */

import * as axios from "axios";
import { StatusClient } from "./clients/StatusClient";

export class LockstepApi {

  // The URL of the environment we will use
  private readonly serverUrl: string;
  private readonly version: string = "2021.39.690";
  private bearerToken: string | null = null;
  private apiKey: string | null = null;

  public readonly Status: StatusClient;

  /** 
   * Internal constructor for the Lockstep API client
   */
  private constructor(customUrl: string) {
    this.serverUrl = customUrl;
    this.Status = new StatusClient(this);
  }

  /**
   * Construct a new Lockstep API client to target the specific environment.
   * 
   * @param env The environment to use, either "prd" for production or "sbx" for sandbox.
   * @returns The Lockstep API client to use
   */
  public static withEnvironment(env: "prd" | "sbx"): LockstepApi
  {
    var url = "https://api.lockstep.io";
    switch (env) {
      case "prd": url = "https://api.lockstep.io"; break;
      case "sbx": url = "https://api.sbx.lockstep.io"; break;
    }
    return new LockstepApi(url);
  }

  /**
   * Construct an unsafe client that uses a non-standard server; this can be necessary
   * when using proxy servers or an API gateway.  Please be careful when using this
   * mode.  You should prefer to use `withEnvironment()` instead wherever possible.
   * 
   * @param unsafeUrl The non-Lockstep URL to use for this client
   * @returns The Lockstep API client to use
   */
  public static withCustomEnvironment(unsafeUrl: string): LockstepApi
  {
    return new LockstepApi(unsafeUrl);
  }

  /**
   * Configure this Lockstep API client to use a JWT bearer token.
   * More documentation is available on [JWT Bearer Tokens](https://developer.lockstep.io/docs/jwt-bearer-tokens).
   * 
   * @param token The JWT bearer token to use for this API session
   */
  public withBearerToken(token: string): LockstepApi {
    this.bearerToken = token;
    this.apiKey = null;
    return this;
  }

  /**
   * Configures this Lockstep API client to use an API Key.
   * More documentation is available on [API Keys](https://developer.lockstep.io/docs/api-keys).
   * 
   * @param apiKey The API key to use for this API session
   */
  public withApiKey(apiKey: string): LockstepApi {
    this.apiKey = apiKey;
    this.bearerToken = null;
    return this;
  }

  /**
   * Make a GET request using this client
   */
  public async get<T>(path: string, options: any): Promise<T | ErrorResult>
  {
    const requestConfig = {
      url: new URL(this.serverUrl, path).href,
      method: 'get' as axios.Method,
      params: options,
    };
    var result = await axios.default.request(requestConfig);
    if (result.status >= 200 && result.status < 300) {
      return result.data as T;
    } else {
      return result.data as ErrorResult;
    }
  }

  /**
   * Make a POST request using this client
   */
   public async post<T>(path: string, options: any, body: any): Promise<T | ErrorResult>
  {
    const requestConfig = {
      url: new URL(this.serverUrl, path).href,
      method: 'post' as axios.Method,
      params: options,
      data: body,
    };
    var result = await axios.default.request(requestConfig);
    if (result.status >= 200 && result.status < 300) {
      return result.data as T;
    } else {
      return result.data as ErrorResult;
    }
  }

  /**
   * Make a PUT request using this client
   */
   public async put<T>(path: string, options: any, body: any): Promise<T | ErrorResult>
  {
    const requestConfig = {
      url: new URL(this.serverUrl, path).href,
      method: 'put' as axios.Method,
      params: options,
      data: body,
    };
    var result = await axios.default.request(requestConfig);
    if (result.status >= 200 && result.status < 300) {
      return result.data as T;
    } else {
      return result.data as ErrorResult;
    }
  }

  /**
   * Make a PATCH request using this client
   */
   public async patch<T>(path: string, options: any, body: any): Promise<T | ErrorResult>
  {
    const requestConfig = {
      url: new URL(this.serverUrl, path).href,
      method: 'patch' as axios.Method,
      params: options,
      data: body,
    };
    var result = await axios.default.request(requestConfig);
    if (result.status >= 200 && result.status < 300) {
      return result.data as T;
    } else {
      return result.data as ErrorResult;
    }
  }

  /**
   * Make a DELETE request using this client
   */
   public async delete<T>(path: string, options: any): Promise<T | ErrorResult>
  {
    const requestConfig = {
      url: new URL(this.serverUrl, path).href,
      method: 'delete' as axios.Method,
      params: options
    };
    var result = await axios.default.request(requestConfig);
    if (result.status >= 200 && result.status < 300) {
      return result.data as T;
    } else {
      return result.data as ErrorResult;
    }
  }
}

