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
import { FinancialYearSettingModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class FinancialYearSettingsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Financial Year Setting specified by this unique identifier.
   *
   * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
   *
   * @param id The unique Lockstep Platform ID number of this Financial Year Setting
   */
  retrieveFinancialYearSetting(id: string): Promise<LockstepResponse<FinancialYearSettingModel>> {
    const url = `/api/v1/FinancialYearSettings/${id}`;
    return this.client.request<FinancialYearSettingModel>("get", url, null, null);
  }

  /**
   * Updates a financial year setting that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
   *
   * @param id The unique Lockstep Platform ID number of the Financial Year Setting to update
   * @param body A list of changes to apply to this Financial Year Setting
   */
  updateFinancialYearSetting(id: string, body: object): Promise<LockstepResponse<FinancialYearSettingModel>> {
    const url = `/api/v1/FinancialYearSettings/${id}`;
    return this.client.request<FinancialYearSettingModel>("patch", url, null, body);
  }

  /**
   * Delete the Financial Year Setting referred to by this unique identifier.
   *
   * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
   *
   * @param id The unique Lockstep Platform ID number of the Financial Year Setting to disable
   */
  deleteFinancialYearSetting(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/FinancialYearSettings/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates a financial year setting from a given model.
   *
   * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
   *
   * @param body The Financial Year Setting to create
   */
  createFinancialYearSetting(body: FinancialYearSettingModel): Promise<LockstepResponse<FinancialYearSettingModel>> {
    const url = `/api/v1/FinancialYearSettings`;
    return this.client.request<FinancialYearSettingModel>("post", url, null, body);
  }

  /**
   * Queries Financial Year Settings for this account using the specified filtering, sorting, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryFinancialYearSettings(filter?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<FinancialYearSettingModel>>> {
    const url = `/api/v1/FinancialYearSettings/query`;
    const options = {
      params: {
        filter,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<FinancialYearSettingModel>>("get", url, options, null);
  }
}
