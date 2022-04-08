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
 * Input format used for bulk conversion route
 */
export type BulkCurrencyConversionModel = {

  /**
   * The date for the currency rate
   */
  date: string;

  /**
   * The currency code This will be validated by the /api/v1/definitions/currencies data set
   */
  sourceCurrency: string;
};
