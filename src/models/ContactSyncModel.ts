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
   * Indicates what action to take when an existing object has been found during the sync process.
   */
  onMatchAction: number;

  /**
   * This is the primary key of the Contact record. For this field, you should use whatever the contact's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your contact records in a database, whatever the primary key for the contact table is
   * in the database should be the "ErpKey".
   *
   * As some ERP systems don't maintain a unique key for Contacts, we also support syncing Contacts with ERP keys
   * of the form {prefix}|{index}, for example ContactPrefix|1, ContactPrefix|2 and so on.
   *
   * For this reason, please ensure that your Contact ERP keys don't otherwise contain the '|' symbol or that it
   * is replaced by an alternate symbol if they do.
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
   * The mailing address information for this contact.
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
