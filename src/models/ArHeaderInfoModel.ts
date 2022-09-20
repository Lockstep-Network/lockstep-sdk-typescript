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
 * Aggregated Accounts Receivable information.
 */
export type ArHeaderInfoModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The date of the report
   */
  reportDate: string | null;

  /**
   * The total number of customers.
   */
  totalCustomers: number;

  /**
   * The total number of invoices.
   */
  totalInvoices: number;

  /**
   * The total amount invoiced.
   */
  totalInvoicedAmount: number;

  /**
   * The total number of unapplied payments.
   */
  totalUnappliedPayments: number;

  /**
   * The total amount of collected payments.
   */
  totalCollected: number;

  /**
   * The total accounts receivable amount.
   */
  totalArAmount: number;

  /**
   * The number of paid invoices.
   */
  totalInvoicesPaid: number;

  /**
   * The number of past due invoices.
   */
  totalInvoicesPastDue: number;

  /**
   * The number of past due invoices for the last 90 days.
   */
  totalInvoices90DaysPastDue: number;

  /**
   * The total amount past due.
   */
  totalPastDueAmount: number;

  /**
   * The total past due for the past 90 days.
   */
  totalPastDueAmount90Days: number;

  /**
   * Portion of Total AR that is Past due.
   */
  percentageOfTotalAr: number;

  /**
   * Daily sales outstanding.
   */
  dso: number;

  /**
   * The total amount invoiced, due this year.
   */
  totalInvoiceAmountCurrentYear: number;

  /**
   * The total amount invoiced, due last year.
   */
  totalInvoiceAmountPreviousYear: number;

  /**
   * The total of all payments received this year.
   */
  totalPaymentAmountCurrentYear: number;

  /**
   * Portion of Total AR that is 90+ days Past due.
   */
  percentageOfTotalAr90DaysPastDue: number;

  /**
   * The number of customers who paid within the past thirty days.
   */
  customersPaidPastThirtyDays: number;

  /**
   * The total amount collected over the past thirty days.
   */
  amountCollectedPastThirtyDays: number;

  /**
   * The amount unapplied from the payments collected over the past thirty days.
   */
  unappliedAmountPastThirtyDays: number;

  /**
   * The number of invoices paid over the past thirty days.
   */
  invoicesPaidPastThirtyDays: number;

  /**
   * The number of customers invoiced over the the past thirty days.
   */
  customersInvoicedPastThirtyDays: number;

  /**
   * The total amount invoiced over the past thirty days.
   */
  amountInvoicedPastThirtyDays: number;

  /**
   * The amount outstanding on the invoices invoiced over the past thirty days.
   */
  amountDuePastThirtyDays: number;

  /**
   * The number of invoices invoiced over the past thirty days.
   */
  invoicesPastThirtyDays: number;
};
