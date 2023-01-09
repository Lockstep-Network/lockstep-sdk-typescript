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
import { CreditMemoAppliedModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class CreditMemosAppliedClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Credit Memo Applied specified by this unique identifier, optionally including nested data sets.
   *
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Applied record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Applied records to track which Invoices were paid using this Credit.
   *
   * @param id The unique Lockstep Platform ID number of this Credit Memo Applied; NOT the customer's ERP key
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes, Invoice, CreditMemoInvoice
   */
  retrieveCreditMemoApplied(id: string, include?: string): Promise<LockstepResponse<CreditMemoAppliedModel>> {
    const url = `/api/v1/credit-memos-applied/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<CreditMemoAppliedModel>("get", url, options, null);
  }

  /**
   * Updates an existing Credit Memo Applied with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Applied record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Applied records to track which Invoices were paid using this Credit.
   *
   * @param id The unique Lockstep Platform ID number of the Credit Memo Applied to update; NOT the customer's ERP key
   * @param body A list of changes to apply to this Credit Memo Applied
   */
  updateCreditMemosApplied(id: string, body: object): Promise<LockstepResponse<CreditMemoAppliedModel>> {
    const url = `/api/v1/credit-memos-applied/${id}`;
    return this.client.request<CreditMemoAppliedModel>("patch", url, null, body);
  }

  /**
   * Deletes the Credit Memo Applied referred to by this unique identifier.
   *
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Applied record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Applied records to track which Invoices were paid using this Credit.
   *
   * @param id The unique Lockstep Platform ID number of the Credit Memo Applied to delete; NOT the customer's ERP key
   */
  deleteCreditMemoApplied(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/credit-memos-applied/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more Credit Memos Applied within this account and returns the records as created.
   *
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Applied record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Applied records to track which Invoices were paid using this Credit.
   *
   * @param body The Credit Memos Applied to create
   */
  createCreditMemosApplied(body: CreditMemoAppliedModel[]): Promise<LockstepResponse<CreditMemoAppliedModel[]>> {
    const url = `/api/v1/credit-memos-applied`;
    return this.client.request<CreditMemoAppliedModel[]>("post", url, null, body);
  }

  /**
   * Queries Credit Memos Applied for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Applied record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Applied records to track which Invoices were paid using this Credit.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryCreditMemosApplied(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<CreditMemoAppliedModel>>> {
    const url = `/api/v1/credit-memos-applied/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<CreditMemoAppliedModel>>("get", url, options, null);
  }
}
