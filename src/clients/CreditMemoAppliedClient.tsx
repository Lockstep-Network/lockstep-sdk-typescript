/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */


import { LockstepApi } from "../APIClient";

export class CreditMemoAppliedClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }


  /**
   * Retrieves the Credit Memo Application specified by this unique identifier, optionally including nested data sets.
   * 
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
   * 
   * @param id - The unique Lockstep Platform ID number of this Credit Memo Application; NOT the customer's ERP key
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        Available collections: Attachments, CustomFields, Notes
   */
  retrieveCreditMemoApplication(id: string, include: string): Promise<CreditMemoAppliedModel | ErrorResult> {
    const url = `/api/v1/CreditMemoApplied/{id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.get<CreditMemoAppliedModel>(url, options, null);
  }

  /**
   * Updates an existing Credit memo Application with the information supplied to this PATCH call.
   * 
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
   * 
   * @param id - The unique Lockstep Platform ID number of the Credit Memo Application to update; NOT the customer's ERP key
   * @param body - A list of changes to apply to this Credit Memo Application
   */
  updateCreditMemoApplication(id: string, body: object): Promise<CreditMemoAppliedModel | ErrorResult> {
    const url = `/api/v1/CreditMemoApplied/{id}`;
    return this.client.patch<CreditMemoAppliedModel>(url, null, body);
  }

  /**
   * Deletes the Credit Memo Application referred to by this unique identifier.
   * 
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
   * 
   * @param id - The unique Lockstep Platform ID number of the Credit Memo Application to delete; NOT the customer's ERP key
   */
  deleteCreditMemoApplication(id: string): Promise<CreditMemoAppliedModel | ErrorResult> {
    const url = `/api/v1/CreditMemoApplied/{id}`;
    return this.client.delete<CreditMemoAppliedModel>(url, null, null);
  }

  /**
   * Creates one or more Credit Memo Applications within this account and returns the records as created.
   * 
   * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
   * 
   * @param body - The Credit Memo Applications to create
   */
  createCreditMemoApplications(body: object): Promise<CreditMemoAppliedModel[] | ErrorResult> {
    const url = `/api/v1/CreditMemoApplied`;
    return this.client.post<CreditMemoAppliedModel[]>(url, null, body);
  }

  /**
   * Queries Credit Memo Applications for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
   * 
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        Available collections: Attachments, CustomFields, Notes
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryCreditMemoApplications(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<CreditMemoAppliedModel> | ErrorResult> {
    const url = `/api/v1/CreditMemoApplied/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.get<FetchResult<CreditMemoAppliedModel>>(url, options, null);
  }
}
