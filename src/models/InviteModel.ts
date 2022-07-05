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

import { UserAccountModel } from "..";

/**
 * Model from the User invite process
 */
export type InviteModel = {

  /**
   * The invited email address
   */
  email: string | null;

  /**
   * True if the invite was sent successfully
   */
  success: boolean;

  /**
   * The invited user, may be null if the user could not be invited
   */
  invitedUser: UserAccountModel | null;

  /**
   * The error message if the invite was not successful
   */
  errorMessage: string | null;
};
