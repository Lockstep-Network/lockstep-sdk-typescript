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
 * Represents the daily payable outstanding report
 */
export type DailyPayableOutstandingReportModel = {

  /**
   * Timeframe (quarter) the daily payable outstanding values are associated with
   */
  timeframe: string;

  /**
   * Number of invoices the average daily payable outstanding is calculated on
   */
  invoiceCount: number;

  /**
   * Time (in days) between an invoice was completed paid off and when the invoice was issued
   */
  dailyPayableOutstanding: number;
};
