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

import { ViewBoxSettingsModel } from "..";
import { NoteModel } from "..";
import { AttachmentModel } from "..";
import { ContactModel } from "..";
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";
import { CodeDefinitionModel } from "..";

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
   * Time zone
   */
  timeZone: string | null;

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
  created: string;

  /**
   * The ID of the user who created this company
   */
  createdUserId: string;

  /**
   * The date this company was last modified
   */
  modified: string;

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
   * Indicates the preferred invoice delivery method. Examples include Print, Email, Fax
   */
  preferredDeliveryMethod: string | null;

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
   * Company Email Address
   */
  emailAddress: string | null;

  /**
   * The public url slug for the Company.
   */
  publicUrlSlug: string | null;

  /**
   * State Tax ID
   */
  stateTaxId: string | null;

  /**
   * The state where the company was registered.
   */
  stateOfIncorporation: string | null;

  /**
   * Linkedin Url
   */
  linkedInUrlSlug: string | null;

  /**
   * This flag indicates whether the company is verified.
   */
  isVerified: boolean;

  /**
   * The date this company was last verified.
   */
  lastVerifiedDate: string | null;

  /**
   * View box settings for the company logo.
   */
  viewBoxSettings: ViewBoxSettingsModel | null;

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
