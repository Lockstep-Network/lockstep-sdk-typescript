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
 * An Attachment is a file that can be attached to various account attributes within Lockstep.
 * This data model contains metadata about the attachment.  You can upload and download attachments
 * into the Lockstep Platform along with this metadata.  Attachments can be used for invoices, payments,
 * legal documents, or any other external files that you wish to track.
 *
 * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
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
   * An Attachment is connected to an existing item within the Lockstep Platform by the fields `TableKey` and
   * `ObjectKey`.  For example, an Attachment connected to Invoice 12345 would have a `TableKey` value of
   * `Invoice` and an `ObjectKey` value of `12345`.
   *
   * The `TableKey` value contains the name of the table within the Lockstep Platform to which this Attachment
   * is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  tableKey: string | null;

  /**
   * An Attachment is connected to an existing item within the Lockstep Platform by the fields `TableKey` and
   * `ObjectKey`.  For example, an Attachment connected to Invoice 12345 would have a `TableKey` value of
   * `Invoice` and an `ObjectKey` value of `12345`.
   *
   * The `ObjectKey` value contains the primary key of the record within the Lockstep Platform to which this
   * Attachment is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  objectKey: string;

  /**
   * An Attachment represents a file that was uploaded to the Lockstep Platform.  This field contains the original
   * name of the file on disk, without its extension.
   */
  fileName: string | null;

  /**
   * An Attachment represents a file that was uploaded to the Lockstep Platform.  This field contains the original
   * extension name of the file on disk.
   */
  fileExt: string | null;

  /**
   * DEPRECATED: This field is replaced by `AttachmentType`.
   */
  attachmentTypeId: string;

  /**
   * A flag indicating whether this Attachment is archived (also known as hidden or deleted).  When you call
   * [ArchiveAttachment](https://developer.lockstep.io/reference/delete_api-v1-attachments-id) this field will
   * be set to true.
   *
   * You should avoid displaying Attachments with the IsArchived field set to true in your user interface.
   */
  isArchived: boolean;

  /**
   * DEPRECATED - Do not use
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
   * The date the attachment was created.
   */
  created: string;

  /**
   * The unique ID of the [UserAccount](https://developer.lockstep.io/docs/useraccountmodel) of the user
   * who created this Attachment.
   */
  createdUserId: string;

  /**
   * A text string describing the type of this Attachment.
   */
  attachmentType: string | null;
};
