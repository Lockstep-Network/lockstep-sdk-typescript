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

import { NoteModel } from "..";
import { AttachmentModel } from "..";
import { CustomFieldValueModel } from "..";
import { CodeDefinitionModel } from "..";

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
   * Country for this User This will be validated by the /api/v1/definitions/countries data set
   */
  country: string | null;

  /**
   * Time zone for this user
   */
  timeZone: string | null;

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
   * For a list of defined currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies) This will be validated by the /api/v1/definitions/currencies data set
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
