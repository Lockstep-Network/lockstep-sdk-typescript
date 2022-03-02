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

/**
 * Represents an item belonging to the activity stream.
 */
export type ActivityStreamItemModel = {

  /**
   * The object key of the activity stream item.
   */
  objectKey: string;

  /**
   * The type code of the activity stream item.
   */
  activityStreamType: string | null;

  /**
   * The text body description for this Activity Stream Item.
   */
  textValue: string | null;

  /**
   * The date on which this activity stream item was created.
   */
  created: string;

  /**
   * The ID of the user who created this activity.
   */
  createdUserId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The sender's email address if activity stream item is an Email.
   */
  fromEmailAddress: string | null;

  /**
   * The recipient's email address if activity stream item is an Email.
   */
  toEmailAddress: string | null;

  /**
   * The name of the contact sending the activity otherwise null.
   */
  fromContactName: string | null;

  /**
   * The name of the contact sending the activity otherwise null.
   */
  toContactName: string | null;
};

/**
 * Represents links between an Activity and another record.
 */
export type ActivityXRefModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this is
   * added to the Lockstep platform.
   */
  activityXRefId: string;

  /**
   * The ID of the activity to which this reference belongs.
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
   * The name of the table the activity reference is associated with
   */
  tableKey: string | null;

  /**
   * The ID of the object the activity reference is associated with
   */
  objectKey: string | null;
};

/**
 * Represents an aging record
 */
export type AgingModel = {

  /**
   * Aging bucket of outstanding balance data (days past due date of invoice)
   */
  bucket: number;

  /**
   * Currency code of aging bucket
   */
  currencyCode: string | null;

  /**
   * Outstanding balance for the given aging bucket
   */
  outstandingBalance: number;
};

/**
 * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys
 * do not have an expiration date, they are well suited for unattended processes.  Each API Key
 * is associated with a user, and may be revoked to prevent it from accessing the Lockstep API.
 * When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot
 * retrieve an API Key once it is created.
 *
 * For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
 */
export type ApiKeyModel = {

  /**
   * The unique identifier for the API key.
   */
  apiKeyId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the API key.
   */
  name: string;

  /**
   * For convenience, a call to createApiKey will contain the name of the environment for this API key,
   * typically SBX or PRD. This can help you distinguish between keys created on the Sandbox environment
   * from those created on Production.
   */
  environment: string | null;

  /**
   * The API key to use for authentication. This will only be returned upon creation of the API key.
   * All other times, this value will be `null`.
   *
   * For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
   */
  apiKey: string | null;

  /**
   * The first 10 characters of the API key.  This information can be used to ensure that you are
   * looking at the correct API Key, but cannot be used for authentication.
   */
  keyPrefix: string | null;

  /**
   * The date the API key was created.
   */
  created: string;

  /**
   * The user that created the API key.
   */
  createdUserId: string;

  /**
   * The date the API key was revoked.
   */
  revoked: string | null;

  /**
   * The user who revoked the API key.
   */
  revokedUserId: string | null;

  /**
   * The UTC datetime when the API key expires.
   */
  expires: string | null;
};

/**
 * App enrollment and custom field merged into one
 */
export type AppEnrollmentCustomFieldModel = {

  /**
   * Unique id for the app enrollment
   */
  appEnrollmentId: string;

  /**
   * Id of enrolled app
   */
  appId: string;

  /**
   * The name of the application
   */
  name: string | null;

  /**
   * Tag for what type of app the application is
   */
  appType: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Unique Id for the custom field definition
   */
  customFieldDefinitionId: string;

  /**
   * Text to display in-application for custom field
   */
  customFieldLabel: string | null;

  /**
   * Data type of the custom field definition
   */
  dataType: string | null;

  /**
   * Used for display logic when multiple app enrollment custom fields exist
   */
  sortOrder: number;

  /**
   * String of data for field
   */
  stringValue: string | null;

  /**
   * Number data for field
   */
  numericValue: number | null;
};

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
  name: string | null;

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
   * The description of the price for this application
   */
  priceTerms: string | null;

  /**
   * The ID of the user who created this application
   */
  createdUserId: string | null;

  /**
   * The ID of the user who last modified this application
   */
  modifiedUserId: string | null;

  /**
   * The date this application was created
   */
  created: string | null;

  /**
   * The date this application was last modified
   */
  modified: string | null;

  /**
   * Flag indicating if the application is active.
   */
  isActive: boolean;

  /**
   * URL to the Wiki for the Application
   */
  wikiURL: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

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
};

/**
 * Aggregated Accounts Receivable Aging information.
 */
export type ArAgingHeaderInfoModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The aging bucket this data belongs to.
   */
  reportBucket: string | null;

  /**
   * The total number of customers.
   */
  totalCustomers: number;

  /**
   * The total number of invoices outstanding.
   */
  totalInvoicesOutstanding: number;

  /**
   * The total amount outstanding.
   */
  totalOutstandingAmount: number;

  /**
   * The total amount for AR.
   */
  totalArAmount: number;

  /**
   * Portion of Total AR this data represents.
   */
  percentageOfTotalAr: number;
};

/**
 * Aggregated Accounts Receivable information.
 */
export type ArHeaderInfoModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The date of the report
   */
  reportPeriod: string | null;

  /**
   * The total number of customers.
   */
  totalCustomers: number;

  /**
   * The total number of invoices.
   */
  totalInvoices: number;

  /**
   * The total amount invoiced.
   */
  totalInvoicedAmount: number;

  /**
   * The total number of unapplied payments.
   */
  totalUnappliedPayments: number;

  /**
   * The total amount of collected payments.
   */
  totalCollected: number;

  /**
   * The total accounts receivable amount.
   */
  totalArAmount: number;

  /**
   * The number of paid invoices.
   */
  totalInvoicesPaid: number;

  /**
   * The number of past due invoices.
   */
  totalInvoicesPastDue: number;

  /**
   * The number of past due invoices for the last 90 days.
   */
  totalInvoices90DaysPastDue: number;

  /**
   * The total amount past due.
   */
  totalPastDueAmount: number;

  /**
   * The total past due for the past 90 days.
   */
  totalPastDueAmount90Days: number;

  /**
   * Portion of Total AR that is Past due.
   */
  percentageOfTotalAr: number;

  /**
   * Daily sales outstanding.
   */
  dso: number;

  /**
   * The total amount invoiced, due this year.
   */
  totalInvoiceAmountCurrentYear: number;

  /**
   * The total amount invoiced, due last year.
   */
  totalInvoiceAmountPreviousYear: number;

  /**
   * The total of all payments received this year.
   */
  totalPaymentAmountCurrentYear: number;

  /**
   * The total amount of payments received in the last 30 days
   */
  totalCollectedPastThirtyDays: number;

  /**
   * The total amount of Invoices paid in the last 30 days
   */
  totalInvoicesPaidPastThirtyDays: number;

  /**
   * Portion of Total AR that is 90+ days Past due.
   */
  percentageOfTotalAr90DaysPastDue: number;
};

/**
 * Contains summarized data for an invoice
 */
export type AtRiskInvoiceSummaryModel = {

  /**
   * The date of the report
   */
  reportDate: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string | null;

  /**
   * The unique ID number of this invoice.
   */
  invoiceId: string;

  /**
   * A reference code that is used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  invoiceNumber: string | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The name of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerName: string | null;

  /**
   * The status of the invoice.
   */
  status: string | null;

  /**
   * The due date of the invoice.
   */
  paymentDueDate: string | null;

  /**
   * The total amount of the Invoice.
   */
  invoiceAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalance: number | null;

  /**
   * A code identifying the type of this Invoice.
   */
  invoiceTypeCode: string | null;

  /**
   * The date stamp for the newest Activity on this Invoice.
   */
  newestActivity: string | null;

  /**
   * The number of days this Invoice is past due.
   */
  daysPastDue: number | null;

  /**
   * The memo text of the payments associated to this invoice.
   */
  paymentNumbers: string[] | null;

  /**
   * The ids of the payments associated to this invoice.
   */
  paymentIds: string[] | null;
};

/**
 * Aggregated Attachment status information.
 */
export type AttachmentHeaderInfoModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The CompanyId associated with the attachment status report. Providing a null value will
   * return an attachment summary for all attachments associated to the provided GroupKey
   */
  companyId: string | null;

  /**
   * The total number of attachments associated with the provided GroupKey and CompanyId.
   */
  totalAttachments: number;

  /**
   * The total number of archived attachments associated with the provided GroupKey and CompanyId.
   */
  totalArchived: number;

  /**
   * The total number of active attachments associated with the provided GroupKey and CompanyId.
   */
  totalActive: number;
};

/**
 * Represents a user uploaded attachment
 */
export type AttachmentModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  attachmentId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the table the attachment is associated with
   */
  tableKey: string | null;

  /**
   * The ID of the object the attachment is associated with
   */
  objectKey: string;

  /**
   * Name of the file
   */
  fileName: string | null;

  /**
   * Extension type of the file
   */
  fileExt: string | null;

  /**
   * Corresponding AttachmentType object to describe this attachment
   */
  attachmentTypeId: string;

  /**
   * Flag indicating the attachment was archived
   */
  isArchived: boolean;

  /**
   * Tracks the original record for this attachment, not currently used.
   */
  originAttachmentId: string;

  /**
   * Flag for if LS clients can see this file
   */
  viewInternal: boolean;

  /**
   * Flag for if Vendors and customers can see this file
   */
  viewExternal: boolean;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported from a financial system, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The date the attachment was created
   */
  created: string;

  /**
   * Id of the user who made the file
   */
  createdUserId: string;
};

/**
 * A BatchSyncModel contains a collection of records to load into the Lockstep Platform.  Data contained
 * in this batch will be merged with your existing data.  Each record will be matched with existing data inside
 * the Lockstep Platform using the [Identity Column](https://developer.lockstep.io/docs/identity-columns) rules.
 * Any record that represents a new AppEnrollmentId+ErpKey will be inserted.  A record that matches an existing
 * AppEnrollmentId+ErpKey will be updated, but only if the data has changed.
 *
 * A Sync process permits either a complete data file or a partial / delta data file.  Lockstep recommends
 * using a sliding time window to avoid the risk of clock skew errors that might accidentally omit records.
 * Best practice is to run a Sync process daily, and to export all data that has changed in the past 48 hours.
 */
export type BatchSyncModel = {

  /**
   * A list of Company records to merge with your Lockstep Platform data
   */
  companies: CompanySyncModel[] | null;

  /**
   * A list of Contact records to merge with your Lockstep Platform data
   */
  contacts: ContactSyncModel[] | null;

  /**
   * A list of CreditMemoApplied records to merge with your Lockstep Platform data
   */
  creditMemoApplications: CreditMemoAppliedSyncModel[] | null;

  /**
   * A list of Invoice records to merge with your Lockstep Platform data
   */
  invoices: InvoiceSyncModel[] | null;

  /**
   * A list of InvoiceLine records to merge with your Lockstep Platform data
   */
  invoiceLines: InvoiceLineSyncModel[] | null;

  /**
   * A list of CustomField records to merge with your Lockstep Platform data
   */
  customFields: CustomFieldSyncModel[] | null;

  /**
   * A list of Payment records to merge with your Lockstep Platform data
   */
  payments: PaymentSyncModel[] | null;

  /**
   * A list of PaymentApplied records to merge with your Lockstep Platform data
   */
  paymentApplications: PaymentAppliedSyncModel[] | null;
};

/**
 * Input format used for bulk conversion route
 */
export type BulkCurrencyConversionModel = {

  /**
   * The date for the currency rate
   */
  date: string;

  /**
   * The currency code This will be validated by the /api/v1/currencies data set
   */
  sourceCurrency: string;
};

/**
 * Represents the cashflow report based on a timeframe
 */
export type CashflowReportModel = {

  /**
   * Timeframe in days the cashflow report is generated on
   */
  timeframe: number;

  /**
   * Amount of payments collected based in the timeframe
   */
  paymentsCollected: number;

  /**
   * Number of payments collected based in the timeframe
   */
  paymentsCollectedCount: number;

  /**
   * Amount of invoices billed based in the timeframe
   */
  invoicesBilled: number;

  /**
   * Number of invoices billed in the timeframe
   */
  invoicesBilledCount: number;
};

/**
 * Represents a Code Definition.  Codes can be used as shortened, human readable strings.
 * Additionally, this table can be used to store lists of system values for Lockstep objects.
 */
export type CodeDefinitionModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  codeDefinitionId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The type of the Code Definition
   */
  codeType: string | null;

  /**
   * The Code to be defined.
   */
  code: string | null;

  /**
   * The definition of the Code
   */
  codeDescription: string | null;

  /**
   * The date that the Code Definition was created
   */
  created: string;

  /**
   * The ID of the user who created the Code Definition
   */
  createdUserId: string;

  /**
   * The date the Code Definition was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified the Code Definition
   */
  modifiedUserId: string;
};

/**
 * A Company represents a customer, a vendor, or a company within the organization of the account holder.
 * Companies can have parents and children, representing an organizational hierarchy of corporate entities.
 * You can use Companies to track projects and financial data under this Company label.
 *
 * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
 */
export type CompanyModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  companyId: string;

  /**
   * The short name of the company.
   */
  companyName: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * This field indicates the type of company.  It can be one of a limited number of values:
   * Company, Customer, Group, Vendor, or Third Party.  A company that represents both a customer and a vendor
   * is identified as a CustomerVendor.
   *
   * * `Company` - This record represents a company that is part of the organization of the account holder.
   * * `Customer` - This record represents a business entity that purchases things from the account holder.
   * * `Group` - Only one record of type `GROUP` exists in each account.  Contains your account profile.
   * * `Vendor` - This record represents a business entity that sells things to the account holder.
   * * `Third Party` - This record represents a business entity that is neither a customer nor vendor.
   * * `CustomerVendor` - Both a customer and a vendor.
   */
  companyType: string | null;

  /**
   * The status of the company.  Companies can be either `Active` or `Inactive`.  When matched to a
   * Lockstep corporate profile, this value will change to reflect that this record will be kept
   * in sync with that company's identity.
   */
  companyStatus: string | null;

  /**
   * If this business entity is part of an organization, this value is non-null and it is set
   * to the `CompanyId` value of the parent company of this business entity.
   *
   * If this value is null, this business entity is a standalone.
   */
  parentCompanyId: string | null;

  /**
   * For convenience, this field indicates the top-level parent company.  This can be used
   * to jump directly to the top parent in complex organizational hierarchies.
   */
  enterpriseId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * This flag indicates whether the company is currently active.  An inactive company
   * should be hidden from the user interface but will still be available for querying.
   */
  isActive: boolean;

  /**
   * The default currency code used by this business entity.  This value can be overridden
   * for invoices in a different currency code.
   *
   * For a list of defined currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies)
   */
  defaultCurrencyCode: string | null;

  /**
   * The URL of this company's logo, if known.
   */
  companyLogoUrl: string | null;

  /**
   * The Lockstep `ContactId` of the primary contact for this company.
   */
  primaryContactId: string | null;

  /**
   * Address info
   */
  address1: string | null;

  /**
   * Address info
   */
  address2: string | null;

  /**
   * Address info
   */
  address3: string | null;

  /**
   * Address info
   */
  city: string | null;

  /**
   * Address info
   */
  stateRegion: string | null;

  /**
   * Address info
   */
  postalCode: string | null;

  /**
   * Address info
   */
  country: string | null;

  /**
   * Phone number
   */
  phoneNumber: string | null;

  /**
   * Fax number
   */
  faxNumber: string | null;

  /**
   * The date this company was created
   */
  created: string | null;

  /**
   * The ID of the user who created this company
   */
  createdUserId: string;

  /**
   * The date this company was last modified
   */
  modified: string | null;

  /**
   * The ID of the user who last modified this company
   */
  modifiedUserId: string;

  /**
   * The name of the user who last modified this company
   */
  modifiedUserName: string | null;

  /**
   * Federal Tax ID
   */
  taxId: string | null;

  /**
   * Dun and Bradstreet Number
   */
  dunsNumber: string | null;

  /**
   * AP (Accounts Payable) Email Address
   */
  apEmailAddress: string | null;

  /**
   * AR (Accounts Receivable) Email Address
   */
  arEmailAddress: string | null;

  /**
   * For companies that use a custom domain name for their email system, this is
   * the domain name used by this company.  If this value is known, new emails that
   * come in from this domain will be connected to this company.
   */
  domainName: string | null;

  /**
   * Identifier for classification of this company.
   */
  companyClassificationCodeDefId: string | null;

  /**
   * Description of the company.
   */
  description: string | null;

  /**
   * Website URL for this company.
   */
  website: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Company` and the `ObjectKey` set to the `CompanyId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Company` and the `ObjectKey` set to the `CompanyId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * All contacts attached to this company.
   *
   * To retrieve this collection, specify `Contacts` in the "Include" parameter for your query.
   */
  contacts: ContactModel[] | null;

  /**
   * All invoices attached to this company.
   *
   * To retrieve this collection, specify `Invoices` in the "Include" parameter for your query. For more information on Invoices, see [InvoiceModel](https://developer.lockstep.io/reference/get_api-v1-invoices-id).
   */
  invoices: object[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Company` and the `ObjectKey` set to the `CompanyId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Company` and the `ObjectKey` set to the `CompanyId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * Classification code definition for this company.
   *
   * To retrieve this collection, specify `Classification` in the "Include" parameter for your query.
   */
  companyClassificationCodeDefinition: CodeDefinitionModel | null;
};

/**
 * The CompanySyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the CompanySyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [CompanyModel](https://developer.lockstep.io/docs/companymodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type CompanySyncModel = {

  /**
   * This is the primary key of the Company record. For this field, you should use whatever the company's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your company records in a database, whatever the primary key for the company table is
   * in the database should be the `ErpKey`.
   *
   * Example: If you use a financial system such as Quickbooks or Xero, look for the primary ID number of the
   * company record within that financial system.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * A friendly, short name of the company.
   */
  companyName: string;

  /**
   * This field indicates the type of company. It can be one of a limited number of values: `Company`,
   * `Customer`, `Group`, `Vendor`, or `Third Party`. A company that represents both a customer and a vendor is
   * identified as a `CustomerVendor`.
   *
   * When loading data into Lockstep, you should focus on the distinction between a company that is part of
   * your own enterprise, or a company that is external to your enterprise.
   *
   * For a company that is within your enterprise, you should set this value to be `Company`.
   *
   * For a company that is external to your enterprise, you should set this value to either `Customer`,
   * `Vendor`, `Third Party`, or `CustomerVendor`.  If you don't know what value to choose, select
   * `CustomerVendor`.
   */
  companyType: string;

  /**
   * An optional field including status codes.  Defined status codes are `Active` and `Inactive`.
   */
  companyStatus: string | null;

  /**
   * If this company has a parent company, identify the parent company's `ErpKey` value here. This value should
   * be the original primary key or unique ID of the parent company to this company belongs. This value should
   * match the original ErpKey field on the parent company.
   *
   * If this company is not a child company, leave this field null.
   */
  parentCompanyErpKey: string | null;

  /**
   * This flag indicates whether the company is currently active. An inactive company will be hidden from the
   * user interface but will still be available for querying.
   */
  isActive: boolean;

  /**
   * The default currency code for transactions related to this company.  For a list of currency codes, see
   * [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies). This will be validated by the /api/v1/currencies data set
   */
  defaultCurrencyCode: string | null;

  /**
   * The URL of this company's logo, if known.
   */
  companyLogoUrl: string | null;

  /**
   * The `ErpKey` of the primary contact for this company.  This value should match the `ErpKey` value of the
   * [Importing Contacts](https://developer.lockstep.io/docs/importing-contacts) record for the contact table.
   */
  primaryContactErpKey: string | null;

  /**
   * The company's primary mailing address information
   */
  address1: string | null;

  /**
   * The company's primary mailing address information
   */
  address2: string | null;

  /**
   * The company's primary mailing address information
   */
  address3: string | null;

  /**
   * The company's primary mailing address information
   */
  city: string | null;

  /**
   * The company's primary mailing address information
   */
  stateRegion: string | null;

  /**
   * The company's primary mailing address information
   */
  postalCode: string | null;

  /**
   * The company's primary mailing address information This will be validated by the /api/v1/countries data set
   */
  country: string | null;

  /**
   * The main phone number of this company.
   */
  phoneNumber: string | null;

  /**
   * The main fax number of this company.
   */
  faxNumber: string | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;

  /**
   * The company's Tax ID number for the appropriate government for this company.
   */
  taxId: string | null;

  /**
   * The Dun and Bradstreet number for this company, if known.
   */
  dunsNumber: string | null;

  /**
   * If you know the AP (accounts payable) email address of this company, fill it in here. This is the email
   * address where you would send questions to the company if the company owed you money.
   */
  apEmailAddress: string | null;

  /**
   * If you know the AR (accounts receivable) email address of this company, fill it in here. This is the email
   * address where you would send questions to the company if you owed this company money.
   */
  arEmailAddress: string | null;
};

/**
 * Represents all possible data required to set up an app enrollment for a connector.
 * Only send required fields for the given connector.
 */
export type ConnectorInfoModel = {

  /**
   * The authorization code returned from the first step of the OAuth2 flow
   * https://oauth.net/2/grant-types/authorization-code/
   */
  authCode: string | null;

  /**
   * The realm id of the account being granted permissions to access
   */
  realmId: string | null;

  /**
   * The redirect uri used for step one of the OAuth2.0 flow.
   */
  redirectUri: string | null;

  /**
   * The email an email connection is being created for.
   */
  email: string | null;
};

/**
 * A Contact contains information about a person or role within a Company.
 * You can use Contacts to track information about who is responsible for a specific project,
 * who handles invoices, or information about which role at a particular customer or
 * vendor you should speak with about invoices.
 */
export type ContactModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  contactId: string;

  /**
   * The ID of the company to which this contact belongs.
   */
  companyId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this contact record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The name of the contact.
   */
  contactName: string | null;

  /**
   * A friendly human-readable code that describes this Contact.
   */
  contactCode: string | null;

  /**
   * The title of the contact.
   */
  title: string | null;

  /**
   * The role code for the contact.
   */
  roleCode: string | null;

  /**
   * The email address of the contact.
   */
  emailAddress: string | null;

  /**
   * The phone number of the contact.
   */
  phone: string | null;

  /**
   * The fax number of the contact.
   */
  fax: string | null;

  /**
   * The first line of the address.
   */
  address1: string | null;

  /**
   * The second line of the address.
   */
  address2: string | null;

  /**
   * The third line of the address.
   */
  address3: string | null;

  /**
   * The city of the address.
   */
  city: string | null;

  /**
   * The state/region of the address.
   */
  stateRegion: string | null;

  /**
   * The postal/zip code of the address.
   */
  postalCode: string | null;

  /**
   * The two character country code of the address. This will be validated by the /api/v1/countries data set
   */
  countryCode: string | null;

  /**
   * Flag indicating if the contact is active.
   */
  isActive: boolean;

  /**
   * The webpage url of the contact.
   */
  webpageUrl: string | null;

  /**
   * The picture/avatar url of the contact.
   */
  pictureUrl: string | null;

  /**
   * The date on which this record was created.
   */
  created: string | null;

  /**
   * The ID of the user who created this contact.
   */
  createdUserId: string;

  /**
   * The date on which this record was last modified.
   */
  modified: string | null;

  /**
   * The ID of the user who last modified this contact.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Contact` and the `ObjectKey` set to the `ContactId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Contact` and the `ObjectKey` set to the `ContactId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Contact` and the `ObjectKey` set to the `ContactId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Contact` and the `ObjectKey` set to the `ContactId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

/**
 * The ContactSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the ContactSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [ContactModel](https://developer.lockstep.io/docs/contactmodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type ContactSyncModel = {

  /**
   * This is the primary key of the Contact record. For this field, you should use whatever the contact's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your contact records in a database, whatever the primary key for the contact table is
   * in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the company to which this contact belongs.  This value should
   * match the [Company ErpKey](https://developer.lockstep.io/docs/importing-companies#erpkey) field on the
   * [CompanySyncModel](https://developer.lockstep.io/docs/importing-companies).
   */
  companyErpKey: string;

  /**
   * The name of the contact.
   */
  contactName: string;

  /**
   * A friendly human-readable code that describes this Contact.
   */
  contactCode: string | null;

  /**
   * The title of the contact.
   */
  title: string | null;

  /**
   * The role code for the contact.
   */
  roleCode: string | null;

  /**
   * The email address of the contact.
   */
  emailAddress: string | null;

  /**
   * The phone number of the contact.
   */
  phone: string | null;

  /**
   * The fax number of the contact.
   */
  fax: string | null;

  /**
   * The mailing address information for this contact.
   */
  address1: string | null;

  /**
   * The mailing address information for this contact.
   */
  address2: string | null;

  /**
   * The mailing address information for this contact.
   */
  address3: string | null;

  /**
   * The mailing address information for this contact.
   */
  city: string | null;

  /**
   * The mailing address information for this contact.
   */
  stateRegion: string | null;

  /**
   * The mailing address information for this contact.
   */
  postalCode: string | null;

  /**
   * The mailing address information for this contact. This will be validated by the /api/v1/countries data set
   */
  countryCode: string | null;

  /**
   * True if this contact is considered "active".
   */
  isActive: boolean;

  /**
   * A webpage URL for more information about this contact.
   */
  webpageUrl: string | null;

  /**
   * If available, the URL of a photograph that shows this contact.
   */
  pictureUrl: string | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};

/**
 * Country model for ISO-3166
 */
export type CountryModel = {

  /**
   * Name of the country
   */
  name: string | null;

  /**
   * 2 letter alphabetic code for the given country
   */
  alpha2: string | null;

  /**
   * 3 letter alphabetic code for the given country
   */
  alpha3: string | null;

  /**
   * Unique 3 digit number for the given country
   */
  countryCode: number;

  /**
   * Region of the country
   */
  region: string | null;

  /**
   * Subregion of the country
   */
  subRegion: string | null;

  /**
   * Intermediate region of the country
   */
  intermediateRegion: string | null;

  /**
   * Numeric code for a region
   */
  regionCode: number;

  /**
   * Numeric code for a subregion
   */
  subRegionCode: number;

  /**
   * Numeric code for an intermediate region
   */
  intermediateRegionCode: number;

  /**
   * French name of the country
   */
  frenchName: string | null;

  /**
   * A different name for a country
   */
  aliases: string | null;
};

/**
 * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds.
 * Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice,
 * Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied
 * as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid
 * using this Credit.
 */
export type CreditMemoAppliedModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  creditMemoAppliedId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The Lockstep ID of the Invoice to which this credit memo was applied.  This Invoice's outstanding balance
   * was reduced by the value of the field `CreditMemoAppliedAmount` on the date `ApplyToInvoiceDate`.
   *
   * Example: Company ABC received a credit memo, CM000123 for $500.  Company ABC then chooses to apply this
   * credit memo to reduce the balance of the invoice PO1000578.  The `InvoiceErpKey` is the Lockstep Platform
   * ID number of Invoice `PO1000578`.
   */
  invoiceId: string;

  /**
   * The Lockstep ID of the Invoice of type "Credit Memo" that was consumed in this payment application event.
   *
   * Example: Company ABC received a credit memo, CM000123 for $500.  Company ABC then chooses to apply this
   * credit memo to reduce the balance of the invoice PO1000578.  The `CreditMemoInvoiceId` is the Lockstep
   * Platform ID number of Invoice `CM000123`.
   */
  creditMemoInvoiceId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * Reference number for the applied credit memo.
   */
  entryNumber: number;

  /**
   * The date on which this credit memo was applied to the Invoice represented by `InvoiceId`.
   */
  applyToInvoiceDate: string;

  /**
   * The amount of the credit memo that was applied to the Invoice represented by `InvoiceId`.
   */
  creditMemoAppliedAmount: number;

  /**
   * Date credit memo applied record was created.
   */
  created: string;

  /**
   * The id of the user who created this applied credit memo.
   */
  createdUserId: string;

  /**
   * Date credit memo applied record was modified.
   */
  modified: string;

  /**
   * The id of the user who modified this applied credit memo.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

/**
 * The CreditMemoAppliedSyncModel represents information coming into Lockstep from an external financial system or
 * other enterprise resource planning system.  To import data from an external system, convert your original data
 * into the CreditMemoAppliedSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [CreditMemoAppliedModel](https://developer.lockstep.io/docs/creditmemoappliedmodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type CreditMemoAppliedSyncModel = {

  /**
   * This is the primary key of the Credit Memo Application record. For this field, you should use whatever this
   * transaction's unique identifying number is in the originating system. Search for a unique, non-changing
   * number within the originating financial system for this record.
   *
   * Since Credit Memo Applications are often considered transactions, a typical value to look for will be
   * the transaction ID number, the payment confirmation number, or some other record of this payment.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * This field indicates which Invoice had its balanced reduced by applying a credit memo.  In this field,
   * identify the original primary key or unique ID of the Invoice which had its balanced reduced.
   *
   * Example: Company ABC received a credit memo, CM000123 for $500.  Company ABC then chooses to apply this
   * credit memo to reduce the balance of the invoice PO1000578.  The `InvoiceErpKey` is `PO1000578`.
   */
  invoiceErpKey: string;

  /**
   * This field indicates which Invoice is the original credit memo that was used to make this payment
   * application event.  In this field, identify the original primary key or unique ID of the Invoice which
   * created the credit memo that was consumed in this event.
   *
   * Example: Company ABC received a credit memo, CM000123 for $500.  Company ABC then chooses to apply this
   * credit memo to reduce the balance of the invoice PO1000578.  The `CreditMemoInvoiceErpKey` is `CM000123`.
   */
  creditMemoInvoiceErpKey: string;

  /**
   * Reference number for the applied credit memo.
   */
  entryNumber: number;

  /**
   * The date on which this credit memo was applied to the Invoice.
   */
  applyToInvoiceDate: string;

  /**
   * The amount of this credit memo that was applied to this Invoice.
   */
  creditMemoAppliedAmount: number;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};

/**
 * Contains information about a credit memo invoice
 */
export type CreditMemoInvoiceModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  creditMemoAppliedId: string;

  /**
   * The id of the invoice
   */
  invoiceId: string;

  /**
   * The id of the credit memo invoice
   */
  creditMemoInvoiceId: string;

  /**
   * Date invoice applied to credit memo.
   */
  applyToInvoiceDate: string | null;

  /**
   * Amount applied to credit memo.
   */
  creditMemoAppliedAmount: number;

  /**
   * An additional reference code that is sometimes used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * The ID number of the company that created this invoice.
   */
  companyId: string | null;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string | null;

  /**
   * A code identifying the status of this invoice.
   */
  invoiceStatusCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalanceAmount: number | null;
};

/**
 * Represents an ISO-4217 currency code definition
 */
export type CurrencyModel = {

  /**
   * Alphabetic code for the given currency
   */
  alphaCode: string | null;

  /**
   * Numeric code for the given currency
   */
  numericCode: string | null;

  /**
   * Name of currency
   */
  currencyName: string | null;

  /**
   * Number of places after the decimal for this currency
   */
  minorUnit: number;

  /**
   * Symbol for the given currency
   */
  symbol: string | null;
};

/**
 * Represents a currency rate for specific currencies and date
 */
export type CurrencyRateModel = {

  /**
   * The source currency
   */
  sourceCurrency: string;

  /**
   * The destination currency
   */
  destinationCurrency: string;

  /**
   * The date for the currency rate
   */
  date: string;

  /**
   * The currency rate value
   */
  currencyRate: number | null;
};

/**
 * Contains customer details data
 */
export type CustomerDetailsModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this customer
   */
  customerId: string;

  /**
   * The unique ID of this customer
   */
  name: string | null;

  /**
   * Customer address info
   */
  address1: string | null;

  /**
   * Customer address info
   */
  address2: string | null;

  /**
   * Customer address info
   */
  address3: string | null;

  /**
   * Customer address info
   */
  city: string | null;

  /**
   * Customer address info
   */
  state: string | null;

  /**
   * Customer address info
   */
  postalCode: string | null;

  /**
   * Customer address country
   */
  country: string | null;

  /**
   * Customer phone number
   */
  phoneNumber: string | null;

  /**
   * Customer fax number
   */
  faxNumber: string | null;

  /**
   * Customer AR email address
   */
  email: string | null;

  /**
   * Customer primary contact id
   */
  contactId: string;

  /**
   * Customer primary contact name
   */
  contactName: string | null;

  /**
   * Customer primary contact email address
   */
  contactEmail: string | null;

  /**
   * Customer number of outstanding invoices
   */
  outstandingInvoices: number;

  /**
   * Customer total outstanding invoice amount
   */
  outstandingAmount: number;

  /**
   * Customer total past due amount
   */
  amountPastDue: number;

  /**
   * Customer payments collected
   */
  payments: CustomerDetailsPaymentModel[] | null;
};

/**
 * Customer payment collected information
 */
export type CustomerDetailsPaymentModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Unique identifier for payment
   */
  paymentId: string;

  /**
   * Unique identifier for payment applied
   */
  paymentAppliedId: string | null;

  /**
   * Payment type
   */
  paymentType: string | null;

  /**
   * Unique identifier for invoice payment is associated with
   */
  invoiceId: string | null;

  /**
   * Invoice type payment is associated with
   */
  invoiceTypeCode: string | null;

  /**
   * Invoice reference code payment is associated with
   */
  invoiceReferenceCode: string | null;

  /**
   * Invoice total amount payment is associated with
   */
  invoiceTotalAmount: number;

  /**
   * Date payment placed
   */
  paymentDate: string;

  /**
   * Amount payment was made for
   */
  paymentAmount: number;
};

/**
 * Contains summarized data for a customer
 */
export type CustomerSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this company.
   */
  companyId: string;

  /**
   * The name of the company.
   */
  companyName: string | null;

  /**
   * The name of the primary contact.
   */
  primaryContact: string | null;

  /**
   * The number of outstanding invoices for this customer.
   */
  outstandingInvoices: number | null;

  /**
   * The number of open invoices.
   */
  totalInvoicesOpen: number | null;

  /**
   * The number of past due invoices.
   */
  totalInvoicesPastDue: number | null;

  /**
   * The number of closed invoices for this customer.
   */
  closedInvoices: number | null;

  /**
   * The total from collected payments.
   */
  amountCollected: number | null;

  /**
   * The total balance of outstanding invoices.
   */
  outstandingAmount: number | null;

  /**
   * The total amount past due for this customer.
   */
  amountPastDue: number | null;

  /**
   * The total value of unapplied Payments for this Customer.
   */
  unappliedPayments: number | null;

  /**
   * Portion of Total AR for this Customer that is Past due. (TotalPastDue / Total AR).
   */
  percentOfTotalAr: number | null;

  /**
   * Daily sales outstanding value for this Customer.
   */
  dso: number | null;

  /**
   * The date stamp for the newest Activity on this Customer.
   */
  newestActivity: string | null;
};

/**
 * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a
 * core definition for each object.  The core definition is intended to represent a level of compatibility
 * that provides support across most accounting systems and products.  When a user or developer requires
 * information beyond this core definition, you can use Custom Fields to represent this information.
 *
 * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
 */
export type CustomFieldDefinitionModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  customFieldDefinitionId: string;

  /**
   * Table to which this definition belongs
   */
  tableKey: string | null;

  /**
   * Id of app this definition belongs to
   */
  appId: string | null;

  /**
   * Text to display in-application for custom field
   */
  customFieldLabel: string | null;

  /**
   * Data type of this definition
   */
  dataType: string | null;

  /**
   * Used for display logic when multiple custom fields exist
   */
  sortOrder: number;

  /**
   * Date created
   */
  created: string;

  /**
   * Id of user who created this definition
   */
  createdUserId: string;

  /**
   * Date modified
   */
  modified: string;

  /**
   * Id of user who modified this definition
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;
};

/**
 * The CustomFieldSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  [Custom Fields](https://developer.lockstep.io/docs/custom-fields#custom-fields)
 * represent custom data extensions that you can use with the Lockstep Platform.  If you need to store extra
 * information about an object that does not match Lockstep's official schema, you can store it in the Custom
 * Field system using CustomFieldSyncModel.
 *
 * To store a custom field for an object, create a CustomFieldSyncModel record containing the `EntityType` and
 * `ErpKey` of the entity to which you will attach a custom field. Next specify the field's `CustomFieldLabel`
 * and either a `StringValue` or `NumericValue`.
 *
 * Once imported, this record will be available in the Lockstep API as a [CustomFieldValueModel](https://developer.lockstep.io/docs/customfieldvaluemodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type CustomFieldSyncModel = {

  /**
   * This is the primary key of the record to which you will attach this custom field. You should provide the
   * identifying number as it is stored in the originating financial system. Search for a unique, non-changing
   * number within the originating financial system for this record.
   *
   * Custom Fields are identified by the `EntityType` and `ErpKey` values together.
   *
   * Example: You have an invoice whose ID number is 100047878, and you wish to store a custom field on that
   * invoice named "ApprovalStatusCode".  For the `ErpKey` field, specify the value `100047878`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * Custom Fields are identified by the `EntityType` and `ErpKey` values together.
   *
   * Example: You have an invoice whose ID number is 100047878, and you wish to store a custom field on that
   * invoice named "ApprovalStatusCode".  For the `EntityType` field, specify the value `Invoice`.
   *
   * Recognized types include:
   * * `Company` - Link this custom field to a CompanySyncModel
   * * `Contact` - Link this custom field to a ContactSyncModel
   * * `Invoice` - Link this custom field to an InvoiceSyncModel
   * * `InvoiceLine` - Link this custom field to an InvoiceLineSyncModel
   * * `Payment` - Link this custom field to a PaymentSyncModel
   */
  entityType: string;

  /**
   * A label that uniquely identifies this custom field within your software.
   *
   * Example: You have an invoice whose ID number is 100047878, and you wish to store a custom field on that
   * invoice named "ApprovalStatusCode".  For the `CustomFieldLabel` field, specify the value `ApprovalStatusCode`.
   */
  customFieldLabel: string;

  /**
   * The value of this custom field.
   */
  value: string | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};

/**
 * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a
 * core definition for each object.  The core definition is intended to represent a level of compatibility
 * that provides support across most accounting systems and products.  When a user or developer requires
 * information beyond this core definition, you can use Custom Fields to represent this information.
 *
 * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
 */
export type CustomFieldValueModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  customFieldDefinitionId: string;

  /**
   * Additional key if source table doesn't have a unique id
   */
  recordKey: string;

  /**
   * Date created
   */
  created: string;

  /**
   * Id of user who created this value
   */
  createdUserId: string;

  /**
   * Date modified
   */
  modified: string;

  /**
   * Id of user who modified this value
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this attachment record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The value of this custom field.
   */
  value: string | null;

  /**
   * Definition of the value
   */
  customFieldDefinition: CustomFieldDefinitionModel | null;
};

/**
 * Represents the daily sales outstanding report
 */
export type DailySalesOutstandingReportModel = {

  /**
   * Timeframe (month) the daily sales outstanding values are associated with
   */
  timeframe: string;

  /**
   * Number of invoices the average daily sales outstanding is calculated on
   */
  invoiceCount: number;

  /**
   * Time (in days) between an invoice was completed paid off and when the invoice was issued
   */
  dailySalesOutstanding: number;
};

/**
 * Model containing information to create a new developer account.
 */
export type DeveloperAccountSubmitModel = {

  /**
   * The name of the developer.
   */
  name: string;

  /**
   * The email address of the developer.
   */
  email: string;

  /**
   * The company name of the developer.
   */
  companyName: string;
};

/**
 * An Email represents a communication sent from one company to another.  The creator of the email is identified
 * by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field.
 * The Email Model represents an email and a number of different metadata attributes related to the creation,
 * storage, and ownership of the email.
 */
export type EmailModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  emailId: string;

  /**
   * The unique ID number of this email's conversation thread.
   */
  threadId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the company that created this email.
   */
  companyId: string | null;

  /**
   * The email address for the sender of this email.
   */
  emailFrom: string | null;

  /**
   * The email address for the recipient(s) of this email.
   */
  emailTo: string | null;

  /**
   * The email address for the CC recipient(s) of this email
   */
  emailCC: string | null;

  /**
   * The subject line of this email.
   */
  emailSubject: string | null;

  /**
   * The body content of this email.
   */
  emailBody: string | null;

  /**
   * The date on which this email was sent.
   */
  sentDate: string | null;

  /**
   * A status flag indicating if this email is unread.
   */
  isUnread: boolean;

  /**
   * A status flag indicating if this email is priority status.
   */
  isPriority: boolean;

  /**
   * A status flag indicating if this email is marked as spam.
   */
  isSpam: boolean;

  /**
   * The date on which this email was created.
   */
  created: string;

  /**
   * The ID number of the user who created this email.
   */
  createdUserId: string;

  /**
   * A status flag indicating if this email is to be sent.
   */
  toBeSent: boolean;

  /**
   * The ID number of the customer that sent this email.
   */
  customerId: string | null;

  /**
   * The date on which this email was received.
   */
  receivedTimeStamp: string | null;

  /**
   * The date on which this email was opened.
   */
  openedTimestamp: string | null;

  /**
   * The number of times this email was viewed.
   */
  viewCount: number;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The id of the email in an external system if imported.
   */
  externalEmailId: string | null;

  /**
   * The id of the email thread in an external system if imported.
   */
  externalThreadId: string | null;

  /**
   * The email address(es) for the BCC recipient(s) of this email
   */
  emailBcc: string | null;

  /**
   * The type message being sent (New, Reply, Forward) or null for messages not being sent.
   */
  sendType: string | null;

  /**
   * The date on which this email was modified.
   * Email modification should only be done by internal services.
   */
  modified: string;

  /**
   * The ID of the user who modified this email.
   * Email modification should only be done by internal services.
   */
  modifiedUserId: string;

  /**
   * If the message being sent is a reply or a forward, the id of the the email being replied to or forwarded.
   * Otherwise null.
   */
  responseOriginId: string | null;

  /**
   * The email object associated with the response origin id.
   */
  responseOrigin: EmailModel | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Email` and the `ObjectKey` set to the `EmailId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Email` and the `ObjectKey` set to the `EmailId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Email` and the `ObjectKey` set to the `EmailId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Email` and the `ObjectKey` set to the `EmailId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

/**
 * Represents all the possible data sent as a part of the provisioning post.
 * Only send required fields for the given connector.
 */
export type ErpInfoDataModel = {

  /**
   * The authorization code returned from the first step of the OAuth2 flow
   * https://oauth.net/2/grant-types/authorization-code/
   */
  authCode: string | null;

  /**
   * The realm id of the account being granted permissions to access
   */
  realmId: string | null;

  /**
   * The redirect uri used for step one of the OAuth2.0 flow.
   */
  redirectUri: string | null;
};

/**
 * Represents the ERP object sent in a provisioning request
 */
export type ErpInfoModel = {

  /**
   * The id of the ERP's App
   */
  appId: string;

  /**
   * The data required to store for connector access
   */
  data: ConnectorInfoModel | null;
};

/**
 * Represents unsupported ERP systems
 */
export type ErpModel = {

  /**
   * Unique ID for this ERP
   */
  erpSystemId: string;

  /**
   * Name of ERP
   */
  name: string | null;

  /**
   * Flag to indicate if ERP is supported
   */
  isSupported: boolean;
};

/**
 * Represents a balance for a financial account for a given period of time.
 */
export type FinancialAccountBalanceHistoryModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  financialAccountBalanceHistoryId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The id of the Financial Account that this balance history is for.
   */
  financialAccountId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The financial year that this period falls under
   */
  financialYear: number;

  /**
   * The period number (1-12 or 1-13) that this balance history is for
   */
  periodNumber: number;

  /**
   * The start date of this period.
   */
  periodStartDate: string;

  /**
   * The end date of this period.
   */
  periodEndDate: string;

  /**
   * The status of this period. The status should be Closed if the books for this period have been closed,
   * if not the status should be Open. The status can also be Deleted if there was a recalculation that needed
   * to occur, for example due to a change in financial year settings.
   */
  status: string | null;

  /**
   * The current or end balance of this period.
   */
  balance: number;

  /**
   * The date on which this financial account balance history record was created.
   */
  created: string;

  /**
   * The ID number of the user who created this financial account balance history.
   */
  createdUserId: string;

  /**
   * The date on which this financial account balance history record was modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this financial account balance history.
   */
  modifiedUserId: string;
};

/**
 * An Financial account refers to records of assets, liabilities, income, expenses, and equity.
 */
export type FinancialAccountModel = {

  /**
   * The unique identifier for the Financial Account.
   */
  financialAccountId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The code for the Financial Account. Can either be a general ledger or
   * an account code.
   */
  code: string | null;

  /**
   * The External Id for the Financial Account.
   */
  erpKey: string | null;

  /**
   * The App Enrollment Id for the Financial Account.
   */
  appEnrollmentId: string | null;

  /**
   * The name of the Financial Account.
   */
  name: string | null;

  /**
   * The status of the Financial Account. Possible values are active,
   * inactive, deleted or archived.
   */
  status: string | null;

  /**
   * The cashflow type for the Financial Account. Examples include cash, financing, investment
   * or operation.
   */
  cashflowType: string | null;

  /**
   * The description for the Financial Account.
   */
  description: string | null;

  /**
   * The classification for the Financial Account. Possible values are Asset, Equity,
   * Expense, Liability or Revenue.
   */
  classification: string | null;

  /**
   * The category for the Financial Account. Examples include Current Asset, Current Liability, Common Stock
   */
  category: string | null;

  /**
   * The subcategory for the Financial Account. Examples include Cash, Property, Bank Loan, etc.
   */
  subcategory: string | null;

  /**
   * The date the FinancialAccount was created.
   */
  created: string;

  /**
   * The user that has created the Financial Account.
   */
  createdUserId: string;

  /**
   * The date the Financial Account was modified.
   */
  modified: string;

  /**
   * The user that has modified the Financial Account.
   */
  modifiedUserId: string;
};

/**
 * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to
 * calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync
 * or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
 */
export type FinancialYearSettingModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  financialYearSettingId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The type of financial year, either Calendar or Fiscal.
   */
  yearType: string | null;

  /**
   * Total number of periods in the year. For Calendar year types this should always be 12. For Fiscal year types
   * this can either be 12 or 13 for a 4 week 13 period year.
   */
  totalPeriods: number;

  /**
   * The start date of the financial year. Should be entered in MM-DD format.
   */
  startDate: string | null;

  /**
   * The end date of the financial year. Should be entered in MM-DD format.
   */
  endDate: string | null;

  /**
   * The date on which this financial year setting record was created.
   */
  created: string;

  /**
   * The ID number of the user who created this financial year setting.
   */
  createdUserId: string;

  /**
   * The date on which this financial year setting record was last modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this financial year setting.
   */
  modifiedUserId: string;
};

/**
 * Model containing information about a user for the invite/onboarding process.
 */
export type InviteDataModel = {

  /**
   * The email address of the invited user.
   */
  email: string | null;

  /**
   * The status of the user.
   */
  userStatus: string | null;
};

/**
 * Model from the User invite process
 */
export type InviteModel = {

  /**
   * The invited email address
   */
  email: string | null;

  /**
   * True if the invite was sent successfully
   */
  success: boolean;

  /**
   * The invited user, may be null if the user could not be invited
   */
  invitedUser: UserAccountModel | null;

  /**
   * The error message if the invite was not successful
   */
  errorMessage: string | null;
};

/**
 * Model to invite a new user to your accounting group
 */
export type InviteSubmitModel = {

  /**
   * The email address of the user to invite
   */
  email: string;
};

/**
 * Represents a single address for an invoice
 */
export type InvoiceAddressModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  invoiceAddressId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the invoice this address belongs to
   */
  invoiceId: string;

  /**
   * The first line of the address.
   */
  line1: string | null;

  /**
   * The second line of the address.
   */
  line2: string | null;

  /**
   * The third line of the address.
   */
  line3: string | null;

  /**
   * The name of the city for this address.
   */
  city: string | null;

  /**
   * The state or region part of this address.
   */
  region: string | null;

  /**
   * The postal code for this address.
   */
  postalCode: string | null;

  /**
   * The country for this address.
   */
  country: string | null;

  /**
   * The latitude of this address, if available.
   */
  latitude: number | null;

  /**
   * The longitude of this address, if available.
   */
  longitude: number | null;

  /**
   * The date on which this address record was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this address.
   */
  createdUserId: string | null;

  /**
   * The date on which this address record was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this address.
   */
  modifiedUserId: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;
};

/**
 * An Invoice represents a bill sent from one company to another.  The Lockstep Platform tracks changes to
 * each Invoice so that you can observe the changes over time.  You can view the InvoiceHistory list to
 * monitor and observe the changes of this Invoice and track the dates when changes occurred.
 */
export type InvoiceHistoryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID number of this invoice history entry.
   */
  invoiceHistoryId: string;

  /**
   * The unique ID of the Invoice represented by this history entry.  This ID was automatically assigned
   * by Lockstep to the Invoice record when it was added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  invoiceId: string;

  /**
   * The ID number of the company that created this invoice.
   */
  companyId: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The purchase order code as it exists in the user's ERP or accounting system.
   */
  purchaseOrderCode: string | null;

  /**
   * An additional reference code that is sometimes used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * A code identifying the salesperson responsible for writing this invoice.
   */
  salespersonCode: string | null;

  /**
   * A string identifying the salesperson responsible for writing this invoice.
   */
  salespersonName: string | null;

  /**
   * A code identifying the type of this invoice.
   */
  invoiceTypeCode: string | null;

  /**
   * A code identifying the status of this invoice.
   */
  invoiceStatusCode: string | null;

  /**
   * A code identifying the terms given to the purchaser.
   */
  termsCode: string | null;

  /**
   * If the customer negotiated any special terms different from the standard terms above, describe them here.
   */
  specialTerms: string | null;

  /**
   * The three-character ISO 4217 currency code used for this invoice. This will be validated by the /api/v1/currencies data set
   */
  currencyCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice.
   */
  salesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice.
   */
  discountAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalanceAmount: number | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The date when discounts were adjusted for this invoice.
   */
  discountDate: string | null;

  /**
   * The date when this invoice posted to the company's general ledger.
   */
  postedDate: string | null;

  /**
   * The date when the invoice was closed and finalized after completion of all payments and delivery of all products and
   * services.
   */
  invoiceClosedDate: string | null;

  /**
   * The date when the remaining outstanding balance is due.
   */
  paymentDueDate: string | null;

  /**
   * The date and time when this record was imported from the user's ERP or accounting system.
   */
  importedDate: string | null;

  /**
   * The ID number of the invoice's origination address
   */
  primaryOriginAddressId: string | null;

  /**
   * The ID number of the invoice's bill-to address
   */
  primaryBillToAddressId: string | null;

  /**
   * The ID number of the invoice's ship-to address
   */
  primaryShipToAddressId: string | null;

  /**
   * The date on which this invoice record was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this invoice.
   */
  createdUserId: string | null;

  /**
   * The date on which this invoice record was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this invoice.
   */
  modifiedUserId: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;
};

/**
 * Represents a line in an invoice
 */
export type InvoiceLineModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  invoiceLineId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the invoice this line belongs to.
   */
  invoiceId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system, if it was
   * different from the original `LineNumber`.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The line number of this line, as defined in the originating ERP or accounting system.  You can sort on this number to
   * get the original view of lines within the invoice.
   */
  lineNumber: string | null;

  /**
   * A code number identifying the product or service that is specified on this line.
   */
  productCode: string | null;

  /**
   * Description of this invoice line.
   */
  description: string | null;

  /**
   * For lines measured in a unit other than "quantity", this code indicates the measurement system for the quantity field.
   * If the line is measured in quantity, this field is null.
   */
  unitMeasureCode: string | null;

  /**
   * The price of a single unit for this line.
   */
  unitPrice: number;

  /**
   * The quantity of items for ths line.
   */
  quantity: number | null;

  /**
   * The number of items that have been shipped.
   */
  quantityShipped: number | null;

  /**
   * The number of items that has been received.
   */
  quantityReceived: number | null;

  /**
   * The total amount for this line.
   */
  totalAmount: number | null;

  /**
   * If this line is tax exempt, this code indicates the reason for the exemption.
   */
  exemptionCode: string | null;

  /**
   * If null, the products specified on this line were delivered on the same date as all other lines.
   * If not null, this line was delivered or finalized on a different date than the overall invoice.
   */
  reportingDate: string | null;

  /**
   * An optional ID number for the line's origin address.
   */
  overrideOriginAddressId: string | null;

  /**
   * An optional ID number for the line's bill to address.
   */
  overrideBillToAddressId: string | null;

  /**
   * An optional ID number for the line's ship to address.
   */
  overrideShipToAddressId: string | null;

  /**
   * The date on which this line was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this line.
   */
  createdUserId: string | null;

  /**
   * The date on which this line was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this line.
   */
  modifiedUserId: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `InvoiceLine` and the `ObjectKey` set to the `InvoiceLineId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `InvoiceLine` and the `ObjectKey` set to the `InvoiceLineId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;
};

/**
 * The InvoiceLineSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the InvoiceLineSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as an [InvoiceLineModel](https://developer.lockstep.io/docs/invoicelinemodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type InvoiceLineSyncModel = {

  /**
   * This is the primary key of the Invoice Line record. For this field, you should use whatever the contact's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your invoice line records in a database, whatever the primary key for the invoice
   * line table is in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the invoice to which this line belongs.  This value should
   * match the [Invoice ErpKey](https://developer.lockstep.io/docs/importing-invoices#erpkey) field on the
   * [InvoiceSyncModel](https://developer.lockstep.io/docs/importing-invoices).
   */
  invoiceErpKey: string;

  /**
   * The line number of this line, as defined in the originating ERP or accounting system.  You can sort on this number to
   * get the original view of lines within the invoice.
   */
  lineNumber: string;

  /**
   * A code number identifying the product or service that is specified on this line.
   */
  productCode: string | null;

  /**
   * Description of this invoice line.
   */
  description: string | null;

  /**
   * For lines measured in a unit other than "quantity", this code indicates the measurement system for the quantity field.
   * If the line is measured in quantity, this field is null.
   */
  unitMeasureCode: string | null;

  /**
   * The price of a single unit for this line.
   */
  unitPrice: number | null;

  /**
   * The quantity of items for ths line.
   */
  quantity: number | null;

  /**
   * The number of items that have been shipped.
   */
  quantityShipped: number | null;

  /**
   * The number of items that has been received.
   */
  quantityReceived: number | null;

  /**
   * The total amount for this line.
   */
  totalAmount: number | null;

  /**
   * If this line is tax exempt, this code indicates the reason for the exemption.
   */
  exemptionCode: string | null;

  /**
   * If null, the products specified on this line were delivered on the same date as all other lines.
   * If not null, this line was delivered or finalized on a different date than the overall invoice.
   */
  reportingDate: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLine1: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLine2: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLine3: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressCity: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressRegion: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressPostalCode: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address This will be validated by the /api/v1/countries data set
   */
  originAddressCountry: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLatitude: number | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLongitude: number | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLine1: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLine2: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLine3: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressCity: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressRegion: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressPostalCode: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address This will be validated by the /api/v1/countries data set
   */
  billToAddressCountry: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLatitude: number | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLongitude: number | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLine1: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLine2: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLine3: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressCity: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressRegion: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressPostalCode: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address This will be validated by the /api/v1/countries data set
   */
  shipToAddressCountry: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLatitude: number | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLongitude: number | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};

/**
 * An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified
 * by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most
 * invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was
 * generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when
 * some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be
 * different.
 */
export type InvoiceModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  invoiceId: string;

  /**
   * The ID number of the company that created this invoice.
   */
  companyId: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The "Purchase Order Code" is a code that is sometimes used by companies to refer to the original PO
   * that was sent that caused this invoice to be written.  If a customer sends a purchase order to a vendor,
   * the vendor can then create an invoice and refer back to the originating purchase order using this field.
   */
  purchaseOrderCode: string | null;

  /**
   * An additional reference code that is sometimes used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * A code identifying the salesperson responsible for writing this quote, invoice, or order.
   */
  salespersonCode: string | null;

  /**
   * A name identifying the salesperson responsible for writing this quote, invoice, or order.
   */
  salespersonName: string | null;

  /**
   * A code identifying the type of this invoice.
   *
   * Recognized Invoice types are:
   * * `Invoice` - Represents an invoice sent by Company to the Customer
   * * `AP Invoice` - Represents an invoice sent by Customer to the Company
   * * `Credit Memo` - Represents a credit memo generated by Customer given to Company
   */
  invoiceTypeCode: string | null;

  /**
   * A code identifying the status of this invoice.
   *
   * Recognized Invoice status codes are:
   * * `Open` - Represents an invoice that is considered open and needs more work to complete
   * * `Closed` - Represents an invoice that is considered closed and resolved
   */
  invoiceStatusCode: string | null;

  /**
   * A code identifying the terms given to the purchaser.  This field is imported directly from the originating
   * financial system and does not follow a specified format.
   */
  termsCode: string | null;

  /**
   * If the customer negotiated any special terms different from the standard terms above, describe them here.
   */
  specialTerms: string | null;

  /**
   * The three-character ISO 4217 currency code used for this invoice.
   */
  currencyCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice.
   */
  salesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice.
   */
  discountAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalanceAmount: number | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The date when discounts were adjusted for this invoice.
   */
  discountDate: string | null;

  /**
   * The date when this invoice posted to the company's general ledger.
   */
  postedDate: string | null;

  /**
   * The date when the invoice was closed and finalized after completion of all payments and delivery of all products and
   * services.
   */
  invoiceClosedDate: string | null;

  /**
   * The date when the remaining outstanding balance is due.
   */
  paymentDueDate: string | null;

  /**
   * The date and time when this record was imported from the user's ERP or accounting system.
   */
  importedDate: string | null;

  /**
   * The ID number of the invoice's origination address
   */
  primaryOriginAddressId: string | null;

  /**
   * The ID number of the invoice's bill-to address
   */
  primaryBillToAddressId: string | null;

  /**
   * The ID number of the invoice's ship-to address
   */
  primaryShipToAddressId: string | null;

  /**
   * The date on which this invoice record was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this invoice.
   */
  createdUserId: string | null;

  /**
   * The date on which this invoice record was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this invoice.
   */
  modifiedUserId: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * Is the invoice voided?
   */
  isVoided: boolean;

  /**
   * Is the invoice in dispute?
   */
  inDispute: boolean;

  /**
   * Should the invoice be excluded from aging calculations?
   */
  excludeFromAging: boolean;

  /**
   * All addresses connected to this invoice.
   * To retrieve this collection, specify `Addresses` in the "Include" parameter for your query.
   */
  addresses: InvoiceAddressModel[] | null;

  /**
   * All lines attached to this invoice.
   * To retrieve this collection, specify `Lines` in the "Include" parameter for your query.
   */
  lines: InvoiceLineModel[] | null;

  /**
   * All payments attached to this invoice, the amount of the payment applied to this Invoice, and the date the Payment was applied.
   * To retrieve this collection, specify `Payments` in the "Include" parameter for your query.
   */
  payments: InvoicePaymentDetailModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * The Company associated to this invoice.
   * To retrieve this item, specify `Company` in the "Include" parameter for your query.
   */
  company: CompanyModel | null;

  /**
   * The Customer associated to the invoice customer
   * To retrieve this item, specify `Customer` in the "Include" parameter for your query.
   */
  customer: CompanyModel | null;

  /**
   * The Contact associated to the invoice customer
   * To retrieve this item, specify `Customer` in the "Include" parameter for your query.
   */
  customerPrimaryContact: ContactModel | null;

  /**
   * The credit memos associated to this invoice.
   * To retrieve this item, specify `CreditMemos` in the "Include" parameter for your query.
   */
  creditMemos: CreditMemoInvoiceModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
};

/**
 * View to return Payment Detail information for a given Invoice record.
 */
export type InvoicePaymentDetailModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique identifier of this PaymentApplied record.
   */
  paymentAppliedId: string;

  /**
   * The database id of the invoice
   */
  invoiceId: string;

  /**
   * The database id of the Payment.
   */
  paymentId: string;

  /**
   * Date Payment applied to Invoice.
   */
  applyToInvoiceDate: string | null;

  /**
   * Amount applied to Invoice.
   */
  paymentAppliedAmount: number;

  /**
   * An additional reference code that is sometimes used to identify this Payment.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * The ID number of the Company (CompanyType = "Customer") that created this Payment.
   */
  companyId: string | null;

  /**
   * The total value of this Payment.
   */
  paymentAmount: number | null;

  /**
   * The remaining balance value of this Payment.
   */
  unappliedAmount: number | null;
};

/**
 * Contains summarized data for an invoice
 */
export type InvoiceSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string | null;

  /**
   * The unique ID number of this invoice.
   */
  invoiceId: string;

  /**
   * A reference code that is used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  invoiceNumber: string | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The name of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerName: string | null;

  /**
   * The status of the invoice.
   */
  status: string | null;

  /**
   * The due date of the invoice.
   */
  paymentDueDate: string | null;

  /**
   * The total amount of the Invoice.
   */
  invoiceAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalance: number | null;

  /**
   * A code identifying the type of this Invoice.
   */
  invoiceTypeCode: string | null;

  /**
   * The date stamp for the newest Activity on this Invoice.
   */
  newestActivity: string | null;

  /**
   * The number of days this Invoice is past due.
   */
  daysPastDue: number | null;

  /**
   * The memo text of the payments associated to this invoice.
   */
  paymentNumbers: string[] | null;

  /**
   * The ids of the payments associated to this invoice.
   */
  paymentIds: string[] | null;
};

/**
 * The InvoiceSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the InvoiceSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as an [InvoiceModel](https://developer.lockstep.io/docs/invoicemodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type InvoiceSyncModel = {

  /**
   * This is the primary key of the Invoice record. For this field, you should use whatever the invoice's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your invoice records in a database, whatever the primary key for the invoice table is
   * in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the company to which this invoice belongs.  This value should
   * match the [Company ErpKey](https://developer.lockstep.io/docs/importing-companies#erpkey) field on the
   * [CompanySyncModel](https://developer.lockstep.io/docs/importing-companies).
   *
   * An Invoice has two relationships: The Company and the Customer.  The field `CompanyErpKey` identifies the
   * company that created the invoice, and the field `CustomerErpKey` is the customer to whom the invoice
   * was sent.
   */
  companyErpKey: string;

  /**
   * The original primary key or unique ID of the company to which this invoice was sent.  This value should
   * match the [Company ErpKey](https://developer.lockstep.io/docs/importing-companies#erpkey) field on the
   * [CompanySyncModel](https://developer.lockstep.io/docs/importing-companies).
   *
   * An Invoice has two relationships: The Company and the Customer.  The field `CompanyErpKey` identifies the
   * company that created the invoice, and the field `CustomerErpKey` is the customer to whom the invoice
   * was sent.
   */
  customerErpKey: string;

  /**
   * The name of the salesperson that wrote this invoice.  This is just text, it is not a reference to the
   * "Contacts" table.  You will not receive an error if this field does not match a known contact person.
   */
  salespersonName: string | null;

  /**
   * The "Purchase Order Code" is a code that is sometimes used by companies to refer to the original PO
   * that was sent that caused this invoice to be written.  If a customer sends a purchase order to a vendor,
   * the vendor can then create an invoice and refer back to the originating purchase order using this field.
   */
  purchaseOrderCode: string | null;

  /**
   * An additional reference code that is sometimes used to identify this invoice. The meaning of this field
   * is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * A code identifying the salesperson responsible for writing this quote, invoice, or order.  This is just
   * text, it is not a reference to the "Contacts" table.  You will not receive an error if this field does
   * not match a known contact person.
   */
  salespersonCode: string | null;

  /**
   * A code identifying the type of this invoice.
   *
   * Recognized Invoice types are:
   * * `Invoice` - Represents an invoice sent by Company to the Customer
   * * `AP Invoice` - Represents an invoice sent by Customer to the Company
   * * `Credit Memo` - Represents a credit memo generated by Customer given to Company
   */
  invoiceTypeCode: string | null;

  /**
   * A code identifying the status of this invoice.
   *
   * Recognized Invoice status codes are:
   * * `Open` - Represents an invoice that is considered open and needs more work to complete
   * * `Closed` - Represents an invoice that is considered closed and resolved
   */
  invoiceStatusCode: string | null;

  /**
   * A code identifying the terms given to the purchaser.  This field is imported directly from the originating
   * financial system and does not follow a specified format.
   */
  termsCode: string | null;

  /**
   * If the customer negotiated any special terms different from the standard terms above, describe them here.
   */
  specialTerms: string | null;

  /**
   * The three-character ISO 4217 currency code used for this invoice. This will be validated by the /api/v1/currencies data set
   */
  currencyCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice.
   */
  salesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice.
   */
  discountAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalanceAmount: number | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The date when discounts were adjusted for this invoice.
   */
  discountDate: string | null;

  /**
   * The date when this invoice posted to the company's general ledger.
   */
  postedDate: string | null;

  /**
   * The date when the invoice was closed and finalized after completion of all payments and delivery of all products and
   * services.
   */
  invoiceClosedDate: string | null;

  /**
   * The date when the remaining outstanding balance is due.
   */
  paymentDueDate: string | null;

  /**
   * The date and time when this record was imported from the user's ERP or accounting system.
   */
  importedDate: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLine1: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLine2: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLine3: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressCity: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressRegion: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressPostalCode: string | null;

  /**
   * The origination address for this invoice This will be validated by the /api/v1/countries data set
   */
  originAddressCountry: string | null;

  /**
   * The origination address for this invoice
   */
  originAddressLatitude: number | null;

  /**
   * The origination address for this invoice
   */
  originAddressLongitude: number | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLine1: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLine2: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLine3: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressCity: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressRegion: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressPostalCode: string | null;

  /**
   * The billing address for this invoice This will be validated by the /api/v1/countries data set
   */
  billToAddressCountry: string | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLatitude: number | null;

  /**
   * The billing address for this invoice
   */
  billToAddressLongitude: number | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLine1: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLine2: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLine3: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressCity: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressRegion: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressPostalCode: string | null;

  /**
   * The shipping address for this invoice This will be validated by the /api/v1/countries data set
   */
  shipToAddressCountry: string | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLatitude: number | null;

  /**
   * The shipping address for this invoice
   */
  shipToAddressLongitude: number | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;

  /**
   * Is the invoice voided? If not specified, we assume the invoice is not voided.
   */
  isVoided: boolean | null;

  /**
   * Is the invoice in dispute? If not specified, we assume the invoice is not in dispute.
   */
  inDispute: boolean | null;
};

/**
 * Represents leads for creating new ERP connectors
 */
export type LeadModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  leadId: string;

  /**
   * Name of lead
   */
  name: string | null;

  /**
   * Name of company of lead
   */
  company: string | null;

  /**
   * Email of lead
   */
  email: string | null;

  /**
   * Requested ERP of lead
   */
  erpSystem: string | null;
};

/**
 * A note is a customizable text string that can be attached to various account attributes
 * within Lockstep. You can use notes for internal communication, correspondence with
 * clients, or personal reminders. The Note Model represents a note and a number of
 * different metadata attributes related to the creation, storage, and ownership of the note.
 *
 * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
 */
export type NoteModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  noteId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the table the note is associated with
   */
  tableKey: string | null;

  /**
   * The ID of the object the note is associated with
   */
  objectKey: string;

  /**
   * The text of the note
   */
  noteText: string | null;

  /**
   * The type of the note
   */
  noteType: string | null;

  /**
   * Flag indicating if the note has been archived
   */
  isArchived: boolean;

  /**
   * The date the note was created
   */
  created: string | null;

  /**
   * The ID of the user who created the note
   */
  createdUserId: string;

  /**
   * The name of the user who created the note
   */
  createdUserName: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The person to whom this note is intended for.
   */
  recipientName: string | null;
};

/**
 * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make
 * a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be
 * made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected
 * to which Payments and for which amounts.
 */
export type PaymentAppliedModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  paymentAppliedId: string;

  /**
   * The Invoice this payment is applied to.
   */
  invoiceId: string;

  /**
   * The Payment applied to the invoice.
   */
  paymentId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The entry number of this payment application.  This is often a journal entry number, confirmation code,
   * or other identifying field for this payment application.
   */
  entryNumber: number;

  /**
   * The date this payment was applied to this invoice.
   */
  applyToInvoiceDate: string;

  /**
   * The total amount that was applied to this Invoice from the Payment.
   */
  paymentAppliedAmount: number;

  /**
   * Date payment applied record was created.
   */
  created: string;

  /**
   * The id of the user who created this applied payment.
   */
  createdUserId: string;

  /**
   * Date payment applied record was modified.
   */
  modified: string;

  /**
   * The id of the user who modified this applied payment.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The invoice associated with this applied payment.
   */
  invoice: InvoiceModel | null;
};

/**
 * The PaymentAppliedSyncModel represents information coming into Lockstep from an external financial system or
 * other enterprise resource planning system.  To import data from an external system, convert your original data
 * into the PaymentAppliedSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [PaymentAppliedModel](https://developer.lockstep.io/docs/paymentappliedmodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type PaymentAppliedSyncModel = {

  /**
   * This is the primary key of the Payment Application record. For this field, you should use whatever this
   * transaction's unique identifying number is in the originating system. Search for a unique, non-changing
   * number within the originating financial system for this record.
   *
   * Since Payment Applications are often considered transactions, a typical value to look for will be
   * the transaction ID number, the payment confirmation number, or some other record of this payment.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * This field indicates which Invoice had its balance reduced by applying this payment.  In this field,
   * identify the original primary key or unique ID of the Invoice which had its balance reduced.
   *
   * This information lets you track how an invoice was paid. You can identify what proportion of an invoice's
   * balance was paid by which methods by joining this field to Invoices.
   *
   * This value should match the [Invoice ErpKey](https://developer.lockstep.io/docs/importing-invoices#erpkey)
   * field on the [InvoiceSyncModel](https://developer.lockstep.io/docs/importing-invoices).
   */
  invoiceErpKey: string;

  /**
   * This field indicates which Payment was used to provide the funds for this payment application. In this
   * field, identify the original primary key or unique ID of the Payment that was used for this payment
   * application.
   *
   * This information lets you track how an invoice was paid. You can identify what proportion of an payment's
   * balance was paid by which methods by joining this field to the Payment.
   *
   * This value should match the [Payment ErpKey](https://developer.lockstep.io/docs/importing-payments#erpkey)
   * field on the [PaymentSyncModel](https://developer.lockstep.io/docs/importing-payments).
   */
  paymentErpKey: string;

  /**
   * The entry number of this payment application.  This is often a journal entry number, confirmation code,
   * or other identifying field for this payment application.
   */
  entryNumber: number;

  /**
   * The date this payment was applied to this invoice.
   */
  applyToInvoiceDate: string;

  /**
   * The total amount that was applied to this Invoice from the Payment.
   */
  paymentAppliedAmount: number;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};

/**
 * Contains group level payment data.
 */
export type PaymentDetailHeaderModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The total number of Customers.
   */
  customerCount: number | null;

  /**
   * The total amount collected.
   */
  amountCollected: number | null;

  /**
   * The total unapplied amount.
   */
  unappliedAmount: number | null;

  /**
   * The number of paid invoices.
   */
  paidInvoiceCount: number | null;

  /**
   * The number of open invoices.
   */
  openInvoiceCount: number | null;
};

/**
 * Contains detailed information about a Payment.
 */
export type PaymentDetailModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this Payment.
   */
  paymentId: string;

  /**
   * The ID of the customer to which this Payment belongs.
   */
  customerId: string;

  /**
   * The name of the customer to which this Payment belongs.
   */
  customerName: string | null;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * The name of the Primary Contact for the Customer.
   */
  primaryContact: string | null;

  /**
   * The Email address of the Customer.
   */
  email: string | null;

  /**
   * Total amount of this Payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this Payment.
   */
  unappliedAmount: number;

  /**
   * The type of payment, Payment or AP Payment.
   */
  paymentType: string | null;

  /**
   * The date of this Payment.
   */
  paymentDate: string | null;

  /**
   * Payment post date.
   */
  postDate: string | null;

  /**
   * The phone number of the Customer's Primary Contact.
   */
  phone: string | null;

  /**
   * The fax number of the Customer's Primary Contact.
   */
  fax: string | null;

  /**
   * The first line of the address for the Customer's Primary Contact.
   */
  address1: string | null;

  /**
   * The second line of the address for the Customer's Primary Contact.
   */
  address2: string | null;

  /**
   * The third line of the address for the Customer's Primary Contact.
   */
  address3: string | null;

  /**
   * The city of the address for the Customer's Primary Contact.
   */
  city: string | null;

  /**
   * The state/region of the address for the Customer's Primary Contact.
   */
  stateRegion: string | null;

  /**
   * The postal/zip code of the address for the Customer's Primary Contact.
   */
  postalCode: string | null;

  /**
   * The 2 character country code of the address for the Customer's Primary Contact.
   */
  countryCode: string | null;
};

/**
 * A Payment represents money sent from one company to another.  A single payment may contain payments for
 * one or more invoices; it is also possible for payments to be made in advance of an invoice, for example,
 * as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of
 * the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a
 * Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated
 * the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which
 * represents a deposit that has been paid and not yet applied to an Invoice.
 */
export type PaymentModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  paymentId: string;

  /**
   * The ID of the company to which this payment belongs.
   */
  companyId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The type of payment, cash or check.
   *
   * Recognized PaymentType values are:
   * * `Cash` - A cash payment or other direct transfer.
   * * `Check` - A check payment.
   */
  paymentType: string;

  /**
   * Cash, check, credit card, wire transfer.
   *
   * Recognized TenderType values are:
   * * `Cash` - A cash payment or other direct transfer.
   * * `Check` - A check payment.
   * * `Credit Card` - A payment made via a credit card.
   * * `Wire Transfer` - A payment made via wire transfer from another financial institution.
   */
  tenderType: string;

  /**
   * True if this payment includes some unassigned amount that has not yet been applied to an invoice.  If this
   * value is true, the field `UnappliedAmount` will be nonzero.
   */
  isOpen: boolean;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * The date when this payment was received.  This typically is the date when an accounting employee recorded
   * that they received notification that the payment had occurred, whether they were notified by email, postal
   * mail, or financial transaction notification.
   */
  paymentDate: string;

  /**
   * The date when a payment was posted to a ledger.  This date is often determined by a company's accounting
   * practices and may be different than the date when the payment was received.  This date may be affected by
   * issues such as temporary holds on funds transferred, bank holidays, or other actions.
   */
  postDate: string;

  /**
   * Total amount of this payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this payment.  If this amount is nonzero, the field `IsOpen` will be true.
   */
  unappliedAmount: number;

  /**
   * The ISO 4217 currency code for this payment.
   *
   * For a list of ISO 4217 currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies). This will be validated by the /api/v1/currencies data set
   */
  currencyCode: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * The date on which this record was created.
   */
  created: string;

  /**
   * The ID of the user who created this payment.
   */
  createdUserId: string;

  /**
   * The date on which this record was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified this payment.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * Is the payment voided?
   */
  isVoided: boolean;

  /**
   * Is the payment in dispute?
   */
  inDispute: boolean;

  /**
   * All applications this payment is associated with.
   * To retrieve this collection, specify `Applications` in the "Include" parameter for your query.
   */
  applications: PaymentAppliedModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

/**
 * Contains summary information for a Payment
 */
export type PaymentSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The id of the payment
   */
  paymentId: string;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * The type of payment, Payment or AP Payment.
   */
  paymentType: string | null;

  /**
   * The date of this payment.
   */
  paymentDate: string | null;

  /**
   * Total amount of this payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this payment.
   */
  unappliedAmount: number;

  /**
   * The number of invoices associated to this payment.
   */
  invoiceCount: number | null;

  /**
   * The number of payments applied to this payment.
   */
  totalPaymentsApplied: number | null;

  /**
   * The reference codes of the invoices associated to this payment.
   */
  invoiceList: string[] | null;

  /**
   * The ids of the invoices associated to this payment.
   */
  invoiceIdList: string[] | null;

  /**
   * The name of the customer for this payment.
   */
  customerName: string | null;

  /**
   * The id of the customer for this payment.
   */
  customerId: string | null;
};

/**
 * The PaymentSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the PaymentSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [PaymentModel](https://developer.lockstep.io/docs/paymentmodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type PaymentSyncModel = {

  /**
   * This is the primary key of the Payment record. For this field, you should use whatever the payment's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your payment records in a database, whatever the primary key for the payment table is
   * in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the company to which this payment belongs.  This value should
   * match the [Company ErpKey](https://developer.lockstep.io/docs/importing-companies#erpkey) field on the
   * [CompanySyncModel](https://developer.lockstep.io/docs/importing-companies).
   */
  companyErpKey: string;

  /**
   * The type of payment, cash or check.
   *
   * Recognized PaymentType values are:
   * * `Cash` - A cash payment or other direct transfer.
   * * `Check` - A check payment.
   */
  paymentType: string | null;

  /**
   * Cash, check, credit card, wire transfer.
   *
   * Recognized TenderType values are:
   * * `Cash` - A cash payment or other direct transfer.
   * * `Check` - A check payment.
   * * `Credit Card` - A payment made via a credit card.
   * * `Wire Transfer` - A payment made via wire transfer from another financial institution.
   */
  tenderType: string | null;

  /**
   * True if this payment includes some unassigned amount that has not yet been applied to an invoice.  If this
   * value is true, the field `UnappliedAmount` will be nonzero.
   */
  isOpen: boolean;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * The date when this payment was received.  This typically is the date when an accounting employee recorded
   * that they received notification that the payment had occurred, whether they were notified by email, postal
   * mail, or financial transaction notification.
   */
  paymentDate: string;

  /**
   * The date when a payment was posted to a ledger.  This date is often determined by a company's accounting
   * practices and may be different than the date when the payment was received.  This date may be affected by
   * issues such as temporary holds on funds transferred, bank holidays, or other actions.
   */
  postDate: string;

  /**
   * Total amount of this payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this payment.  If this amount is nonzero, the field `IsOpen` will be true.
   */
  unappliedAmount: number;

  /**
   * The ISO 4217 currency code for this payment.
   *
   * For a list of ISO 4217 currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies). This will be validated by the /api/v1/currencies data set
   */
  currencyCode: string | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;

  /**
   * A reference code for the payment for the given financial or ERP system.  This can be any value that the
   * originating system uses to designate the payment, such as a confirmation number or tracking number, that
   * is different from the `ErpKey` value.
   */
  referenceCode: string | null;

  /**
   * True if this payment was voided.
   */
  isVoided: boolean;

  /**
   * True if this payment is in dispute.
   */
  inDispute: boolean;
};

/**
 * Represents the data to finalize onboarding for a user
 */
export type ProvisioningFinalizeRequestModel = {

  /**
   * The full name of the user
   */
  fullName: string;

  /**
   * The time zone of the user
   */
  timeZone: string | null;

  /**
   * The default currency of the user
   */
  defaultCurrency: string | null;

  /**
   * The company information for the user and group
   */
  company: CompanyModel | null;

  /**
   * Optional connector information needed to enroll user to their email connector
   */
  emailConnector: ErpInfoModel | null;
};

/**
 * Represents the data sent during the onboarding flow
 */
export type ProvisioningModel = {

  /**
   * The full name of the new user
   */
  fullName: string | null;

  /**
   * The information necessary to enroll the user in their ERP
   */
  erp: ErpInfoModel | null;
};

/**
 * Represents the response to either a successful or failed account provisioning
 */
export type ProvisioningResponseModel = {

  /**
   * If provisioning is successful, contains the username of the created user.
   */
  userName: string | null;

  /**
   * If provisioning is successful, contains subscription account name of created user.
   */
  accountName: string | null;

  /**
   * If provisioning is successful, contains the unique identifier of the created user.
   */
  userId: string | null;

  /**
   * If provisioning is successful, contains the group key of the created user.
   */
  groupKey: string | null;

  /**
   * If provisioning is successful, contains the app enrollment id of the created app enrollment.
   */
  appEnrollmentId: string | null;

  /**
   * if provisioning is successful, contains the sync request id of the sync that was started for the app enrollment.
   */
  syncRequestId: string | null;

  /**
   * The error message(s).
   */
  errorMessage: string | null;
};

/**
 * Represents a risk rate calculation for a single month
 */
export type RiskRateModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The month the risk rate was calculated for
   */
  reportPeriod: string;

  /**
   * The string name of the month the risk rate was calculated for
   */
  invoiceMonthName: string | null;

  /**
   * The count of all invoices in the calculation month
   */
  totalInvoiceCount: number;

  /**
   * The sum of the total amount for invoices in the calculation month
   */
  totalInvoiceAmount: number;

  /**
   * The count of open invoices over 90 days from the calculation month
   */
  atRiskCount: number;

  /**
   * The sum of the outstanding balance of open invoices over 90 days from the calculation month
   */
  atRiskAmount: number;

  /**
   * The percentage of all open invoices for the calculation month that are over 90 days based on count
   */
  atRiskCountPercentage: number;

  /**
   * The percentage of all open invoices for the calculation month that are over 90 days based on outstanding balance
   */
  atRiskPercentage: number;
};

/**
 * State model for ISO-3166-2
 */
export type StateModel = {

  /**
   * Name of the state
   */
  name: string | null;

  /**
   * 2 letter alphabetic code for the given state
   */
  alpha2: string | null;

  /**
   * A different name for a state
   */
  aliases: string | null;
};

/**
 * Represents the status of a user's credentials
 */
export type StatusModel = {

  /**
   * If authentication is successful, contains the username of the logged-in user.
   */
  userName: string | null;

  /**
   * If authentication is successful, contains subscription account name of logged-in user.
   */
  accountName: string | null;

  /**
   * If authentication is successful, contains subscription account company id of logged-in user.
   */
  accountCompanyId: string | null;

  /**
   * If authentication is successful, contains the unique identifier of the logged-in user.
   */
  userId: string | null;

  /**
   * If authentication is successful, contains the group key of the logged-in user.
   */
  groupKey: string | null;

  /**
   * Returns true if authentication for this API was successful.
   */
  loggedIn: boolean;

  /**
   * The error message.
   */
  errorMessage: string | null;

  /**
   * The set of roles for this user.
   */
  roles: string[] | null;

  /**
   * Date and time user has last logged into Azure B2C.
   */
  lastLoggedIn: string | null;

  /**
   * The id of the API key used to authenticate.
   */
  apiKeyId: string | null;

  /**
   * If authentication is successful, contains the user status of the logged-in user.
   */
  userStatus: string | null;

  /**
   * The environment currently being used
   */
  environment: string | null;

  /**
   * The version currently being used
   */
  version: string | null;

  /**
   * Statuses for the dependencies of this api.
   * OK if the dependency is working.
   */
  dependencies: object | null;
};

/**
 * Contains information about a sync process for an entity.
 */
export type SyncEntityResultModel = {

  /**
   * The number of entities inserted
   */
  insertCount: number;

  /**
   * The number of entities updated
   */
  updateCount: number;

  /**
   * The number of entities skipped
   */
  skipCount: number;

  /**
   * The number of errors encountered during sync
   */
  errorCount: number;

  /**
   * The errors encountered during sync keyed by ERP key
   */
  errors: object | null;
};

/**
 * Represents a Sync action that loads data from a connector into the Lockstep Platform.  Users can
 * request Sync actions manually using Lockstep Inbox, or via the [Create Sync API](https://developer.lockstep.io/reference/post_api-v1-sync).
 * Each Sync action is tied to an [AppEnrollment](https://developer.lockstep.io/docs/applications-and-enrollments).
 * When the Sync action is complete, the field `StatusCode` will be set to either `Success` or `Failed`.
 *
 * You can fetch a list of detailed results for the Sync API by calling Retrieve or Query with an `include`
 * parameter of `details`.  These detailed results contain line-by-line errors that were detected during
 * processing of this sync.
 */
export type SyncRequestModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  syncRequestId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The status of processing for this SyncRequest.  When a SyncRequest is created, it is flagged as `Ready`.
   * When it is picked up for execution, its status moves to `In Progress`.  When it is complete, its status
   * will move to `Success` or `Failed`.  If another API call cancels the SyncRequest, its status will move
   * to `Cancelled`.
   *
   * * Ready
   * * In Progress
   * * Cancelled
   * * Failed
   * * Success
   */
  statusCode: string | null;

  /**
   * Message containing information about the sync request results
   */
  processResultMessage: string | null;

  /**
   * The AppEnrollmentId of the AppEnrollment object that executed this sync request
   */
  appEnrollmentId: string | null;

  /**
   * The date this sync request was created
   */
  created: string;

  /**
   * The date this sync request was last modified
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this sync request.
   */
  modifiedUserId: string;

  /**
   * The detailed list of results and errors that occurred during the processing of this SyncRequest.  This
   * information is available only after the SyncRequest has completed.  You will only be able to fetch this
   * field if the SyncRequest's `StatusCode` field is set to `Cancelled`, `Success`, or `Failed`.
   *
   * To retrieve this collection, add the keyword `details` to the `include` parameter on your Retrieve or
   * Query requests.
   */
  details: object | null;
};

/**
 * A SyncSubmitModel represents a task that loads data from a connector to load into the Lockstep Platform.  Data
 * contained in a sync will be merged with your existing data.  Each record will be matched with existing data
 * inside the Lockstep Platform using the [Identity Column](https://developer.lockstep.io/docs/identity-columns)
 * rules.  Any record that represents a new AppEnrollmentId+ErpKey will be inserted.  A record that matches an
 * existing AppEnrollmentId+ErpKey will be updated, but only if the data has changed.
 *
 * A Sync process permits either a complete data file or a partial / delta data file.  Lockstep recommends
 * using a sliding time window to avoid the risk of clock skew errors that might accidentally omit records.
 * Best practice is to run a Sync process daily, and to export all data that has changed in the past 48 hours.
 */
export type SyncSubmitModel = {

  /**
   * The unique identifier of the app enrollment that is creating this sync request.
   */
  appEnrollmentId: string;
};

/**
 * Model from the transfer ownership process.
 */
export type TransferOwnerModel = {

  /**
   * The previous owner of the account.
   */
  previousOwner: UserAccountModel | null;

  /**
   * The new owner of the account.
   */
  newOwner: UserAccountModel | null;
};

/**
 * Model used to submit a transfer ownership request
 */
export type TransferOwnerSubmitModel = {

  /**
   * The ID of the user to transfer ownership to.
   */
  targetUserId: string;
};

/**
 * Represents a Uri for download link
 */
export type UriModel = {

  /**
   * Represents the download link
   */
  downloadLink: string | null;
};

/**
 * A User represents a person who has the ability to authenticate against the Lockstep Platform and use
 * services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must
 * have an email address defined within their account.  All Users must validate their email to make use of
 * Lockstep platform services.  Users may have different privileges and access control rights within the
 * Lockstep Platform.
 */
export type UserAccountModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * This record provides a link to the user's Azure AD B2C OID.
   */
  userId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The full name of the user
   */
  userName: string;

  /**
   * The email of the user
   */
  email: string;

  /**
   * The status of the user's account
   */
  status: string | null;

  /**
   * The date that the user account was created
   */
  created: string;

  /**
   * The ID of the user who created the user account
   */
  createdUserId: string;

  /**
   * The date the user account was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified the user account
   */
  modifiedUserId: string;

  /**
   * The name of the user who last modified the user account
   */
  modifiedUserName: string | null;

  /**
   * The ID of the user in Azure B2C
   */
  b2CUserId: string | null;

  /**
   * The id of the Permission Level for the user.
   */
  userRole: string;

  /**
   * The date timestamp when the invite was sent to the user.
   */
  inviteSent: string | null;

  /**
   * The phone number of the user.
   */
  phoneNumber: string | null;

  /**
   * The fax number of the user.
   */
  faxNumber: string | null;

  /**
   * The title of the user; free text field
   */
  title: string | null;

  /**
   * FK to the CodeDefinition table; CodeType = 'AccountingRole'
   */
  accountingRoleCodeDefId: string | null;

  /**
   * Address Line 1 for this User
   */
  address1: string | null;

  /**
   * Address Line 2 for this User
   */
  address2: string | null;

  /**
   * Address Line 3 for this User
   */
  address3: string | null;

  /**
   * City for this User
   */
  city: string | null;

  /**
   * Region ("state" in the US) for this User
   */
  stateRegion: string | null;

  /**
   * Postal Code this User
   */
  postalCode: string | null;

  /**
   * Country for this User This will be validated by the /api/v1/countries data set
   */
  country: string | null;

  /**
   * Image URL for this User
   */
  imageURL: string | null;

  /**
   * Description for this User.
   */
  description: string | null;

  /**
   * Last date time user logged into Azure B2C.
   */
  b2CLastLoggedIn: string | null;

  /**
   * The default currency code used by this user entity.  This value can be overridden
   * for invoices in a different currency code.
   *
   * For a list of defined currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies) This will be validated by the /api/v1/currencies data set
   */
  defaultCurrencyCode: string | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `UserAccount` and the `ObjectKey` set to the `UserId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `UserAccount` and the `ObjectKey` set to the `UserId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `UserAccount` and the `ObjectKey` set to the `UserId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * Accounting role definition for this User.
   * To retrieve this collection, specify `AccountingRole` in the "Include" parameter for your query.
   */
  accountingRoleCodeDefinition: CodeDefinitionModel | null;
};

/**
 * Represents a role for a user
 */
export type UserRoleModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  userRoleId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the user role
   */
  userRoleName: string;

  /**
   * The date that the user role was created
   */
  created: string;

  /**
   * The ID of the user who created the user role
   */
  createdUserId: string;

  /**
   * The date the user role was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified the user role
   */
  modifiedUserId: string;
};

/**
 * Represents the Webhook Trigger History
 */
export type WebhookHistoryTableStorageModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The WebhookId uniquely identifies the webhook used to send notification that an event action has taken place.
   */
  webhookId: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  webhookHistoryId: string;

  /**
   * Event type which fired webhook
   *
   * [entity].[action]
   */
  eventType: string | null;

  /**
   * Flag whether request was sent to callback url successfully or blocked by failing or because it was disabled.
   */
  requestSent: boolean;

  /**
   * Flag whether webhook notification was successful overall (if webhook disabled should always return true otherwise
   * depends on the response from the callback url)
   */
  isSuccessful: boolean;

  /**
   * Response status code that is returned when calling a callback url.
   */
  responseStatusCode: string | null;

  /**
   * Message containing information about the webhook callback results
   */
  processResultMessage: string | null;

  /**
   * Number of times message failed to be sent over to callback url before succeeding or failing out.
   * The maximum value should is based on webhook.
   */
  failureCount: number;

  /**
   * Timestamp of when a request is sent to a webhook callback.
   * Contains the last time message is sent if failures occur.
   */
  timestamp: string | null;
};

/**
 * A Webhook is a subscription to receive notifications automatically to the supplied
 * callback url when changes are made to a supported object.
 *
 * Currently supported objects:
 *  * `SyncRequest` - Receive a notification when a new sync request has completed for the group key.
 */
export type WebhookModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  webhookId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * A name for the webhook subscription.
   */
  name: string;

  /**
   * The status of the webhook (Active, Inactive, Errored).
   */
  statusCode: string | null;

  /**
   * When the StatusCode is set to Errored a message is supplied for why it was errored.
   */
  statusMessage: string | null;

  /**
   * An secret set during webhook creation that can be used to verify that the notification
   * is coming from the Lockstep API.
   */
  clientSecret: string | null;

  /**
   * The format of the content to be returned in the webhook notifications. Options TBD.
   */
  requestContentType: string;

  /**
   * The HTTP Method to be used on the callback URL for use in notifications (GET, POST, PATCH, PUT).
   */
  callbackHttpMethod: string;

  /**
   * The URL where the notification will be sent via the method set in CallbackHttpMethod.
   *
   * When creating a webhook, the Lockstep API will make a call to this url via the method
   * set in the CallbackHttpMethod property with a query parameter of "code" set to an encoded
   * string. To successfully create the webhook, the call must return a successful status code
   * with the query parameter's value as the plain text content.
   */
  callbackUrl: string;

  /**
   * The expiration date for the given webhook subscription. Once the expiration date passes,
   * notifications will no longer be sent to the callback url.
   */
  expirationDate: string | null;

  /**
   * The amount of times a notification should be retried before marking the webhook as errored.
   */
  retryCount: number;

  /**
   * The date this webhook was created
   */
  created: string;

  /**
   * The ID of the user who created this webhook
   */
  createdUserId: string;

  /**
   * The date this webhook was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified this webhook
   */
  modifiedUserId: string;

  /**
   * The partition key used for the webhook callback history
   */
  partitionKey: string | null;
};
