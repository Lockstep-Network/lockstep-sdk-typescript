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

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { ContactModel } from "../models/DataModels.js";
import { ActionResultModel } from "../models/ActionResultModel.js";
import { FetchResult } from "../models/FetchResult.js";

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
   * @param id The unique Lockstep Platform ID number of this Contact; NOT the customer's ERP key
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
   */
  retrieveContact(id: string, include?: string): Promise<LockstepResponse<ContactModel>> {
    const url = `/api/v1/Contacts/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<ContactModel>("get", url, options, null);
  }

  /**
   * Updates a contact that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   *
   * @param id The unique Lockstep Platform ID number of the Contact to update; NOT the customer's ERP key
   * @param body A list of changes to apply to this Contact
   */
  updateContact(id: string, body: object): Promise<LockstepResponse<ContactModel>> {
    const url = `/api/v1/Contacts/${id}`;
    return this.client.request<ContactModel>("patch", url, null, body);
  }

  /**
   * Disable the Contact referred to by this unique identifier.
   *
   * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   *
   * @param id The unique Lockstep Platform ID number of the Contact to disable; NOT the customer's ERP key
   */
  disableContact(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Contacts/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more contacts from a given model.
   *
   * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   *
   * @param body The Contacts to create
   */
  createContacts(body: ContactModel[]): Promise<LockstepResponse<ContactModel[]>> {
    const url = `/api/v1/Contacts`;
    return this.client.request<ContactModel[]>("post", url, null, body);
  }

  /**
   * Queries Contacts for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryContacts(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<ContactModel>>> {
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
    return this.client.request<FetchResult<ContactModel>>("get", url, options, null);
  }
}
