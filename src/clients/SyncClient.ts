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
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { SyncRequestModel } from "../models/DataModels.js";
import { SyncSubmitModel } from "../models/DataModels.js";
import { FetchResult } from "../models/FetchResult.js";

export class SyncClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Requests a new Sync task from the Application specified in the request and returns a token that can be used to check the progress and status of the task.
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   * @param body Information about the Sync to execute
   */
  createSync(body: SyncSubmitModel): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync`;
    return this.client.request<SyncRequestModel>("post", url, null, body);
  }

  /**
   * Requests a new Sync task from a ZIP file you provide.  This ZIP file can contain one or more files with data from the customer's platform.  Individual files can be in the format CSV or JSONL (JSON with Lines).
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   */
  uploadSyncFile(): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync/zip`;
    return this.client.request<SyncRequestModel>("post", url, null, null);
  }

  /**
   * Updates an existing Sync with the information supplied to this PATCH call.
   *
   * This API is restricted to internal service users and may not be called by customers or partners.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  For example, you can provide the field name "IsActive" and specify the new value "False"; this API will then change the value of IsActive to false.
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   * @param id The unique ID number of the Sync to update
   * @param body A list of changes to apply to this Application
   */
  updateSync(id: string, body: object): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync/${id}`;
    return this.client.request<SyncRequestModel>("patch", url, null, body);
  }

  /**
   * Retrieves the status and information about a Sync operation by the requested ID.  Provides status and progress information about this task.
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   * @param id The unique ID number of the Sync task to retrieve
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Details
   */
  retrieveSync(id: string, include?: string): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<SyncRequestModel>("get", url, options, null);
  }

  /**
   * Queries Sync tasks for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Details
   * @param order The sort order for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  querySyncs(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<SyncRequestModel>>> {
    const url = `/api/v1/Sync/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<SyncRequestModel>>("get", url, options, null);
  }
}
