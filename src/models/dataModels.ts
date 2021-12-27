/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
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
  activityName: string | null;
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
   * True if this activity is currently "open", which indicates that the activitiy is
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
   * All attachments attached to applied activity.
   * 
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All notes attached to this applied activity.
   * 
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All definitions attached to this applied activity.
   * 
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this activity.
   * 
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

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
   * All definitions attached to this app.
   * 
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this app.
   * 
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
  /**
   * Data about the last sync attached to this app enrollment
   * 
   * To retrieve this collection, specify `LastSync` in the "Include" parameter for your query.
   */
  lastSync: SyncRequestModel | null;
  /**
   * Optional data necessary to create an app enrollment for a supported connector.
   * Only enter relevant fields for the given connector.
   */
  connectorInfo: ConnectorInfoModel | null;
};

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
   * All notes attached to this app.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this app.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All definitions attached to the application.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to the application.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

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
   * The date the attachment was created
   */
  created: string;
  /**
   * Id of the user who made the file
   */
  createdUserId: string;
};

export type AvailableGroup = {
  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   * 
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;
  /**
   * The number of invoices.
   */
  invoiceCount: number;
  /**
   * The number of invoice lines.
   */
  lineCount: number;
  /**
   * The number of companies.
   */
  companyCount: number;
  /**
   * The number of contacts.
   */
  contactCount: number;
  /**
   * The number of payments.
   */
  paymentCount: number;
  /**
   * The number of payments applied.
   */
  paymentAppliedCount: number;
};

export type AvailableMigrationsModel = {
  /**
   * Indicates which records are available for migration
   */
  migrations: AvailableGroup[] | null;
};

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
  companyName: string | null;
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
   * Company, Customer, Group, or Vendor.  A company that represents both a customer and a vendor
   * is identified as a CustomerVendor.
   * 
   * * `Company` - This record represents a company that is part of the organization of the account holder.
   * * `Customer` - This record represents a business entity that purchases things from the account holder.
   * * `Group` - Only one record of type `GROUP` exists in each account.  Contains your account profile.
   * * `Vendor` - This record represents a business entity that sells things to the account holder.
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
   * Dun & Bradstreet Number
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
   * The AppEnrollmentId of the application that imported this company record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.
   */
  appEnrollmentId: string | null;
  /**
   * All notes attached to this company.
   * 
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this company.
   * 
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
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
   * All definitions attached to this company.
   * 
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this company.
   * 
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
  /**
   * Classification code definition for this company.
   * 
   * To retrieve this collection, specify `Classification` in the "Include" parameter for your query.
   */
  companyClassificationCodeDefinition: CodeDefinitionModel | null;
};

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
   * If this company record was imported from a financial system, it will have the value `ErpKey`
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
   * AppEnrollmentId for this record; used for mapping purposes.
   */
  appEnrollmentId: string | null;
  /**
   * All notes attached to this company.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this company.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All definitions attached to this contact.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this contact.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

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
   * The id of the invoice
   */
  invoiceId: string;
  /**
   * The id of the credit memo invoice
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
   * Date payment applied to credit memo.
   */
  applyToInvoiceDate: string;
  /**
   * Amount applied to credit memo.
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
   * AppEnrollmentId for this record; used for mapping purposes.
   */
  appEnrollmentId: string | null;
  /**
   * All attachments attached to applied Credit Memo.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All notes attached to this applied Credit Memo.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All definitions attached to this applied Credit Memo.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this Credit Memo.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

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
   * AppEnrollmentId for this record; used for mapping purposes.
   */
  appEnrollmentId: string | null;
};

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
   * String of data for field
   */
  stringValue: string | null;
  /**
   * Number data for field
   */
  numericValue: number;
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
   * AppEnrollmentId for this record; used for mapping purposes.
   */
  appEnrollmentId: string | null;
  /**
   * Definition of the value
   */
  customFieldDefinition: CustomFieldDefinitionModel | null;
};

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
  created: string | null;
  /**
   * The ID number of the user who created this email.
   */
  createdUserId: string | null;
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
   * AppEnrollmentId for this record; used for mapping purposes.
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
   * All notes attached to this email.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this email.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All definitions attached to this email.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this email.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

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

export type InviteSubmitModel = {
  /**
   * The email address of the user to invite
   */
  email: string;
};

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
};

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
};

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
   * All notes attached to this company.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this company.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
};

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
   * The purchase order code as it exists in the user's ERP or accounting system.
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
   * A string identifying the salesperson responsible for writing this quote, invoice, or order.
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
   * AppEnrollmentId for this record; used for mapping purposes.
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
   * All notes attached to this invoice.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this invoice.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
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
   * All custom field values associated with this invoice
   * To retrieve this item, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
  /**
   * All custom field definitions
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
};

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

export type MigrationResultModel = {
  /**
   * If the API call produced messages, this element will contain a list of user-visible
   * text strings that contain information about what work occurred in the API.
   */
  messages: string[] | null;
  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   * 
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;
  /**
   * The number of invoices migrated
   */
  invoiceCount: number;
  /**
   * The number of addresses migrated
   */
  addressCount: number;
  /**
   * The number of invoice and invoice line fields migrated
   */
  invoiceFieldCount: number;
  /**
   * The number of invoice lines migrated
   */
  lineCount: number;
  /**
   * The number of contacts migrated
   */
  contactCount: number;
  /**
   * The number of companies migrated
   */
  companyCount: number;
  /**
   * The number of payments migrated
   */
  paymentCount: number;
  /**
   * The number of payment fields migrated
   */
  paymentFieldCount: number;
  /**
   * The number of payments applied migrated
   */
  paymentAppliedCount: number;
};

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
   * AppEnrollmentId for this record; used for mapping purposes.
   */
  appEnrollmentId: string | null;
};

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
   * Reference number for the payment applied.
   */
  entryNumber: number;
  /**
   * Date payment applied to invoice.
   */
  applyToInvoiceDate: string;
  /**
   * Amount applied to invoice.
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
   * AppEnrollmentId for this record; used for mapping purposes.
   */
  appEnrollmentId: string | null;
  /**
   * The invoice associated with this applied payment.
   */
  invoice: InvoiceModel | null;
};

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
   */
  paymentType: string;
  /**
   * Cash, check, credit card, wire transfer.
   */
  tenderType: string;
  /**
   * Has the payment been fully applied?
   */
  isOpen: boolean;
  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;
  /**
   * The date of this payment.
   */
  paymentDate: string;
  /**
   * Payment post date.
   */
  postDate: string;
  /**
   * Total amount of this payment.
   */
  paymentAmount: number;
  /**
   * Unapplied balance of this payment.
   */
  unappliedAmount: number;
  /**
   * Currency of the payment. This will be validated by the /api/v1/currencies data set
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
   * AppEnrollmentId for this record; used for mapping purposes.
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
   * All notes attached to this payment.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this payment.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All definitions attached to this payment.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;
  /**
   * All values attached to this payment.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
};

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
   * Statuses for the dependencies of this api.
   * OK if the dependency is working.
   */
  dependencies: object | null;
};

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
   * Potential values = Cancelled, Ready, In Progress, Success, Failed
   */
  statusCode: string | null;
  /**
   * Message containing information about the sync request results
   */
  processResultMessage: string | null;
  /**
   * App enrollment sync request is for
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
   * The detailed results from the sync.
   * To retrieve this collection, set `includeDetails` to true in your GET requests.
   */
  details: object | null;
};

export type SyncSubmitModel = {
  /**
   * The identifier of the app enrollment
   */
  appEnrollmentId: string;
};

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

export type TransferOwnerSubmitModel = {
  /**
   * The ID of the user to transfer ownership to.
   */
  targetUserId: string;
};

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
   * For a list of defined currency codes, see [TODO]()
   */
  defaultCurrencyCode: string | null;
  /**
   * All notes attached to this User.
   * To retrieve this collection, specify `Notes` in the "Include" parameter for your query.
   */
  notes: NoteModel[] | null;
  /**
   * All attachments attached to this User.
   * To retrieve this collection, specify `Attachments` in the "Include" parameter for your query.
   */
  attachments: AttachmentModel[] | null;
  /**
   * All values attached to this User.
   * To retrieve this collection, specify `CustomFieldValues` in the "Include" parameter for your query.
   */
  customFieldValues: CustomFieldValueModel[] | null;
  /**
   * Accounting role definition for this User.
   * To retrieve this collection, specify `AccountingRole` in the "Include" parameter for your query.
   */
  accountingRoleCodeDefinition: CodeDefinitionModel | null;
};

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
