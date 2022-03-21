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
import { FinancialAccountBalanceHistoryModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class FinancialAccountBalanceHistoryClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Financial Account Balance History specified by this unique identifier.
   *
   * A Financial Account Balance History records either the current or end of period balance for a corresponding financial account.
   *
   * @param id The unique Lockstep Platform ID number of this Financial Account Balance History
   */
  retrieveBalanceHistory(id: string): Promise<LockstepResponse<FinancialAccountBalanceHistoryModel>> {
    const url = `/api/v1/FinancialAccountBalanceHistory/${id}`;
    return this.client.request<FinancialAccountBalanceHistoryModel>("get", url, null, null);
  }

  /**
   * Updates a Financial Account Balance History that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Financial Account Balance History records either the current or end of period balance for a corresponding financial account.
   *
   * @param id The unique Lockstep Platform ID number of the Financial Account Balance History to update
   * @param body A list of changes to apply to this Financial Account Balance History
   */
  updateBalanceHistory(id: string, body: object): Promise<LockstepResponse<FinancialAccountBalanceHistoryModel>> {
    const url = `/api/v1/FinancialAccountBalanceHistory/${id}`;
    return this.client.request<FinancialAccountBalanceHistoryModel>("patch", url, null, body);
  }

  /**
   * Delete the Financial Account Balance History referred to by this unique identifier.
   *
   * A Financial Account Balance History records either the current or end of period balance for a corresponding financial account.
   *
   * @param id The unique Lockstep Platform ID number of the Financial Account Balance History to disable
   */
  deleteBalanceHistory(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/FinancialAccountBalanceHistory/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates a Financial Account Balance History from a given model.
   *
   * A Financial Account Balance History records either the current or end of period balance for a corresponding financial account.
   *
   * @param body The Financial Account Balance Histories to create
   */
  createBalanceHistory(body: FinancialAccountBalanceHistoryModel[]): Promise<LockstepResponse<FinancialAccountBalanceHistoryModel[]>> {
    const url = `/api/v1/FinancialAccountBalanceHistory`;
    return this.client.request<FinancialAccountBalanceHistoryModel[]>("post", url, null, body);
  }

  /**
   * Queries Financial Account Balance History for this account using the specified filtering, sorting, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Financial Account Balance History records either the current or end of period balance for a corresponding financial account.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryBalanceHistory(filter?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<FinancialAccountBalanceHistoryModel>>> {
    const url = `/api/v1/FinancialAccountBalanceHistory/query`;
    const options = {
      params: {
        filter,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<FinancialAccountBalanceHistoryModel>>("get", url, options, null);
  }
}
