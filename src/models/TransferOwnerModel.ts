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

import { UserAccountModel } from "..";

/**
 * Model from the transfer ownership process.
 */
export type TransferOwnerModel = {

  /**
   * The previous owner of the account.
   */
  previousOwner: UserAccountModel | null;

  /**
   * The new owner of the account.
   */
  newOwner: UserAccountModel | null;
};
