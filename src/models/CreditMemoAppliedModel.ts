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

import { AttachmentModel } from "..";
import { NoteModel } from "..";
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";
import { InvoiceModel } from "..";

/**
 * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds.
 * Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice,
 * Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied
 * as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid
 * using this Credit.
 */
export type CreditMemoAppliedModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  creditMemoAppliedId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The Lockstep ID of the Invoice to which this credit memo was applied.  This Invoice's outstanding balance
   * was reduced by the value of the field `CreditMemoAppliedAmount` on the date `ApplyToInvoiceDate`.
   *
   * Example: Company ABC received a credit memo, CM000123 for $500.  Company ABC then chooses to apply this
   * credit memo to reduce the balance of the invoice PO1000578.  The `InvoiceErpKey` is the Lockstep Platform
   * ID number of Invoice `PO1000578`.
   */
  invoiceId: string;

  /**
   * The Lockstep ID of the Invoice of type "Credit Memo" that was consumed in this payment application event.
   *
   * Example: Company ABC received a credit memo, CM000123 for $500.  Company ABC then chooses to apply this
   * credit memo to reduce the balance of the invoice PO1000578.  The `CreditMemoInvoiceId` is the Lockstep
   * Platform ID number of Invoice `CM000123`.
   */
  creditMemoInvoiceId: string;

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
   * Possible statuses for a record that supports ERP Update.
   */
  erpUpdateStatus: number;

  /**
   * Possible actions for a record that supports ERP Update.
   */
  erpUpdateAction: number;

  /**
   * Reference number for the applied credit memo.
   */
  entryNumber: number;

  /**
   * The date on which this credit memo was applied to the Invoice represented by `InvoiceId`.
   */
  applyToInvoiceDate: string;

  /**
   * The amount of the credit memo that was applied to the Invoice represented by `InvoiceId`.
   */
  creditMemoAppliedAmount: number;

  /**
   * Date credit memo applied record was created.
   */
  created: string;

  /**
   * The id of the user who created this applied credit memo.
   */
  createdUserId: string;

  /**
   * Date credit memo applied record was modified.
   */
  modified: string;

  /**
   * The id of the user who modified this applied credit memo.
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
   * The date on which this record was last modified in source ERP.
   */
  sourceModifiedDate: string | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `CreditMemoApplied` and the `ObjectKey` set to the `CreditMemoAppliedId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;

  /**
   * The credit memo invoice associated with this applied credit memo
   */
  creditMemoInvoice: InvoiceModel | null;

  /**
   * The invoice associated with this applied credit memo
   */
  invoice: InvoiceModel | null;
};
