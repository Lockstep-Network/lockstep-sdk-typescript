/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { CodeDefinitionModel } from "..";
import { FetchResult } from "..";

export class CodeDefinitionsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the CodeDefinition specified by this unique identifier, optionally including nested data sets.
   *
   * A CodeDefinition contains information around system code values and their definitions.
   *
   * @param id The unique Lockstep Platform ID number of this CodeDefinition
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   */
  retrieveCodeDefinition(id: string, include?: string): Promise<LockstepResponse<CodeDefinitionModel>> {
    const url = `/api/v1/CodeDefinitions/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<CodeDefinitionModel>("get", url, options, null);
  }

  /**
   * Queries CodeDefinitions for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A CodeDefinition contains information around system code values and their definitions.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryCodeDefinitions(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<CodeDefinitionModel>>> {
    const url = `/api/v1/CodeDefinitions/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<CodeDefinitionModel>>("get", url, options, null);
  }
}
