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
 * @version    2022.2
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { EmailModel } from "../models/DataModels.js";
import { ActionResultModel } from "../models/ActionResultModel.js";
import { FetchResult } from "../models/FetchResult.js";

export class EmailsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the email with the specified email identifier.
   *
   * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
   *
   * @param id The unique ID number of the Email to retrieve.
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes, ResponseOrigin
   */
  retrieveEmail(id: string, include: string): Promise<LockstepResponse<EmailModel>> {
    const url = `/api/v1/Emails/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<EmailModel>('get', url, options, null);
  }

  /**
   * Updates an existing Email with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
   *
   * @param id The unique Lockstep Platform ID number of the email to update
   * @param body A list of changes to apply to this Email
   */
  updateEmail(id: string, body: object): Promise<LockstepResponse<EmailModel>> {
    const url = `/api/v1/Emails/${id}`;
    return this.client.request<EmailModel>('patch', url, null, body);
  }

  /**
   * Deletes the Email referred to by this unique identifier.
   *
   * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
   *
   * @param id The unique Lockstep Platform ID number of the Email to delete
   */
  deleteEmail(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Emails/${id}`;
    return this.client.request<ActionResultModel>('delete', url, null, null);
  }

  /**
   * Retrieves a signature logo for the email with the specified identifier and increments 'ViewCount'.
   *
   * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
   *
   * @param emailId The unique ID number of the Email to retrieve.
   * @param nonce The random nonce applied at time of url creation.
   */
  retrieveEmailLogo(emailId: string, nonce: string): Promise<LockstepResponse<File>> {
    const url = `/api/v1/Emails/${emailId}/logo/${nonce}`;
    return this.client.request<File>('get', url, null, null);
  }

  /**
   * Creates one or more emails from the specified array of Email Models
   *
   * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
   *
   * @param body The array of emails to be created
   */
  createEmails(body: EmailModel[]): Promise<LockstepResponse<EmailModel[]>> {
    const url = `/api/v1/Emails`;
    return this.client.request<EmailModel[]>('post', url, null, body);
  }

  /**
   * Queries Emails on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
   *
   * @param filter The filter to use to select from the list of available applications, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes, ResponseOrigin
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryEmails(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<EmailModel>>> {
    const url = `/api/v1/Emails/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<EmailModel>>('get', url, options, null);
  }
}
