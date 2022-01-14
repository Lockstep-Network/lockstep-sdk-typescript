/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.2
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { ApiKeyModel } from "../models/DataModels.js";
import { FetchResult } from "../models/FetchResult.js";

export class ApiKeysClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the API Key with this identifier.
   *
   * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
   *
   * @param id The unique ID number of the API Key to retrieve
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future.
   */
  retrieveAPIKey(id: string, include: string): Promise<LockstepResponse<ApiKeyModel>> {
    const url = `/api/v1/ApiKeys/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<ApiKeyModel>('get', url, options, null);
  }

  /**
   * Immediately revokes the API Key with the specified id so it cannot be used to call the API.  The Lockstep Platform guarantees that revocation will be received by all servers within five minutes of revocation.  API calls made using this API key after the revocation will fail.  A revoked API Key  cannot be un-revoked and may be removed 60 days after revocation.
   *
   * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
   *
   * @param id The unique Lockstep Platform ID number of this API Key
   */
  revokeAPIKey(id: string): Promise<LockstepResponse<ApiKeyModel>> {
    const url = `/api/v1/ApiKeys/${id}`;
    return this.client.request<ApiKeyModel>('delete', url, null, null);
  }

  /**
   * Creates an API key with the specified name.
   *
   * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
   *
   * @param body Metadata about the API Key to create.
   */
  createAPIKey(body: ApiKeyModel): Promise<LockstepResponse<ApiKeyModel>> {
    const url = `/api/v1/ApiKeys`;
    return this.client.request<ApiKeyModel>('post', url, null, body);
  }

  /**
   * Queries API Keys for this user using the specified filtering, sorting, nested fetch, and pagination rules requested.  An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future.
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryAPIKeys(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<ApiKeyModel>>> {
    const url = `/api/v1/ApiKeys/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<ApiKeyModel>>('get', url, options, null);
  }
}
