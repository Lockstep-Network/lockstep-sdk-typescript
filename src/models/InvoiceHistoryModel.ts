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
 * An Invoice represents a bill sent from one company to another.  The Lockstep Platform tracks changes to
 * each Invoice so that you can observe the changes over time.  You can view the InvoiceHistory list to
 * monitor and observe the changes of this Invoice and track the dates when changes occurred.
 */
export type InvoiceHistoryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID number of this invoice history entry.
   */
  invoiceHistoryId: string;

  /**
   * The unique ID of the Invoice represented by this history entry.  This ID was automatically assigned
   * by Lockstep to the Invoice record when it was added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  invoiceId: string;

  /**
   * The ID number of the company that created this invoice.
   */
  companyId: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string;

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
   * The purchase order code as it exists in the user's ERP or accounting system.
   */
  purchaseOrderCode: string | null;

  /**
   * An additional reference code that is sometimes used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * A code identifying the salesperson responsible for writing this invoice.
   */
  salespersonCode: string | null;

  /**
   * A string identifying the salesperson responsible for writing this invoice.
   */
  salespersonName: string | null;

  /**
   * A code identifying the type of this invoice.
   */
  invoiceTypeCode: string | null;

  /**
   * A code identifying the status of this invoice.
   */
  invoiceStatusCode: string | null;

  /**
   * A code identifying the terms given to the purchaser.
   */
  termsCode: string | null;

  /**
   * If the customer negotiated any special terms different from the standard terms above, describe them here.
   */
  specialTerms: string | null;

  /**
   * The three-character ISO 4217 currency code used for this invoice. This will be validated by the /api/v1/definitions/currencies data set
   */
  currencyCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The total sales (or transactional) tax calculated for this invoice.
   */
  salesTaxAmount: number | null;

  /**
   * The total discounts given by the seller to the buyer on this invoice.
   */
  discountAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalanceAmount: number | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The date when discounts were adjusted for this invoice.
   */
  discountDate: string | null;

  /**
   * The date when this invoice posted to the company's general ledger.
   */
  postedDate: string | null;

  /**
   * The date when the invoice was closed and finalized after completion of all payments and delivery of all products and
   * services.
   */
  invoiceClosedDate: string | null;

  /**
   * The date when the remaining outstanding balance is due.
   */
  paymentDueDate: string | null;

  /**
   * The date and time when this record was imported from the user's ERP or accounting system.
   */
  importedDate: string | null;

  /**
   * The ID number of the invoice's origination address
   */
  primaryOriginAddressId: string | null;

  /**
   * The ID number of the invoice's bill-to address
   */
  primaryBillToAddressId: string | null;

  /**
   * The ID number of the invoice's ship-to address
   */
  primaryShipToAddressId: string | null;

  /**
   * The date on which this invoice record was created.
   */
  created: string | null;

  /**
   * The ID number of the user who created this invoice.
   */
  createdUserId: string | null;

  /**
   * The date on which this invoice record was last modified.
   */
  modified: string | null;

  /**
   * The ID number of the user who most recently modified this invoice.
   */
  modifiedUserId: string | null;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;
};
