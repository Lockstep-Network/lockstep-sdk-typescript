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
 * Model containing information about a user for the invite/onboarding process.
 */
export type InviteDataModel = {

  /**
   * The email address of the invited user.
   */
  email: string | null;

  /**
   * The status of the user.
   */
  userStatus: string | null;
};
