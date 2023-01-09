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
import { InvoiceLineModel } from "..";
import { DeleteResult } from "..";
import { BulkDeleteRequestModel } from "..";
import { FetchResult } from "..";

export class InvoiceLinesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Creates one or more invoice lines within this account and returns the created records
   *
   * @param body Documentation pending
   */
  createInvoiceLine(body: InvoiceLineModel[]): Promise<LockstepResponse<InvoiceLineModel[]>> {
    const url = `/api/v1/invoice-lines`;
    return this.client.request<InvoiceLineModel[]>("post", url, null, body);
  }

  /**
   *
   * @param body The unique Lockstep Platform ID numbers of the Invoice Lines to delete; NOT the customer's ERP keys
   */
  deleteInvoiceLines(body: BulkDeleteRequestModel): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/invoice-lines`;
    return this.client.request<DeleteResult>("delete", url, null, body);
  }

  /**
   *
   * @param invoiceLineId Unique id of the the InvoiceLine
   */
  retrievesInvoiceLine(invoiceLineId: string): Promise<LockstepResponse<InvoiceLineModel>> {
    const url = `/api/v1/invoice-lines/${invoiceLineId}`;
    return this.client.request<InvoiceLineModel>("get", url, null, null);
  }

  /**
   * Updates an existing Invoice Line with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone. As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged. This allows you to ensure that you are only updating the specific fields desired.
   *
   * @param invoiceLineId Unique id of the the InvoiceLine
   * @param body A list of changes to apply to this Invoice Line
   */
  updateInvoiceLine(invoiceLineId: string, body: object): Promise<LockstepResponse<InvoiceLineModel>> {
    const url = `/api/v1/invoice-lines/${invoiceLineId}`;
    return this.client.request<InvoiceLineModel>("patch", url, null, body);
  }

  /**
   *
   * @param invoiceLineId Unique id of the the InvoiceLine
   */
  deletesInvoiceLine(invoiceLineId: string): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/invoice-lines/${invoiceLineId}`;
    return this.client.request<DeleteResult>("delete", url, null, null);
  }

  /**
   * Queries Invoice Lines for the account using specified filtering More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve.
   * @param order The sort order for the results, in the [Searchlight order syntax]
   * @param pageSize The page size for results (default 200, maximum of 10,000)
   * @param pageNumber The page number for results (default 0)
   */
  queryInvoiceLines(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<InvoiceLineModel>>> {
    const url = `/api/v1/invoice-lines/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<InvoiceLineModel>>("get", url, options, null);
  }
}
