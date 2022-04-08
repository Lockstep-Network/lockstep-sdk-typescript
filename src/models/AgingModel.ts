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
 * Represents an aging record
 */
export type AgingModel = {

  /**
   * Aging bucket of outstanding balance data (days past due date of invoice)
   */
  bucket: number;

  /**
   * Currency code of aging bucket
   */
  currencyCode: string | null;

  /**
   * Outstanding balance for the given aging bucket
   */
  outstandingBalance: number;
};
