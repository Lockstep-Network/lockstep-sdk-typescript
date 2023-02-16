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
import { SyncRequestModel } from "..";
import { SyncSubmitModel } from "..";
import { BatchSyncModel } from "..";
import { FetchResult } from "..";

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
   * Creates a new batch import Sync task that imports all the models provided to this API call.
   *
   * A Sync task represents ingestion of data from a source.  For each data model in the source, the Sync process will determine whether the data is new, updated, or unchanged from data that already exists within the Lockstep Platform.  For records that are new, the Sync process will add them to the Lockstep Platform data.  For records that are updated, the Sync process will update existing data to match the newly uploaded records.  If records have not changed, no action will be taken.
   *
   * You can use this Batch Import process to load data in bulk directly into the Lockstep Platform.
   *
   * @param body Information about the Sync to execute
   */
  createBatchImport(body: BatchSyncModel): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync/batch`;
    return this.client.request<SyncRequestModel>("post", url, null, body);
  }

  /**
   * Requests a new Sync task from a ZIP file you provide.  This ZIP file can contain one or more files with data from the customer's platform.  Individual files can be in the format CSV or JSONL (JSON with Lines).
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   * @param appEnrollmentId The optional existing app enrollment to associate with the data in the zip file.
   * @param isFullSync True if this is a full sync, false if this is a partial sync. Defaults to false.
   * @param filename The full path of a file to upload to the API
   */
  uploadSyncFile(filename: string, appEnrollmentId?: string, isFullSync?: boolean): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync/zip`;
    const options = {
      params: {
        appEnrollmentId,
        isFullSync,
      },
    };
    return this.client.fileUpload("post", url, options, filename);
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
   * Cancels a Sync process for an Application if the request is still being processed within the Application. This does not cancel Sync processes which have already proceeded to completion within the Application, or Sync processes outside of Applications such as from a Zip file or Batch Import.
   *
   * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
   *
   * @param id The unique ID number of the Sync task to cancel
   */
  cancelSync(id: string): Promise<LockstepResponse<SyncRequestModel>> {
    const url = `/api/v1/Sync/${id}`;
    return this.client.request<SyncRequestModel>("delete", url, null, null);
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
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
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
