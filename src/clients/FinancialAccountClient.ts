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
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { FinancialAccountModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class FinancialAccountClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Creates a financial account with the specified name.
   *
   * @param body Metadata about the financial account to create.
   */
  createFinancialAccount(body: FinancialAccountModel[]): Promise<LockstepResponse<FinancialAccountModel>> {
    const url = `/api/v1/FinancialAccount`;
    return this.client.request<FinancialAccountModel>("post", url, null, body);
  }

  /**
   * Retrieves the financial account specified by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of this Account; NOT the customer's ERP key
   */
  retrieveFinancialAccount(id: string): Promise<LockstepResponse<FinancialAccountModel>> {
    const url = `/api/v1/FinancialAccount/${id}`;
    return this.client.request<FinancialAccountModel>("get", url, null, null);
  }

  /**
   *
   * @param id The unique Lockstep Platform ID number of the Account to update; NOT the customer's ERP key
   * @param body A list of changes to apply to this Account
   */
  updateFinancialAccount(id: string, body: object): Promise<LockstepResponse<FinancialAccountModel>> {
    const url = `/api/v1/FinancialAccount/${id}`;
    return this.client.request<FinancialAccountModel>("patch", url, null, body);
  }

  /**
   * Deletes the Financial Account referred to by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of the Financial Account to disable; NOT the customer's ERP key
   */
  deletesFinancialAccount(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/FinancialAccount/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve.
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryFinancialAccounts(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<FinancialAccountModel>>> {
    const url = `/api/v1/FinancialAccount/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<FinancialAccountModel>>("get", url, options, null);
  }
}
