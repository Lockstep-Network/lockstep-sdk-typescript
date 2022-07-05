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
 * State model for ISO-3166-2
 */
export type StateModel = {

  /**
   * Name of the state
   */
  name: string | null;

  /**
   * 2 letter alphabetic code for the given state
   */
  alpha2: string | null;

  /**
   * A different name for a state
   */
  aliases: string | null;
};
