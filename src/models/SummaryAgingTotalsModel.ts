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
 * Represents summary aging bucket total.
 */
export type SummaryAgingTotalsModel = {

  /**
   * Aging bucket outstanding balance is associated to.
   */
  bucket: string | null;

  /**
   * Aging outstanding balance value.
   */
  outstandingBalance: number;
};
