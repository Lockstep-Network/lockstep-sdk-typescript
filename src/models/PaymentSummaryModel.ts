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
 * Contains summary information for a Payment
 */
export type PaymentSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The id of the payment
   */
  paymentId: string;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * The type of payment, Payment or AP Payment.
   */
  paymentType: string | null;

  /**
   * The date of this payment.
   */
  paymentDate: string | null;

  /**
   * Total amount of this payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this payment.
   */
  unappliedAmount: number;

  /**
   * The number of invoices associated to this payment.
   */
  invoiceCount: number | null;

  /**
   * The number of payments applied to this payment.
   */
  totalPaymentsApplied: number | null;

  /**
   * The reference codes of the invoices associated to this payment.
   */
  invoiceList: string[] | null;

  /**
   * The ids of the invoices associated to this payment.
   */
  invoiceIdList: string[] | null;

  /**
   * The name of the customer for this payment.
   */
  customerName: string | null;

  /**
   * The id of the customer for this payment.
   */
  customerId: string | null;
};
