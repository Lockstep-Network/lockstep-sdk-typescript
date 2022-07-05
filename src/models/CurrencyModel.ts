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
 * Represents an ISO-4217 currency code definition
 */
export type CurrencyModel = {

  /**
   * Alphabetic code for the given currency
   */
  alphaCode: string | null;

  /**
   * Numeric code for the given currency
   */
  numericCode: string | null;

  /**
   * Name of currency
   */
  currencyName: string | null;

  /**
   * Number of places after the decimal for this currency
   */
  minorUnit: number;

  /**
   * Symbol for the given currency
   */
  symbol: string | null;
};
