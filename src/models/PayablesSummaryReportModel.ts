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
 * Represents the payables summary report based on a timeframe
 */
export type PayablesSummaryReportModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Timeframe in days the payables summary report is generated on
   */
  timeframe: number;

  /**
   * Amount of payments made based in the timeframe
   */
  totalPaymentsAmount: number;

  /**
   * Number of payments made based in the timeframe
   */
  totalPaymentsCount: number;

  /**
   * Amount of bills received based in the timeframe
   */
  totalAmountBilled: number;

  /**
   * Number of bills received in the timeframe
   */
  totalBillsCount: number;
};
