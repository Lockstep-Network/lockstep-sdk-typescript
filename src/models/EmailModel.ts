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
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";

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
