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
import { ApplicationModel } from "../models/DataModels.js";
import { ActionResultModel } from "../models/ActionResultModel.js";
import { FetchResult } from "../models/FetchResult.js";

export class ApplicationsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Application with this identifier.
   *
   * An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the Application to retrieve
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields
   */
  retrieveApplication(id: string, include: string): Promise<LockstepResponse<ApplicationModel>> {
    const url = `/api/v1/Applications/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<ApplicationModel>('get', url, options, null);
  }

  /**
   * Updates an existing Application with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  For example, you can provide the field name "IsActive" and specify the new value "False"; this API will then change the value of IsActive to false.   An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the Application to update
   * @param body A list of changes to apply to this Application
   */
  updateApplication(id: string, body: object): Promise<LockstepResponse<ApplicationModel>> {
    const url = `/api/v1/Applications/${id}`;
    return this.client.request<ApplicationModel>('patch', url, null, body);
  }

  /**
   * Deletes the Application referred to by this unique identifier.  Information about this Application is retained but after the DELETE call, this Application is no longer available for use on the Lockstep Platform.  An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the Application to delete
   */
  deleteApplication(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Applications/${id}`;
    return this.client.request<ActionResultModel>('delete', url, null, null);
  }

  /**
   * Creates one or more Applications and returns the records as created.  Applications are universal and available across all accounts.
   *
   * An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param body The Applications to create
   */
  createApplications(body: ApplicationModel[]): Promise<LockstepResponse<ApplicationModel[]>> {
    const url = `/api/v1/Applications`;
    return this.client.request<ApplicationModel[]>('post', url, null, body);
  }

  /**
   * Queries Applications on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryApplications(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<ApplicationModel>>> {
    const url = `/api/v1/Applications/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<ApplicationModel>>('get', url, options, null);
  }
}
