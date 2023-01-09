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
 * The totals for a Payment Summary
 */
export type PaymentSummaryTotalsModel = {

  /**
   * The total amount paid.
   */
  totalPaidAmount: number;

  /**
   * The total amount unapplied.
   */
  totalUnappliedBalance: number;
};
