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
import { CustomFieldValueModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";

export class CustomFieldValuesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves all Custom Field Definitions.
   *
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param definitionId The unique Lockstep Platform ID number of the Custom Field Definition for the Custom Field Value to retrieve.
   * @param recordKey The unique Lockstep Platform ID number of the Lockstep Platform object the Custom Field Value is attached to.
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: CustomFieldDefinition
   */
  retrieveField(definitionId: string, recordKey: string, include?: string): Promise<LockstepResponse<CustomFieldValueModel>> {
    const url = `/api/v1/CustomFieldValues/${definitionId}/${recordKey}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<CustomFieldValueModel>("get", url, options, null);
  }

  /**
   * Updates an existing Custom Field with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param definitionId The unique Lockstep Platform ID number of the Custom Field Definition for the Custom Field Value to retrieve.
   * @param recordKey The unique Lockstep Platform ID number of the Lockstep Platform object the Custom Field Value is attached to.
   * @param body A list of changes to apply to this Custom Field
   */
  updateField(definitionId: string, recordKey: string, body: object): Promise<LockstepResponse<CustomFieldValueModel>> {
    const url = `/api/v1/CustomFieldValues/${definitionId}/${recordKey}`;
    return this.client.request<CustomFieldValueModel>("patch", url, null, body);
  }

  /**
   * Deletes the Custom Field referred to by this unique identifier.
   *
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param definitionId The unique Lockstep Platform ID number of the Custom Field Definition for the Custom Field Value to retrieve.
   * @param recordKey The unique Lockstep Platform ID number of the Lockstep Platform object the Custom Field Value is attached to.
   */
  deleteField(definitionId: string, recordKey: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/CustomFieldValues/${definitionId}/${recordKey}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more Custom Fields and returns the records as created.
   *
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param body The Custom Fields to create
   */
  createFields(body: CustomFieldValueModel[]): Promise<LockstepResponse<CustomFieldValueModel[]>> {
    const url = `/api/v1/CustomFieldValues`;
    return this.client.request<CustomFieldValueModel[]>("post", url, null, body);
  }

  /**
   * Queries Custom Fields within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.
   *
   * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: CustomFieldDefinition
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryFields(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<CustomFieldValueModel>>> {
    const url = `/api/v1/CustomFieldValues/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<CustomFieldValueModel>>("get", url, options, null);
  }
}
