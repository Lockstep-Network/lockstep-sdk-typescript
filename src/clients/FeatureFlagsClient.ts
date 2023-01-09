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
import { FeatureFlagsResponseModel } from "..";
import { FeatureFlagsRequestModel } from "..";

export class FeatureFlagsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the specified feature flags. True if they are enabled, false otherwise.
   *
   * @param body Documentation pending
   */
  retrieveFeatureFlags(body: FeatureFlagsRequestModel): Promise<LockstepResponse<FeatureFlagsResponseModel>> {
    const url = `/api/v1/feature-flags`;
    return this.client.request<FeatureFlagsResponseModel>("post", url, null, body);
  }
}
