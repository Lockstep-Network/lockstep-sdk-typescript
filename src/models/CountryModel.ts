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
 * Country model for ISO-3166
 */
export type CountryModel = {

  /**
   * Name of the country
   */
  name: string | null;

  /**
   * 2 letter alphabetic code for the given country
   */
  alpha2: string | null;

  /**
   * 3 letter alphabetic code for the given country
   */
  alpha3: string | null;

  /**
   * Unique 3 digit number for the given country
   */
  countryCode: number;

  /**
   * Region of the country
   */
  region: string | null;

  /**
   * Subregion of the country
   */
  subRegion: string | null;

  /**
   * Intermediate region of the country
   */
  intermediateRegion: string | null;

  /**
   * Numeric code for a region
   */
  regionCode: number;

  /**
   * Numeric code for a subregion
   */
  subRegionCode: number;

  /**
   * Numeric code for an intermediate region
   */
  intermediateRegionCode: number;

  /**
   * French name of the country
   */
  frenchName: string | null;

  /**
   * A different name for a country
   */
  aliases: string | null;
};
