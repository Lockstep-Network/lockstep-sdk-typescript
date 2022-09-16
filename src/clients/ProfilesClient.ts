/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { PublicCompanyProfileModel } from "..";
import { FetchResult } from "..";

export class ProfilesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Public Company Profile specified by the public url slug.
   *
   * A Public Company Profile makes available the following information: <ul><li>Company Name</li><li>Company Logo Url</li><li>Description</li><li>Website</li></ul>
   *
   * @param urlSlug Documentation pending
   */
  retrievePublicCompanyProfile(urlSlug: string): Promise<LockstepResponse<PublicCompanyProfileModel>> {
    const url = `/api/v1/Profiles/companies/${urlSlug}`;
    return this.client.request<PublicCompanyProfileModel>("get", url, null, null);
  }

  /**
   * Queries Public Company Profiles
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Public Company Profile makes available the following information:
   *
   * <ul><li>Company Name</li><li>Company Logo Url</li><li>Description</li><li>Website</li></ul>
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 200, maximum of 10,000)
   * @param pageNumber The page number for results (default 0)
   */
  queryPublicCompanyProfiles(filter?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<PublicCompanyProfileModel>>> {
    const url = `/api/v1/Profiles/companies/query`;
    const options = {
      params: {
        filter,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<PublicCompanyProfileModel>>("get", url, options, null);
  }
}
