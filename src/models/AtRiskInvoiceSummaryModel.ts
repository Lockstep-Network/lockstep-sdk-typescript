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
 * Contains summarized data for an invoice
 */
export type AtRiskInvoiceSummaryModel = {

  /**
   * The date of the report
   */
  reportDate: string | null;

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
   * The total amount of the Invoice.
   */
  invoiceAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalance: number | null;

  /**
   * A code identifying the type of this Invoice.
   */
  invoiceTypeCode: string | null;

  /**
   * The date stamp for the newest Activity on this Invoice.
   */
  newestActivity: string | null;

  /**
   * The number of days this Invoice is past due.
   */
  daysPastDue: number | null;

  /**
   * The memo text of the payments associated to this invoice.
   */
  paymentNumbers: string[] | null;

  /**
   * The ids of the payments associated to this invoice.
   */
  paymentIds: string[] | null;
};
