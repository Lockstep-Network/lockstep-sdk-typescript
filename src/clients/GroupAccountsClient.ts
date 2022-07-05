/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { GroupAccountModel } from "..";

export class GroupAccountsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves group account data for the current user.
   *
   */
  retrieveGroupAccountData(): Promise<LockstepResponse<GroupAccountModel>> {
    const url = `/api/v1/GroupAccounts/me`;
    return this.client.request<GroupAccountModel>("get", url, null, null);
  }

  /**
   * Updates a group account that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * @param id The unique ID number of the Group Account to retrieve
   * @param body A list of changes to apply to this Group Account
   */
  updateGroupAccount(id: string, body: object): Promise<LockstepResponse<GroupAccountModel>> {
    const url = `/api/v1/GroupAccounts/${id}`;
    return this.client.request<GroupAccountModel>("patch", url, null, body);
  }
}
