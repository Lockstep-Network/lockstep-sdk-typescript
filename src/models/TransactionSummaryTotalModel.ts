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
 * Represents transaction summary information based on the query request within the group account.
 */
export type TransactionSummaryTotalModel = {

  /**
   * Total count of all transactions from the query request.
   */
  totalCount: number;

  /**
   * Total value of all transactions from the query request.
   */
  totalAmount: number;

  /**
   * Total outstanding amount value of all transactions from the query request.
   */
  outstandingAmount: number;

  /**
   * Total open invoice count from the query request.
   */
  invoiceOpenCount: number;

  /**
   * Total past due invoice count from the query request.
   */
  invoicePastDueCount: number;
};
