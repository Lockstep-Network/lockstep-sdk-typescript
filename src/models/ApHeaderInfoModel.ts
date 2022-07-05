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
 * Aggregated Accounts Payable information.
 */
export type ApHeaderInfoModel = {

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
  reportPeriod: string;

  /**
   * The total number of vendors.
   */
  totalVendors: number;

  /**
   * The total number of bills.
   */
  totalBills: number;

  /**
   * The total amount billed.
   */
  totalBilledAmount: number;

  /**
   * The total number of advance payments.
   */
  totalAdvancePayments: number;

  /**
   * The total amount paid.
   */
  totalPaid: number;

  /**
   * The total accounts payable amount.
   */
  totalApAmount: number;

  /**
   * The number of paid bills.
   */
  totalBillsPaid: number;

  /**
   * The number of past due bills.
   */
  totalBillsPastDue: number;

  /**
   * The number of bills 90+ days past due.
   */
  totalBills90DaysPastDue: number;

  /**
   * The total amount past due.
   */
  totalPastDueAmount: number;

  /**
   * The total amount for bills 90+ days past due.
   */
  totalPastDueAmount90Days: number;

  /**
   * Portion of Total AP that is Past due.
   */
  percentageOfTotalAp: number;

  /**
   * The total amount billed, due this year.
   */
  totalBilledAmountCurrentYear: number;

  /**
   * The total amount billed, due last year.
   */
  totalBilledAmountPreviousYear: number;

  /**
   * The total of all payments made this year.
   */
  totalPaidAmountCurrentYear: number;

  /**
   * Portion of Total AP that is 90+ days Past due.
   */
  percentageOfTotalAp90DaysPastDue: number;

  /**
   * The number of vendors who were paid within the past thirty days.
   */
  vendorsPaidPastThirtyDays: number;

  /**
   * The total amount paid over the past thirty days.
   */
  amountPaidPastThirtyDays: number;

  /**
   * The amount in advance from the payments made over the past thirty days.
   */
  advancePaymentAmountPastThirtyDays: number;

  /**
   * The number of bills paid over the past thirty days.
   */
  billsPaidPastThirtyDays: number;

  /**
   * The number of vendors that sent bills over the the past thirty days.
   */
  billingVendorsPastThirtyDays: number;

  /**
   * The total amount billed over the past thirty days.
   */
  amountBilledPastThirtyDays: number;

  /**
   * The amount outstanding on the bills received over the past thirty days.
   */
  amountDuePastThirtyDays: number;

  /**
   * The number of bills received over the past thirty days.
   */
  billsPastThirtyDays: number;
};
