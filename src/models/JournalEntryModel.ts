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

import { JournalEntryLineModel } from "..";
import { AttachmentModel } from "..";

/**
 * Contains information about a journal entry
 */
export type JournalEntryModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  journalEntryId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this journal entry record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The ERP’s identifier for this journal entry, usually has meaning to the user.
   * May be the same value of the ERP Key.
   */
  journalId: string | null;

  /**
   * Possible sources for a Journal Entry.
   */
  source: number;

  /**
   * The UTC date and time when this journal entry was posted.
   */
  postingDate: string;

  /**
   * Possible statuses for a Journal Entry.
   */
  status: number;

  /**
   * A brief description explaining the purpose of the journal entry.
   */
  description: string | null;

  /**
   * An additional comment related to the entry.
   */
  comment: string | null;

  /**
   * Any reference number or identifier associated with the entry, such as an invoice number or purchase order.
   */
  referenceNumber: string | null;

  /**
   * The raw posting date from the source.
   */
  sourcePostingDate: string;

  /**
   * The date that the journal entry was created.
   */
  created: string;

  /**
   * The ID of the user who created the journal entry.
   */
  createdUserId: string;

  /**
   * The date that the journal entry was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified the journal entry.
   */
  modifiedUserId: string;

  /**
   * The date on which this record was last modified in source ERP.
   */
  sourceModifiedDate: string | null;

  /**
   * All lines attached to this journal entry.
   * To retrieve this collection, specify `Lines` in the "Include" parameter for your query.
   */
  lines: JournalEntryLineModel[];

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Invoice` and the `ObjectKey` set to the `InvoiceId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;
};
