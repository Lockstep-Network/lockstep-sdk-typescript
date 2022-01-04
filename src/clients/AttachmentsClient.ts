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
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { AttachmentModel } from "../models/DataModels.js";
import { ActionResultModel } from "../models/ActionResultModel.js";
import { UriModel } from "../models/ActionResultModel.js";
import { FetchResult } from "../models/FetchResult.js";

export class AttachmentsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Attachment with the provided Attachment identifier.
   * 
   * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
   * 
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique ID number of the Attachment to retrieve
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available for querying but may be available in the future.
   */
  retrieveAttachment(id: string, include: string): Promise<LockstepResponse<AttachmentModel>> {
    const url = `/api/v1/Attachments/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<AttachmentModel>('get', url, options, null);
  }

  /**
   * Updates an existing Attachment with the information supplied to this PATCH call.
   * 
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   * 
   * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
   * 
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique Lockstep Platform ID number of the attachment to update
   * @param body - A list of changes to apply to this Attachment
   */
  updateAttachment(id: string, body: object): Promise<LockstepResponse<AttachmentModel>> {
    const url = `/api/v1/Attachments/${id}`;
    return this.client.request<AttachmentModel>('patch', url, null, body);
  }

  /**
   * Flag this attachment as archived, which can distinguish between attachments currently active and attachments not intended for active use.  This is similar to deletion but preserves information about the record's existence.
   * 
   * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
   * 
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique ID number of the Attachment to be archived
   */
  archiveAttachment(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Attachments/${id}`;
    return this.client.request<ActionResultModel>('delete', url, null, null);
  }

  /**
   * Returns a URI for the Attachment file to be downloaded, based on the ID provided.
   * 
   * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
   * 
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param id - The unique ID number of the Attachment whose URI will be returned
   */
  downloadAttachment(id: string): Promise<LockstepResponse<UriModel>> {
    const url = `/api/v1/Attachments/${id}/download`;
    return this.client.request<UriModel>('get', url, null, null);
  }

  /**
   * Uploads and creates one or more Attachments from the provided arguments.
   * 
   * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
   * 
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param tableName - The name of the type of object to which this Attachment will be linked
   * @param objectId - The unique ID of the object to which this Attachment will be linked
   */
  uploadAttachment(tableName: string, objectId: string): Promise<LockstepResponse<AttachmentModel[]>> {
    const url = `/api/v1/Attachments`;
    const options = {
      params: {
        tableName,
        objectId,
      },
    };
    return this.client.request<AttachmentModel[]>('post', url, options, null);
  }

  /**
   * Queries Attachments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   * 
   * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
   * 
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   * 
   * @param filter - The filter to use to select from the list of available Attachments, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available for querying but may be available in the future.
   * @param order - The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize - The page size for results (default 200, maximum of 10,000)
   * @param pageNumber - The page number for results (default 0)
   */
  queryAttachments(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<AttachmentModel>>> {
    const url = `/api/v1/Attachments/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AttachmentModel>>('get', url, options, null);
  }
}
