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
import { TranscriptionValidationRequestModel } from "..";
import { DeleteResult } from "..";
import { TranscriptionRequestSubmit } from "..";
import { FetchResult } from "..";
import { TranscriptionValidationRequestItemModel } from "..";

export class TranscriptionsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Transcription Validation Request specified by this unique identifier, optionally including nested data sets.
   *
   * A Transcription Validation Request represents a collection of files sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param id The unique Lockstep Platform ID number of the transcription validation request
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Items
   */
  retrieveTranscriptionValidationRequest(id: string, include?: string): Promise<LockstepResponse<TranscriptionValidationRequestModel>> {
    const url = `/api/v1/Transcriptions/validate/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<TranscriptionValidationRequestModel>("get", url, options, null);
  }

  /**
   * Updates an existing Transcription Validation Request with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Transcription Validation Request represents a collection of files sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param id The unique Lockstep Platform ID number of the Transcription Validation Request to update
   * @param body A list of changes to apply to this Transcription Validation Request
   */
  updateTranscriptionValidationRequest(id: string, body: object): Promise<LockstepResponse<TranscriptionValidationRequestModel>> {
    const url = `/api/v1/Transcriptions/validate/${id}`;
    return this.client.request<TranscriptionValidationRequestModel>("patch", url, null, body);
  }

  /**
   * Deletes the Transcription Validation Request and all associated items referred to by this unique identifier.
   *
   * A Transcription Validation Request represents a collection of files sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param id The unique Lockstep Platform ID number of the transcription validation request to delete
   */
  deleteTranscriptionValidationRequest(id: string): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/Transcriptions/validate/${id}`;
    return this.client.request<DeleteResult>("delete", url, null, null);
  }

  /**
   * Creates one Transcription Validation Request with all the associated request items within this account and returns the record as created.
   *
   * A Transcription Validation Request represents a collection of files sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param body The files which will be verified
   */
  createTranscriptionValidationRequest(body: TranscriptionRequestSubmit[]): Promise<LockstepResponse<TranscriptionValidationRequestModel>> {
    const url = `/api/v1/Transcriptions/validate`;
    return this.client.request<TranscriptionValidationRequestModel>("post", url, null, body);
  }

  /**
   * Queries transcription validation requests transactions for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Items
   * @param order The sort order for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryTranscriptionValidationRequests(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<TranscriptionValidationRequestModel>>> {
    const url = `/api/v1/Transcriptions/validate/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<TranscriptionValidationRequestModel>>("get", url, options, null);
  }

  /**
   * Retrieves the LockstepApi2.Models.TranscriptionValidationRequestItemModel specified by this unique identifier.
   *
   * A LockstepApi2.Models.TranscriptionValidationRequestItemModel represents a file sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param body The LockstepApi2.Models.TranscriptionValidationRequestItemModels to add to an existing LockstepApi2.Models.TranscriptionValidationRequestItemModel
   */
  createsaLockstepApi2.Models.TranscriptionValidationRequestItemModel(body: TranscriptionRequestSubmit[]): Promise<LockstepResponse<TranscriptionValidationRequestItemModel[]>> {
    const url = `/api/v1/Transcriptions/validation-items`;
    return this.client.request<TranscriptionValidationRequestItemModel[]>("post", url, null, body);
  }

  /**
   * Retrieves the LockstepApi2.Models.TranscriptionValidationRequestItemModel specified by this unique identifier.
   *
   * A LockstepApi2.Models.TranscriptionValidationRequestItemModel represents a file sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param id The unique Lockstep Platform ID number of the LockstepApi2.Models.TranscriptionValidationRequestItemModel
   */
  retrieveaLockstepApi2.Models.TranscriptionValidationRequestItemModel(id: string): Promise<LockstepResponse<TranscriptionValidationRequestItemModel>> {
    const url = `/api/v1/Transcriptions/validation-items/${id}`;
    return this.client.request<TranscriptionValidationRequestItemModel>("get", url, null, null);
  }

  /**
   * Updates the LockstepApi2.Models.TranscriptionValidationRequestItemModel specified by this unique identifier.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A LockstepApi2.Models.TranscriptionValidationRequestItemModel represents a file sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param id The unique Lockstep Platform ID number of the LockstepApi2.Models.TranscriptionValidationRequestItemModel
   * @param body A list of changes to apply to this LockstepApi2.Models.TranscriptionValidationRequestItemModel
   */
  updateaLockstepApi2.Models.TranscriptionValidationRequestItemModel(id: string, body: object): Promise<LockstepResponse<TranscriptionValidationRequestItemModel>> {
    const url = `/api/v1/Transcriptions/validation-items/${id}`;
    return this.client.request<TranscriptionValidationRequestItemModel>("patch", url, null, body);
  }

  /**
   * Deletes the LockstepApi2.Models.TranscriptionValidationRequestItemModel specified by this unique identifier.
   *
   * A LockstepApi2.Models.TranscriptionValidationRequestItemModel represents a file sent from the client to verify the file type using the machine learning platform Sage AI.
   *
   * @param id The unique Lockstep Platform ID number of the LockstepApi2.Models.TranscriptionValidationRequestItemModel
   */
  deleteaLockstepApi2.Models.TranscriptionValidationRequestItemModel(id: string): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/Transcriptions/validation-items/${id}`;
    return this.client.request<DeleteResult>("delete", url, null, null);
  }

  /**
   * Queries LockstepApi2.Models.TranscriptionValidationRequestItemModels for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future ///
   * @param order The sort order for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryTranscriptionValidationRequestItems(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<TranscriptionValidationRequestItemModel>>> {
    const url = `/api/v1/Transcriptions/validation-items/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<TranscriptionValidationRequestItemModel>>("get", url, options, null);
  }
}
