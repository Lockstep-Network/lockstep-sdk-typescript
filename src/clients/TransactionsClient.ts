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
import { TransactionModelTransactionSummaryTotalModelSummaryFetchResult } from "..";
import { TransactionDetailModel } from "..";

export class TransactionsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Queries transactions (invoices/credit memos/payments) for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param currentDate The date the days past due value will be calculated against. If no currentDate is provided the current UTC date will be used.
   */
  queryTransactions(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number, currentDate?: string): Promise<LockstepResponse<TransactionModelTransactionSummaryTotalModelSummaryFetchResult>> {
    const url = `/api/v1/Transactions/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
        currentDate,
      },
    };
    return this.client.request<TransactionModelTransactionSummaryTotalModelSummaryFetchResult>("get", url, options, null);
  }

  /**
   * Retrieves a list of transaction details for the supplied transaction id.
   *
   * A Transaction Detail contains information about the associated Transaction. This information can be an invoice associated to a payment or credit memo or a payment or credit memo used as payment for one or more invoices.
   *
   * @param id Documentation pending
   */
  retrieveTransactionDetails(id: string): Promise<LockstepResponse<TransactionDetailModel[]>> {
    const url = `/api/v1/Transactions/${id}/details`;
    return this.client.request<TransactionDetailModel[]>("get", url, null, null);
  }
}
