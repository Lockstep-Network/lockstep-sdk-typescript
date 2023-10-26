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
import { JournalEntryModel } from "..";
import { FetchResult } from "..";

export class JournalEntriesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Journal Entry specified by this unique identifier, optionally including nested data sets.
   *
   * @param id The unique Lockstep Platform ID number of this journal entry; NOT the customer's ERP key
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Lines, Attachments
   */
  retrieveJournalEntry(id: string, include?: string): Promise<LockstepResponse<JournalEntryModel>> {
    const url = `/api/v1/journal-entries/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<JournalEntryModel>("get", url, options, null);
  }

  /**
   * Creates one or more Journal Entries within this account and returns the records as created.
   *
   * @param body The Journal Entries to create
   */
  createJournalEntries(body: JournalEntryModel[]): Promise<LockstepResponse<JournalEntryModel[]>> {
    const url = `/api/v1/journal-entries`;
    return this.client.request<JournalEntryModel[]>("post", url, null, body);
  }

  /**
   * Queries Journal Entries for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Lines, Attachments
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryJournalEntries(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<JournalEntryModel>>> {
    const url = `/api/v1/journal-entries/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<JournalEntryModel>>("get", url, options, null);
  }
}
