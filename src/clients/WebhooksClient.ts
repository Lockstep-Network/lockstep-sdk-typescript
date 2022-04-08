/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { WebhookModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";
import { WebhookHistoryTableStorageModel } from "..";

export class WebhooksClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Webhook specified by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of this Webhook
   */
  retrieveWebhook(id: string): Promise<LockstepResponse<WebhookModel>> {
    const url = `/api/v1/Webhooks/${id}`;
    return this.client.request<WebhookModel>("get", url, null, null);
  }

  /**
   * Updates a webhook that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * @param id The unique Lockstep Platform ID number of the Webhook to update.
   * @param body A list of changes to apply to this Webhook
   */
  updateWebhook(id: string, body: object): Promise<LockstepResponse<WebhookModel>> {
    const url = `/api/v1/Webhooks/${id}`;
    return this.client.request<WebhookModel>("patch", url, null, body);
  }

  /**
   * Deletes the Webhook referred to by this unique identifier.
   *
   * @param id The unique Lockstep Platform ID number of the Webhook to delete.
   */
  deleteWebhook(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Webhooks/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more webhooks from a given model.
   *
   * @param body The Webhooks to create
   */
  createWebhooks(body: WebhookModel[]): Promise<LockstepResponse<WebhookModel[]>> {
    const url = `/api/v1/Webhooks`;
    return this.client.request<WebhookModel[]>("post", url, null, body);
  }

  /**
   * Updates a webhook that matches the specified id with a new client secret.
   *
   * @param id The unique Lockstep Platform ID number of the Webhook to update.
   */
  regenerateClientSecret(id: string): Promise<LockstepResponse<WebhookModel>> {
    const url = `/api/v1/Webhooks/${id}/regenerateclientsecret`;
    return this.client.request<WebhookModel>("patch", url, null, null);
  }

  /**
   * Queries Webhooks for this account using the specified filtering, sorting, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryWebhooks(filter?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<WebhookModel>>> {
    const url = `/api/v1/Webhooks/query`;
    const options = {
      params: {
        filter,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<WebhookModel>>("get", url, options, null);
  }

  /**
   *
   * @param webhookId The unique Lockstep Platform ID number of this Webhook
   * @param filter The filter for this query. See [Azure Query Language](https://docs.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities)
   * @param select The selection for this query. Selection is the desired properties of an entity to pull from the set. If a property is not selected, it will either return as null or empty. See [Azure Query Language](https://docs.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities)
   * @param pageSize The page size for results (default 200).
   * @param pageNumber The page number for results (default 0).
   */
  queryWebhookHistory(webhookId: string, filter?: string, select?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<WebhookHistoryTableStorageModel>>> {
    const url = `/api/v1/Webhooks/${webhookId}/history/query`;
    const options = {
      params: {
        filter,
        select,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<WebhookHistoryTableStorageModel>>("get", url, options, null);
  }
}
