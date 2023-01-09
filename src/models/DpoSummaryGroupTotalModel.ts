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
 * Represents the group totals for the values found in the daily payable outstanding summary
 */
export type DpoSummaryGroupTotalModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The total number of vendors with outstanding bills
   */
  vendors: number;

  /**
   * The total number of bills outstanding
   */
  bills: number;

  /**
   * The total amount outstanding
   */
  amountOutstanding: number;

  /**
   * The total dpo for the group key
   */
  dpo: number;
};
