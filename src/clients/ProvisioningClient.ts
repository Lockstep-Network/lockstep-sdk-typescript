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

import { LockstepApi } from "../APIClient.js";
import { ErrorResult } from "../models/ErrorResult.js";
import { ProvisioningResponseModel } from "../models/DataModels.js";
import { ProvisioningModel } from "../models/DataModels.js";
import { ProvisioningFinalizeRequestModel } from "../models/DataModels.js";

export class ProvisioningClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Creates a new User or updates an Invited user based on metadata provided by the User during the onboarding process
   * 
   * @param body - Represents a User and their related metadata
   */
  provisionUserAccount(body: ProvisioningModel): Promise<ProvisioningResponseModel | ErrorResult> {
    const url = `/api/v1/Provisioning`;
    return this.client.request<ProvisioningResponseModel>('post', url, null, body);
  }

  /**
   * Updates user, company and group metadata for a User of status 'Onboarding' and finalizes a user's onboarding process by changing the user status to 'Active'
   * 
   * @param body - Represents a User and their related metadata
   */
  finalizeUserAccountProvisioning(body: ProvisioningFinalizeRequestModel): Promise<ProvisioningResponseModel | ErrorResult> {
    const url = `/api/v1/Provisioning/finalize`;
    return this.client.request<ProvisioningResponseModel>('post', url, null, body);
  }
}
