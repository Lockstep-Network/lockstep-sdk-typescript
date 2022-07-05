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
   * A Note is connected to an existing item within the Lockstep Platform by the fields `TableKey` and
   * `ObjectKey`.  For example, a Note connected to Invoice 12345 would have a `TableKey` value of
   * `Invoice` and an `ObjectKey` value of `12345`.
   *
   * The `TableKey` value contains the name of the table within the Lockstep Platform to which this metadata
   * is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  tableKey: string | null;

  /**
   * A Note is connected to an existing item within the Lockstep Platform by the fields `TableKey` and
   * `ObjectKey`.  For example, a Note connected to Invoice 12345 would have a `TableKey` value of
   * `Invoice` and an `ObjectKey` value of `12345`.
   *
   * The `ObjectKey` value contains the primary key of the record within the Lockstep Platform to which this
   * metadata is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  objectKey: string;

  /**
   * The full text of the note
   */
  noteText: string | null;

  /**
   * The type of the note
   */
  noteType: string | null;

  /**
   * A flag indicating whether this Note is archived (also known as hidden or deleted).  When you call
   * [ArchiveNote](https://developer.lockstep.io/reference/delete_api-v1-notes-id) this field will
   * be set to true.
   *
   * You should avoid displaying Notes with the IsArchived field set to true in your user interface.
   */
  isArchived: boolean;

  /**
   * The date the note was created
   */
  created: string | null;

  /**
   * The unique ID of the [UserAccount](https://developer.lockstep.io/docs/useraccountmodel) of the user
   * who created this Note.
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
