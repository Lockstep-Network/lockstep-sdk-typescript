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
import { FinancialInstitutionAccountModel } from "..";
import { FetchResult } from "..";

export class FinancialInstitutionAccountsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the financial institution account specified by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of this institution account; NOT the customer's ERP key
   */
  retrieveFinancialInstitutionAccounts(id: string): Promise<LockstepResponse<FinancialInstitutionAccountModel>> {
    const url = `/api/v1/financial-institution-accounts/${id}`;
    return this.client.request<FinancialInstitutionAccountModel>("get", url, null, null);
  }

  /**
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future.
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryFinancialInstitutionAccounts(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<FinancialInstitutionAccountModel>>> {
    const url = `/api/v1/financial-institution-accounts/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<FinancialInstitutionAccountModel>>("get", url, options, null);
  }
}
