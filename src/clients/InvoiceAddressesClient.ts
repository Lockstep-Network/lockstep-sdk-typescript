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
import { InvoiceAddressModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class InvoiceAddressesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the invoice address specified by this unique identifier, optionally including nested data sets.
   *
   * An Invoice Address contains address information about an invoice. You can use Invoice Addresses to track information about locations important to an invoice such as: where a company's goods are shipped from, where a company's goods are shipped to or billing addresses to name a few.
   *
   * @param id The unique ID number of this invoice address
   * @param include To fetch additional data on this object, specify the list of elements to retrieve.
   */
  retrieveInvoiceAddress(id: string, include?: string): Promise<LockstepResponse<InvoiceAddressModel>> {
    const url = `/api/v1/invoice-addresses/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<InvoiceAddressModel>("get", url, options, null);
  }

  /**
   * Deletes the Invoice Address by this unique identifier.
   *
   * An Invoice Address contains address information about an invoice. You can use Invoice Addresses to track information about locations important to an invoice such as: where a company's goods are shipped from, where a company's goods are shipped to or billing addresses to name a few.
   *
   * @param id The unique ID of the Invoice Address to delete
   */
  deleteInvoiceAddress(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/invoice-addresses/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Updates an existing Invoice Address with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone. As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged. This allows you to ensure that you are only updating the specific fields desired.
   *
   * An Invoice Address contains address information about an invoice. You can use Invoice Addresses to track information about locations important to an invoice such as: where a company's goods are shipped from, where a company's goods are shipped to or billing addresses to name a few.
   *
   * @param id The unique ID number of the Invoice Address to update
   * @param body A list of changes to apply to this Invoice Address
   */
  updateInvoiceAddress(id: string, body: object): Promise<LockstepResponse<InvoiceAddressModel>> {
    const url = `/api/v1/invoice-addresses/${id}`;
    return this.client.request<InvoiceAddressModel>("patch", url, null, body);
  }

  /**
   * Creates one or more Invoice Addresses within this account and returns the records as created.
   *
   * An Invoice Address contains address information about an invoice. You can use Invoice Addresses to track information about locations important to an invoice such as: where a company's goods are shipped from, where a company's goods are shipped to or billing addresses to name a few.
   *
   * @param body The Invoice Address to create
   */
  createInvoiceAddress(body: InvoiceAddressModel[]): Promise<LockstepResponse<InvoiceAddressModel[]>> {
    const url = `/api/v1/invoice-addresses`;
    return this.client.request<InvoiceAddressModel[]>("post", url, null, body);
  }

  /**
   * Queries Invoice Addresses for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryInvoiceAddresses(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<InvoiceAddressModel>>> {
    const url = `/api/v1/invoice-addresses/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<InvoiceAddressModel>>("get", url, options, null);
  }
}
