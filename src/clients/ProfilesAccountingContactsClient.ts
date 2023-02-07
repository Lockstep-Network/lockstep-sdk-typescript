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
import { AccountingProfileContactModel } from "..";
import { DeleteResult } from "..";
import { FetchResult } from "..";
import { AccountingProfileContactResultModel } from "..";

export class ProfilesAccountingContactsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Accounting Profile Contact specified by this unique identifier, optionally including nested data sets.
   *
   * A Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * @param id The unique Lockstep Platform ID number of this Accounting Profile Contact
   */
  retrieveAccountingProfileContact(id: string): Promise<LockstepResponse<AccountingProfileContactModel>> {
    const url = `/api/v1/profiles/accounting/contacts/${id}`;
    return this.client.request<AccountingProfileContactModel>("get", url, null, null);
  }

  /**
   * Delete the Accounting Profile Contact referred to by this unique identifier.
   *
   * An Accounting Profile Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * @param id The unique Lockstep Platform ID number of the Accounting Profile Contact to delete
   */
  deleteAccountingProfileContact(id: string): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/profiles/accounting/contacts/${id}`;
    return this.client.request<DeleteResult>("delete", url, null, null);
  }

  /**
   * Creates one or more Accounting Profile Contacts from a given model.
   *
   * An Accounting Profile Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * @param body The Accounting Profile Contacts to create
   */
  createAccountingProfileContacts(body: AccountingProfileContactModel[]): Promise<LockstepResponse<AccountingProfileContactModel[]>> {
    const url = `/api/v1/profiles/accounting/contacts`;
    return this.client.request<AccountingProfileContactModel[]>("post", url, null, body);
  }

  /**
   * Updates an accounting profile contact that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * An Accounting Profile Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * @param id The unique Lockstep Platform ID number of the Accounting Profile Contact to update
   * @param contactId The ID of the contact to link to this Accounting Profile Contact
   */
  updateAccountingProfileContact(id: string, contactId: string): Promise<LockstepResponse<AccountingProfileContactModel>> {
    const url = `/api/v1/profiles/accounting/contacts/${id}/${contactId}`;
    return this.client.request<AccountingProfileContactModel>("patch", url, null, null);
  }

  /**
   * Queries Accounting Profile Contacts for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An Accounting Profile Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: None
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryAccountingProfileContacts(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<AccountingProfileContactModel>>> {
    const url = `/api/v1/profiles/accounting/contacts/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AccountingProfileContactModel>>("get", url, options, null);
  }

  /**
   * Queries Accounting Profile Contacts and Contacts for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An Accounting Profile Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: None
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryLinkedAccountingProfileContacts(filter?: string, order?: string, include?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<AccountingProfileContactResultModel>>> {
    const url = `/api/v1/profiles/accounting/contacts/query/models`;
    const options = {
      params: {
        filter,
        order,
        include,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AccountingProfileContactResultModel>>("get", url, options, null);
  }

  /**
   * Updates an accounting profile contact that matches the specified id with the primary contact attached to the accounting profile
   *
   * An Accounting Profile Contact has a link to a Contact that is associated with your company's Accounting Profile. A profile has one primary contact and any number of secondary contacts.
   *
   * @param id The unique Lockstep Platform ID number of the Accounting Profile Contact to update
   */
  setSecondaryContactasPrimary(id: string): Promise<LockstepResponse<AccountingProfileContactModel>> {
    const url = `/api/v1/profiles/accounting/contacts/${id}/primary`;
    return this.client.request<AccountingProfileContactModel>("patch", url, null, null);
  }
}
