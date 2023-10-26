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
import { WorkflowStatusModel } from "..";
import { FetchResult } from "..";

export class WorkflowStatusesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Workflow Status specified by this unique identifier.
   *
   * A Workflow Status represents the state for a specific workflow for an entity. A Workflow Status may be generic for common use cases or specific to a set of predefined statuses.
   *
   * @param id The unique ID number of the Workflow Status to retrieve
   */
  retrieveWorkflowStatus(id: string): Promise<LockstepResponse<WorkflowStatusModel>> {
    const url = `/api/v1/workflow-statuses/${id}`;
    return this.client.request<WorkflowStatusModel>("get", url, null, null);
  }

  /**
   * Creates one or more Workflow Statuses from a given model.
   *
   * A Workflow Status represents the state for a specific workflow for an entity. A Workflow Status may be generic for common use cases or specific to a set of predefined statuses.
   *
   * @param body The Workflow Statuses to create
   */
  createWorkflowStatuses(body: WorkflowStatusModel[]): Promise<LockstepResponse<WorkflowStatusModel[]>> {
    const url = `/api/v1/workflow-statuses`;
    return this.client.request<WorkflowStatusModel[]>("post", url, null, body);
  }

  /**
   * Queries Workflow Statuses using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Accounting Data Services Developer website.
   *
   * A Workflow Status represents the state for a specific workflow for an entity. A Workflow Status may be generic for common use cases or specific to a set of predefined statuses.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryWorkflowStatuses(filter?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<WorkflowStatusModel>>> {
    const url = `/api/v1/workflow-statuses/query`;
    const options = {
      params: {
        filter,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<WorkflowStatusModel>>("get", url, options, null);
  }
}
