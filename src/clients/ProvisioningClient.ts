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
import { ActionResultModel } from "..";
import { DeveloperAccountSubmitModel } from "..";

export class ProvisioningClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Creates a new account for a developer, sending an email with information on how to access the API.
   *
   * @param body Documentation pending
   */
  provisionFreeDeveloperAccount(body: DeveloperAccountSubmitModel): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Provisioning/free-account`;
    return this.client.request<ActionResultModel>("post", url, null, body);
  }
}
