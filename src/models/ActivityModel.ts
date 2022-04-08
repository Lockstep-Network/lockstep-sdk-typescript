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


/**
 * An Activity contains information about work being done on a specific accounting task.
 * You can use Activities to track information about who has been assigned a specific task,
 * the current status of the task, the name and description given for the particular task,
 * the priority of the task, and any amounts collected, paid, or credited for the task.
 */
export type ActivityModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  activityId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID of the company to which this activity belongs.
   */
  companyId: string;

  /**
   * The type code of the activity
   */
  activityTypeCode: string | null;

  /**
   * The name of the activity.  The name is a short name provided by the
   * person who created the activity that can be displayed in a list.
   */
  activityName: string;

  /**
   * A description of the activity.  This field contains more detailed text about the
   * activity and can be lengthy.
   */
  activityDescription: string | null;

  /**
   * The status of the activity.
   */
  activityStatus: string | null;

  /**
   * True if this activity is currently "open", which indicates that the activity is
   * currently in progress.
   */
  isOpen: boolean;

  /**
   * The priority of the activity.
   */
  priority: string | null;

  /**
   * The ID of the user the activity is assigned to.
   */
  userAssignedTo: string | null;

  /**
   * The date the activity was assigned.
   */
  dateAssigned: string | null;

  /**
   * The date the activity was closed.
   */
  dateClosed: string | null;

  /**
   * If this activity has been "snoozed", this field will be non-null and will contain
   * the date when the activity will be displayed.  Until that date arrives, the activity
   * will remain hidden.
   */
  snoozeUntilDate: string | null;

  /**
   * The date on which this activity was created.
   */
  created: string;

  /**
   * The ID of the user who created this activity.
   */
  createdUserId: string;

  /**
   * The date on which this activity was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified this activity.
   */
  modifiedUserId: string;

  /**
   * Amount collected (if any) for the activity.
   */
  amountCollected: number | null;

  /**
   * Amount paid (if any) for the activity.
   */
  amountPaid: number | null;

  /**
   * Credit given (if any) for the activity.
   */
  creditGiven: number | null;

  /**
   * True if this activity is to be shown in an "unread" state.  When an activity
   * is read by a person it is assigned to, this flag is set to false.
   */
  isUnread: boolean;

  /**
   * Activities may be archived when they should be hidden from the user.  When
   * this flag is true, this activity should be hidden.
   */
  isArchived: boolean;

  /**
   * The company associated with the activity
   *
   * To retrieve this collection, specify `Company` in the "Include" parameter for your query.
   */
  company: CompanyModel | null;

  /**
   * The name of the user the activity is assigned to
   */
  userAssignedToName: string | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Activity` and the `ObjectKey` set to the `ActivityId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Activity` and the `ObjectKey` set to the `ActivityId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Activity` and the `ObjectKey` set to the `ActivityId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Activity` and the `ObjectKey` set to the `ActivityId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * All references attached to this applied activity.
   *
   * To retrieve this collection, specify `References` in the "Include" parameter for your query.
   */
  references: ActivityXRefModel[] | null;
};
