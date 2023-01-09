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
import { AccountingProfileModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";
import { ContactModel } from "..";

export class ProfilesAccountingClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Accounting Profile specified by this unique identifier, optionally including nested data sets.
   *
   * An Accounting Profile is a child of a Company Profile, and collectively, they comprise the identity and necessary information for an accounting  team to work with trading partners, financial institutions, auditors, and others. You can use Accounting Profiles to define an accounting function by what the function does and how to interface with the function.
   *
   * @param id The unique Lockstep Platform ID number of this Accounting Profile
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
   */
  retrieveAccountingProfile(id: string, include?: string): Promise<LockstepResponse<AccountingProfileModel>> {
    const url = `/api/v1/profiles/accounting/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<AccountingProfileModel>("get", url, options, null);
  }

  /**
   * Updates an accounting profile that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * An Accounting Profile is a child of a Company Profile, and collectively, they comprise the identity and necessary information for an accounting  team to work with trading partners, financial institutions, auditors, and others. You can use Accounting Profiles to define an accounting function by what the function does and how to interface with the function.
   *
   * @param id The unique Lockstep Platform ID number of the Accounting Profile to update
   * @param body A list of changes to apply to this Accounting Profile
   */
  updateAccountingProfile(id: string, body: object): Promise<LockstepResponse<AccountingProfileModel>> {
    const url = `/api/v1/profiles/accounting/${id}`;
    return this.client.request<AccountingProfileModel>("patch", url, null, body);
  }

  /**
   * Delete the Accounting Profile referred to by this unique identifier.
   *
   * An Accounting Profile is a child of a Company Profile, and collectively, they comprise the identity and necessary information for an accounting  team to work with trading partners, financial institutions, auditors, and others. You can use Accounting Profiles to define an accounting function by what the function does and how to interface with the function.
   *
   * @param id The unique Lockstep Platform ID number of the Accounting Profile to disable
   */
  deleteAccountingProfile(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/profiles/accounting/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more accounting profiles from a given model.
   *
   * An Accounting Profile is a child of a Company Profile, and collectively, they comprise the identity and necessary information for an accounting  team to work with trading partners, financial institutions, auditors, and others. You can use Accounting Profiles to define an accounting function by what the function does and how to interface with the function.
   *
   * @param body The Accounting Profiles to create
   */
  createAccountingProfiles(body: AccountingProfileModel[]): Promise<LockstepResponse<AccountingProfileModel[]>> {
    const url = `/api/v1/profiles/accounting`;
    return this.client.request<AccountingProfileModel[]>("post", url, null, body);
  }

  /**
   * Queries Accounting Profiles for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An Accounting Profile is a child of a Company Profile, and collectively, they comprise the identity and necessary information for an accounting  team to work with trading partners, financial institutions, auditors, and others. You can use Accounting Profiles to define an accounting function by what the function does and how to interface with the function.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryAccountingProfiles(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<AccountingProfileModel>>> {
    const url = `/api/v1/profiles/accounting/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AccountingProfileModel>>("get", url, options, null);
  }

  /**
   * Retrieves all the Contacts associated with the Accounting Profile by this unique identifier, optionally including nested data sets.
   *
   * A Contact has a link to a Contact that is associated with your company's Accounting Profile.
   *
   * @param id The unique Lockstep Platform ID number of this Accounting Profile
   */
  retrieveAllAccountingProfileContacts(id: string): Promise<LockstepResponse<ContactModel[]>> {
    const url = `/api/v1/profiles/accounting/${id}/contacts/models`;
    return this.client.request<ContactModel[]>("get", url, null, null);
  }
}
