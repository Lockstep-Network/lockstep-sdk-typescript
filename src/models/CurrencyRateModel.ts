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
 * Represents a currency rate for specific currencies and date
 */
export type CurrencyRateModel = {

  /**
   * The source currency
   */
  sourceCurrency: string;

  /**
   * The destination currency
   */
  destinationCurrency: string;

  /**
   * The date for the currency rate
   */
  date: string;

  /**
   * The currency rate value
   */
  currencyRate: number | null;
};
