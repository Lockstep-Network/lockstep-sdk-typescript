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

/**
 * An Accounting Profile is a child of a Company Profile, and collectively,
 * they comprise the identity and necessary information for an accounting  team
 * to work with trading partners, financial institutions, auditors, and others.
 * You can use Accounting Profiles to define an accounting function by what
 * the function does and how to interface with the function.
 */
export type AccountingProfileModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  accountingProfileId: string;

  /**
   * The ID of the company profile to which this accounting profile belongs.
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
   * The name of the accounting profile.
   */
  name: string;

  /**
   * The type of the accounting profile.
   * Some examples include 'AR', 'AP', 'AR+AP', 'General Accounting', 'Treasury', 'Payroll', 'Finance'
   */
  type: string;

  /**
   * The email address associated with the accounting profile.
   */
  emailAddress: string;

  /**
   * The phone number associated with the accounting profile.
   */
  phone: string | null;

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
  region: string | null;

  /**
   * The postal/zip code of the address.
   */
  postalCode: string | null;

  /**
   * The two character country code of the address.
   */
  country: string | null;

  /**
   * The ID of the primary contact with which this accounting profile is associated.
   */
  primaryContactId: string;

  /**
   * The date on which this record was created.
   */
  created: string;

  /**
   * The ID of the user who created this accounting profile.
   */
  createdUserId: string;

  /**
   * The date on which this record was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified this accounting profile.
   */
  modifiedUserId: string;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `AccountingProfile` and the `ObjectKey` set to the `AccountingProfileId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `AccountingProfile` and the `ObjectKey` set to the `AccountingProfileId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `AccountingProfile` and the `ObjectKey` set to the `AccountingProfileId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `AccountingProfile` and the `ObjectKey` set to the `AccountingProfileId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;
};
