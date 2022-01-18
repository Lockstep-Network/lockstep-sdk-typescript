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

require('../LockstepApi.js');
require('../models/LockstepResponse.js');
require('../models/DataModels.js');

export class LeadsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Creates one or more Leads within the Lockstep platform and returns the records as created.
   *
   * A Lead is a person who is interested in the Lockstep platform but needs certain new features in order to use it. If you are interested in the Lockstep platform, you can create a lead with your information and our team will prioritize the feature you need.
   *
   * @param body The Leads to create
   */
  createLeads(body: LeadModel[]): Promise<LockstepResponse<LeadModel[]>> {
    const url = `/api/v1/Leads`;
    return this.client.request<LeadModel[]>('post', url, null, body);
  }
}
