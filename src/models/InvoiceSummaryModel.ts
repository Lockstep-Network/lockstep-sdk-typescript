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


/**
 * Contains summarized data for an invoice
 */
export type InvoiceSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string | null;

  /**
   * The unique ID number of this invoice.
   */
  invoiceId: string;

  /**
   * A reference code that is used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  invoiceNumber: string | null;

  /**
   * The reporting date for this invoice.
   */
  invoiceDate: string | null;

  /**
   * The date when the invoice was closed and finalized after completion of all payments and delivery of all products and
   * services.
   */
  invoiceClosedDate: string | null;

  /**
   * The name of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerName: string | null;

  /**
   * The status of the invoice.
   */
  status: string | null;

  /**
   * The due date of the invoice.
   */
  paymentDueDate: string | null;

  /**
   * The currency code for the invoice.
   */
  currencyCode: string | null;

  /**
   * The total amount of the Invoice.
   */
  invoiceAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalance: number | null;

  /**
   * The group's base currency code.
   */
  baseCurrencyCode: string | null;

  /**
   * The invoice amount in the group's base currency
   */
  baseCurrencyInvoiceAmount: number | null;

  /**
   * The outstanding balance amount in the group's base currency
   */
  baseCurrencyOutstandingBalance: number | null;

  /**
   * A code identifying the type of this Invoice.
   */
  invoiceTypeCode: string | null;

  /**
   * The number of days this Invoice is past due.
   */
  daysPastDue: number | null;

  /**
   * The number of payments associated to this invoice.
   */
  paymentCount: number;

  /**
   * Specific invoices have support for pdf retrieval from their respective erp. When this flag is true, an additional
   * call to Invoices/{id}/pdf can be made to retrieve a pdf directly from the erp.
   */
  supportsErpPdfRetrieval: boolean;

  /**
   * The memo text of the payments associated to this invoice.
   */
  paymentNumbers: string[] | null;

  /**
   * The ids of the payments associated to this invoice.
   */
  paymentIds: string[] | null;

  /**
   * The modified date of the invoice.
   */
  modified: string;
};
