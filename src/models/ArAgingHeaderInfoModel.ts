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
 * Aggregated Accounts Receivable Aging information.
 */
export type ArAgingHeaderInfoModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The aging bucket this data belongs to.
   */
  reportBucket: string | null;

  /**
   * The total number of customers.
   */
  totalCustomers: number;

  /**
   * The total number of invoices outstanding.
   */
  totalInvoicesOutstanding: number;

  /**
   * The total amount outstanding.
   */
  totalOutstandingAmount: number;

  /**
   * The total amount for AR.
   */
  totalArAmount: number;

  /**
   * Portion of Total AR this data represents.
   */
  percentageOfTotalAr: number;
};
