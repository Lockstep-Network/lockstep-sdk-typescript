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
import { ErrorResult } from "../models/ErrorResult";
import { ContactModel } from "../models/DataModels";
import { ActionResultModel } from "../models/ActionResultModel";
import { FetchResult } from "../models/FetchResult";

export class ContactsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Contact specified by this unique identifier, optionally including nested data sets.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   * 
   * @param id - The unique Lockstep Platform ID number of this Contact; NOT the customer's ERP key
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        Available collections: Attachments, CustomFields, Notes
   */
  retrieveContact(id: string, include: string): Promise<ContactModel | ErrorResult> {
    const url = `/api/v1/Contacts/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.get<ContactModel>(url, options);
  }

  /**
   * Updates a contact that matches the specified id with the requested information.
   * 
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   * 
   * @param id - The unique Lockstep Platform ID number of the Contact to update; NOT the customer's ERP key
   * @param body - A list of changes to apply to this Contact
   */
  updateContact(id: string, body: object): Promise<ContactModel | ErrorResult> {
    const url = `/api/v1/Contacts/${id}`;
    return this.client.patch<ContactModel>(url, null, body);
  }

  /**
   * Disable the Contact referred to by this unique identifier.
   * 
   * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   * 
   * @param id - The unique Lockstep Platform ID number of the Contact to disable; NOT the customer's ERP key
   */
  disableContact(id: string): Promise<ActionResultModel | ErrorResult> {
    const url = `/api/v1/Contacts/${id}`;
    return this.client.delete<ActionResultModel>(url, null);
  }

  /**
   * Creates one or more contacts from a given model.
   * 
   * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   * 
   * @param body - The Contacts to create
   */
  createContacts(body: ContactModel[]): Promise<ContactModel[] | ErrorResult> {
    const url = `/api/v1/Contacts`;
    return this.client.post<ContactModel[]>(url, null, body);
  }

  /**
   * Queries Contacts for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   * 
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.               Available collections: Attachments, CustomFields, Notes
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryContacts(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<ContactModel> | ErrorResult> {
    const url = `/api/v1/Contacts/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.get<FetchResult<ContactModel>>(url, options);
  }
}
