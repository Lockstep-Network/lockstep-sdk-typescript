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
 * Represents a summary of outstanding amounts for bills to vendors and their associated daily payable outstanding value.
 */
export type DpoSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of the vendor.
   */
  vendorId: string;

  /**
   * The name of the vendor.
   */
  vendorName: string | null;

  /**
   * The name of the primary contact.
   */
  primaryContact: string | null;

  /**
   * The total number of outstanding bills.
   */
  bills: number;

  /**
   * The total amount outstanding.
   */
  amountOutstanding: number;

  /**
   * The days payable outstanding value.
   */
  dpo: number;
};
