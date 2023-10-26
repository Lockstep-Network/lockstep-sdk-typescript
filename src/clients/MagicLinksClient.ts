/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2023 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io>
 * @copyright  2021-2023 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { MagicLinkModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";
import { MagicLinkSummaryModel } from "..";

export class MagicLinksClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Magic Link specified by this unique identifier, optionally including nested data sets.
   *
   * @param id The id of the Magic Link
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: User
   */
  retrieveMagicLink(id: string, include?: string): Promise<LockstepResponse<MagicLinkModel>> {
    const url = `/api/v1/useraccounts/magic-links/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<MagicLinkModel>("get", url, options, null);
  }

  /**
   * Revokes the magic link with the specified id so it cannot be used to call the API.
   *
   * Revocation will be received by all servers within five minutes of revocation. API calls made using this magic link after the revocation will fail. A revoked magic link cannot be un-revoked.
   *
   * @param id The unique Lockstep Platform ID number of this magic link
   */
  revokeMagicLink(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/useraccounts/magic-links/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Revokes the bounced magic link with the specified id so it cannot be used to call the API.
   *
   * Revocation will be received by all servers within five minutes of revocation. API calls made using this magic link after the revocation will fail. A revoked magic link cannot be un-revoked.
   *
   * @param id The unique Lockstep Platform ID number of this magic link
   */
  revokeBouncedMagicLink(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/useraccounts/magic-links/${id}/bounced`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Queries Magic Links for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: User
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 250, maximum of 500)
   * @param pageNumber The page number for results (default 0)
   */
  queryMagicLinks(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<MagicLinkModel>>> {
    const url = `/api/v1/useraccounts/magic-links/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<MagicLinkModel>>("get", url, options, null);
  }

  /**
   * Gets a summary of all magic links created during the specified date range, returns no content if there are no magic links for the specified date range
   *
   * @param from The date that the summary starts from (default one year ago from today)
   * @param to The date that the summary ends at (default today)
   */
  magicLinkSummary(from?: string, to?: string): Promise<LockstepResponse<MagicLinkSummaryModel>> {
    const url = `/api/v1/useraccounts/magic-links/summary`;
    const options = {
      params: {
        from,
        to,
      },
    };
    return this.client.request<MagicLinkSummaryModel>("get", url, options, null);
  }
}
