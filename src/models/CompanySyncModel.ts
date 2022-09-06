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
   * Indicates what action to take when a sync model has been found during the sync process.
   */
  onMatchAction: number;

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
   * [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies).
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
   * The company's primary mailing address information
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
   * Indicates the preferred invoice delivery method. Examples include Print, Email, Fax
   */
  preferredDeliveryMethod: string | null;

  /**
   * The company email address.
   */
  emailAddress: string | null;

  /**
   * An external reference that identifies the Company from the originating ERP system, separate from the ErpKey.
   */
  externalReference: string | null;
};
