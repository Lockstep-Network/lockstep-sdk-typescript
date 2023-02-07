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
import { AttachmentLinkModel } from "..";
import { DeleteResult } from "..";
import { FetchResult } from "..";

export class AttachmentLinksClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Attachment Link with the provided Attachment Link identifier.
   *
   * An Attachment Link is a link that associates one Attachment with one object within Lockstep.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param attachmentId Documentation pending
   * @param objectKey Documentation pending
   * @param tableName Documentation pending
   */
  retrieveAttachmentLink(attachmentId: string, objectKey: string, tableName: string): Promise<LockstepResponse<AttachmentLinkModel>> {
    const url = `/api/v1/AttachmentLinks`;
    const options = {
      params: {
        attachmentId,
        objectKey,
        tableName,
      },
    };
    return this.client.request<AttachmentLinkModel>("get", url, options, null);
  }

  /**
   * Creates one Attachment Link from the provided arguments.
   *
   * An Attachment Link is a link that associates one Attachment with one object within Lockstep.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param body Documentation pending
   */
  uploadAttachment(body: AttachmentLinkModel[]): Promise<LockstepResponse<AttachmentLinkModel[]>> {
    const url = `/api/v1/AttachmentLinks`;
    return this.client.request<AttachmentLinkModel[]>("post", url, null, body);
  }

  /**
   * Delete the specified link between an object and its attachment.
   *
   * An Attachment Link is a link that associates one Attachment with one object within Lockstep.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param attachmentId Documentation pending
   * @param objectKey Documentation pending
   * @param tableName Documentation pending
   */
  deleteAttachmentLink(attachmentId?: string, objectKey?: string, tableName?: string): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/AttachmentLinks`;
    const options = {
      params: {
        attachmentId,
        objectKey,
        tableName,
      },
    };
    return this.client.request<DeleteResult>("delete", url, options, null);
  }

  /**
   * Queries Attachment Links for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An Attachment Link is a link that associates one Attachment with one object within Lockstep.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param filter The filter to use to select from the list of available Attachments, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available for querying but may be available in the future.
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 250, maximum of 500)
   * @param pageNumber The page number for results (default 0)
   */
  queryAttachmentLinks(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<AttachmentLinkModel>>> {
    const url = `/api/v1/AttachmentLinks/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AttachmentLinkModel>>("get", url, options, null);
  }
}
