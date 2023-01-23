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
 * Contains summary information for payables that will be due soon
 */
export type PayablesComingDueHeaderModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Number of bills due for this time period
   */
  numberOfBillsDue: number;

  /**
   * Number of total vendors for this time period
   */
  numberOfVendors: number;

  /**
   * Percentage of total for this time period
   */
  percentageOfTotal: number;

  /**
   * The group's base currency code.
   */
  baseCurrencyCode: string | null;

  /**
   * Total amount due for this time period in the group's base currency.
   */
  totalAmountDue: number;

  /**
   * This model represents all the payables that are
   * either already due or due within this date.
   */
  dueDate: string;
};
