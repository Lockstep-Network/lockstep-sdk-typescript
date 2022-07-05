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

import { ApplicationModel } from "..";
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";
import { SyncRequestModel } from "..";
import { ConnectorInfoModel } from "..";

/**
 * An AppEnrollment represents an app that has been enrolled to the current account.  When you sign up for an
 * app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include
 * connectors and feature enhancement apps. The App Enrollment object contains information about this app, its
 * configuration, and settings.
 *
 * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
 */
export type AppEnrollmentModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  appEnrollmentId: string;

  /**
   * The ID number of the Application that this enrollment represents.  You can fetch information
   * about this Application object by specifying `App` in the "Include" parameter for your request.
   */
  appId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Determines whether the app enrollment is in use
   */
  isActive: boolean;

  /**
   * Created date
   */
  created: string;

  /**
   * Created user ID
   */
  createdUserId: string;

  /**
   * Last modified date
   */
  modified: string;

  /**
   * Last user ID to modify
   */
  modifiedUserId: string;

  /**
   * Stores schedule information for the application enrollment
   * see https://en.wikipedia.org/wiki/Cron
   */
  cronSettings: string | null;

  /**
   * Flag indicating if the Sync process should be ran on the specified schedule
   */
  syncScheduleIsActive: boolean;

  /**
   * The Application to which this AppEnrollment belongs.  Contains general name, description,
   * logo, and other metadata about this application.
   *
   * To retrieve this object, specify `App` in the "Include" parameter for your query.
   */
  app: ApplicationModel | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `AppEnrollment` and the `ObjectKey` set to the `AppEnrollmentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `AppEnrollment` and the `ObjectKey` set to the `AppEnrollmentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * Data about the last sync attached to this app enrollment
   *
   * To retrieve this collection, specify `LastSync` in the "Include" parameter for your query.
   */
  lastSync: SyncRequestModel | null;

  /**
   * Data about the last successful sync associated with this enrollment
   */
  lastSuccessfulSync: SyncRequestModel | null;

  /**
   * Optional data necessary to create an app enrollment for a supported connector.
   * Only enter relevant fields for the given connector.
   */
  connectorInfo: ConnectorInfoModel | null;
};
