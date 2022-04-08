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

import { ErpInfoModel } from "..";

/**
 * Represents the data sent during the onboarding flow
 */
export type ProvisioningModel = {

  /**
   * The full name of the new user
   */
  fullName: string | null;

  /**
   * The information necessary to enroll the user in their ERP
   */
  erp: ErpInfoModel | null;
};
