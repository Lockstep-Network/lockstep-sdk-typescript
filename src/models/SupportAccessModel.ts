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
 * Contains information for Lockstep to support/assist a user.
 */
export type SupportAccessModel = {

  /**
   * The code required to assist the user.
   */
  code: string | null;

  /**
   * The UTC date and time when the support access will expire.
   */
  expiresAt: string | null;
};
