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

import { NoteModel } from "..";
import { AttachmentModel } from "..";
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";
import { AppEnrollmentModel } from "..";

/**
 * An Application represents a feature available to customers within the Lockstep Platform.  You can create
 * Applications by working with your Lockstep business development manager and publish them on the platform
 * so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a
 * customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's
 * instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data
 * for the Application, which is not customer-specific.
 *
 * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
 * --swaggerCategory:Platform
 */
export type ApplicationModel = {

  /**
   * A unique code identifying this application
   */
  appId: string;

  /**
   * The name of this application
   */
  name: string;

  /**
   * Brief summary of this application shown as a subtitle
   */
  description: string | null;

  /**
   * Tag for what type of app this is
   */
  appType: string;

  /**
   * The ID of the owner
   */
  ownerId: string;

  /**
   * The URL to visit for more information about this application
   */
  projectUrl: string | null;

  /**
   * The URL for the icon for this application
   */
  iconUrl: string | null;

  /**
   * The ID of the user who created this application
   */
  createdUserId: string;

  /**
   * The ID of the user who last modified this application
   */
  modifiedUserId: string;

  /**
   * The date this application was created
   */
  created: string;

  /**
   * The date this application was last modified
   */
  modified: string;

  /**
   * Flag indicating if the application is active.
   */
  isActive: boolean;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The B2C Client ID of the application
   */
  b2CClientId: string | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Application` and the `ObjectKey` set to the `ApplicationId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Application` and the `ObjectKey` set to the `ApplicationId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Application` and the `ObjectKey` set to the `ApplicationId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Application` and the `ObjectKey` set to the `ApplicationId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * A collection of app enrollments linked to this record.  To retrieve this collection, specify
   * `Enrollments` in the `include` parameter when retrieving data.
   *
   * To create an app enrollment, use the [Create App Enrollment](https://developer.lockstep.io/reference/v1_appenrollments_createappenrollments)
   * endpoint with the `AppId` set to the `ApplicationId` for this record and associated auth connection info for the record.
   *
   * For more information on extensibility, see [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments).
   */
  enrollments: AppEnrollmentModel[] | null;
};
