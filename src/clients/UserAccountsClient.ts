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
 * @version    2022.3.23
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { UserAccountModel } from "../models/DataModels.js";
import { ActionResultModel } from "../models/ActionResultModel.js";
import { InviteModel } from "../models/DataModels.js";
import { InviteSubmitModel } from "../models/DataModels.js";
import { InviteDataModel } from "../models/DataModels.js";
import { TransferOwnerModel } from "../models/DataModels.js";
import { TransferOwnerSubmitModel } from "../models/DataModels.js";
import { FetchResult } from "../models/FetchResult.js";

export class UserAccountsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the User with this identifier.
   *
   * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param id The unique ID number of the User to retrieve
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields, AccountingRole
   */
  retrieveUser(id: string, include: string): Promise<LockstepResponse<UserAccountModel>> {
    const url = `/api/v1/UserAccounts/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<UserAccountModel>('get', url, options, null);
  }

  /**
   * Updates a User that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param id The unique ID number of the User to retrieve
   * @param body A list of changes to apply to this User
   */
  updateUser(id: string, body: object): Promise<LockstepResponse<UserAccountModel>> {
    const url = `/api/v1/UserAccounts/${id}`;
    return this.client.request<UserAccountModel>('patch', url, null, body);
  }

  /**
   * Disable the user referred to by this unique identifier.
   *
   * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param id The unique Lockstep Platform ID number of this User
   */
  disableUser(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/UserAccounts/${id}`;
    return this.client.request<ActionResultModel>('delete', url, null, null);
  }

  /**
   * Reenable the user referred to by this unique identifier.
   *
   * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param id The unique Lockstep Platform ID number of this User
   */
  reenableUser(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/UserAccounts/reenable`;
    const options = {
      params: {
        id,
      },
    };
    return this.client.request<ActionResultModel>('post', url, options, null);
  }

  /**
   * Invite a user with the specified email to join your accounting group. The user will receive an email to set up their account.
   *
   * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param body The user to invite
   */
  inviteUser(body: InviteSubmitModel[]): Promise<LockstepResponse<InviteModel[]>> {
    const url = `/api/v1/UserAccounts/invite`;
    return this.client.request<InviteModel[]>('post', url, null, body);
  }

  /**
   * Retrieves invite information for the specified invite token.
   *
   * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param code The code of the invite
   */
  retrieveInviteData(code: string): Promise<LockstepResponse<InviteDataModel>> {
    const url = `/api/v1/UserAccounts/invite`;
    const options = {
      params: {
        code,
      },
    };
    return this.client.request<InviteDataModel>('get', url, options, null);
  }

  /**
   * Transfer the ownership of a group to another user. This API must be called by the current owner of the group.
   *
   * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param body
   */
  transferOwner(body: TransferOwnerSubmitModel): Promise<LockstepResponse<TransferOwnerModel>> {
    const url = `/api/v1/UserAccounts/transfer-owner`;
    return this.client.request<TransferOwnerModel>('post', url, null, body);
  }

  /**
   * Queries Users for this account using the specified filtering, sorting, nested fetch, and pagination rules requested. A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Insights.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields, AccountingRole
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryUsers(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<UserAccountModel>>> {
    const url = `/api/v1/UserAccounts/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<UserAccountModel>>('get', url, options, null);
  }
}
