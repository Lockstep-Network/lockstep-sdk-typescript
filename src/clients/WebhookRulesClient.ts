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
import { WebhookRuleModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class WebhookRulesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Webhook Rule specified by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of this Webhook Rule
   */
  retrieveWebhookRule(id: string): Promise<LockstepResponse<WebhookRuleModel>> {
    const url = `/api/v1/WebhookRules/${id}`;
    return this.client.request<WebhookRuleModel>("get", url, null, null);
  }

  /**
   * Updates a webhook rule that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * @param id The unique Lockstep Platform ID number of the Webhook Rule to update.
   * @param body A list of changes to apply to this Webhook Rule
   */
  updateWebhookRule(id: string, body: object): Promise<LockstepResponse<WebhookRuleModel>> {
    const url = `/api/v1/WebhookRules/${id}`;
    return this.client.request<WebhookRuleModel>("patch", url, null, body);
  }

  /**
   * Deletes the Webhook Rule referred to by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of the Webhook Rule to delete.
   */
  deleteWebhookRule(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/WebhookRules/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more webhook rules from a given model.
   *
   * @param body The Webhook Rules to create
   */
  createWebhookRules(body: WebhookRuleModel[]): Promise<LockstepResponse<WebhookRuleModel[]>> {
    const url = `/api/v1/WebhookRules`;
    return this.client.request<WebhookRuleModel[]>("post", url, null, body);
  }

  /**
   * Queries Webhook Rules for this account using the specified filtering, sorting, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryWebhookRules(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<WebhookRuleModel>>> {
    const url = `/api/v1/WebhookRules/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<WebhookRuleModel>>("get", url, options, null);
  }
}
