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


/**
 * Represents a line in an invoice
 */
export type InvoiceLineModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  invoiceLineId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the invoice this line belongs to.
   */
  invoiceId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system, if it was
   * different from the original `LineNumber`.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The line number of this line, as defined in the originating ERP or accounting system.  You can sort on this number to
   * get the original view of lines within the invoice.
   */
  lineNumber: string | null;

  /**
   * A code number identifying the product or service that is specified on this line.
   */
  productCode: string | null;

  /**
   * Description of this invoice line.
   */
  description: string | null;

  /**
   * For lines measured in a unit other than "quantity", this code indicates the measurement system for the quantity field.
   * If the line is measured in quantity, this field is null.
   */
  unitMeasureCode: string | null;

  /**
   * The price of a single unit for this line.
   */
  unitPrice: number;

  /**
   * The quantity of items for ths line.
   */
  quantity: number | null;

  /**
   * The number of items that have been shipped.
   */
  quantityShipped: number | null;

  /**
   * The number of items that has been received.
   */
  quantityReceived: number | null;

  /**
   * The total amount for this line.
   */
  totalAmount: number | null;

  /**
   * If this line is tax exempt, this code indicates the reason for the exemption.
   */
  exemptionCode: string | null;

  /**
   * If null, the products specified on this line were delivered on the same date as all other lines.
   * If not null, this line was delivered or finalized on a different date than the overall invoice.
   */
  reportingDate: string | null;

  /**
   * An optional ID number for the line's origin address.
   */
  overrideOriginAddressId: string | null;

  /**
   * An optional ID number for the line's bill to address.
   */
  overrideBillToAddressId: string | null;

  /**
   * An optional ID number for the line's ship to address.
   */
  overrideShipToAddressId: string | null;

  /**
   * The date on which this line was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this line.
   */
  createdUserId: string | null;

  /**
   * The date on which this line was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this line.
   */
  modifiedUserId: string | null;

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
   * endpoint with the `TableKey` to `InvoiceLine` and the `ObjectKey` set to the `InvoiceLineId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `InvoiceLine` and the `ObjectKey` set to the `InvoiceLineId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;
};
