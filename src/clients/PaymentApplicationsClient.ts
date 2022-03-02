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
import { PaymentAppliedModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class PaymentApplicationsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Payment Application specified by this unique identifier, optionally including nested data sets.
   *
   * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
   *
   * @param id The unique Lockstep Platform ID number of this Payment Application; NOT the customer's ERP key
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Invoice
   */
  retrievePaymentApplication(id: string, include?: string): Promise<LockstepResponse<PaymentAppliedModel>> {
    const url = `/api/v1/PaymentApplications/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<PaymentAppliedModel>("get", url, options, null);
  }

  /**
   * Updates an existing Payment Application with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
   *
   * @param id The unique Lockstep Platform ID number of the Payment Application to update; NOT the customer's ERP key
   * @param body A list of changes to apply to this Payment Application
   */
  updatePaymentApplication(id: string, body: object): Promise<LockstepResponse<PaymentAppliedModel>> {
    const url = `/api/v1/PaymentApplications/${id}`;
    return this.client.request<PaymentAppliedModel>("patch", url, null, body);
  }

  /**
   * Deletes the Payment Application referred to by this unique identifier.
   *
   * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
   *
   * @param id The unique Lockstep Platform ID number of the Payment Application to delete; NOT the customer's ERP key
   */
  deletePaymentApplication(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/PaymentApplications/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more Payment Applications within this account and returns the records as created.
   *
   * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
   *
   * @param body The Payment Applications to create
   */
  createPaymentApplications(body: PaymentAppliedModel[]): Promise<LockstepResponse<PaymentAppliedModel[]>> {
    const url = `/api/v1/PaymentApplications`;
    return this.client.request<PaymentAppliedModel[]>("post", url, null, body);
  }

  /**
   * Queries Payment Applications for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Invoice
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryPaymentApplications(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<PaymentAppliedModel>>> {
    const url = `/api/v1/PaymentApplications/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<PaymentAppliedModel>>("get", url, options, null);
  }
}
