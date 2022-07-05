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

import { NoteModel } from "..";
import { AttachmentModel } from "..";
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";

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
   * The two character country code of the address. This will be validated by the /api/v1/definitions/countries data set
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
