/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { AppEnrollmentModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";
import { AppEnrollmentCustomFieldModel } from "..";

export class AppEnrollmentsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the App Enrollment with this identifier.
   *
   * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the App Enrollment to retrieve
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: App, CustomFields, LastSync, LastSuccessfulSync
   */
  retrieveAppEnrollment(id: string, include?: string): Promise<LockstepResponse<AppEnrollmentModel>> {
    const url = `/api/v1/AppEnrollments/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<AppEnrollmentModel>("get", url, options, null);
  }

  /**
   * Updates an existing App Enrollment with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  For example, you can provide the field name "IsActive" and specify the new value "False"; this API will then change the value of IsActive to false.
   *
   * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the App Enrollment to update
   * @param body A list of changes to apply to this App Enrollment
   */
  updateAppEnrollment(id: string, body: object): Promise<LockstepResponse<AppEnrollmentModel>> {
    const url = `/api/v1/AppEnrollments/${id}`;
    return this.client.request<AppEnrollmentModel>("patch", url, null, body);
  }

  /**
   * Deletes the App Enrollment referred to by this unique identifier. An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the App Enrollment to delete
   * @param removeEnrollmentData Option to remove all associated app enrollment data when deleting app enrollment (default false)
   */
  deleteAppEnrollment(id: string, removeEnrollmentData?: boolean): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/AppEnrollments/${id}`;
    const options = {
      params: {
        removeEnrollmentData,
      },
    };
    return this.client.request<ActionResultModel>("delete", url, options, null);
  }

  /**
   * Creates one or more App Enrollments within this account and returns the records as created.
   *
   * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param body The App Enrollments to create
   */
  createAppEnrollments(body: AppEnrollmentModel[]): Promise<LockstepResponse<AppEnrollmentModel[]>> {
    const url = `/api/v1/AppEnrollments`;
    return this.client.request<AppEnrollmentModel[]>("post", url, null, body);
  }

  /**
   * Queries App Enrollments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: App, CustomFields, LastSync, LastSuccessfulSync
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryAppEnrollments(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<AppEnrollmentModel>>> {
    const url = `/api/v1/AppEnrollments/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AppEnrollmentModel>>("get", url, options, null);
  }

  /**
   * Queries custom fields settings for app enrollment within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
   *
   * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
   *
   * @param id The unique ID number of the App Enrollment for which we retrieve custom fields
   */
  queryEnrollmentFields(id: string): Promise<LockstepResponse<FetchResult<AppEnrollmentCustomFieldModel>>> {
    const url = `/api/v1/AppEnrollments/settings/${id}`;
    return this.client.request<FetchResult<AppEnrollmentCustomFieldModel>>("get", url, null, null);
  }
}
