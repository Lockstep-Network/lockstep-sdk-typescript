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

import { CompanyModel } from "..";
import { ErpInfoModel } from "..";

/**
 * Represents the data to finalize onboarding for a user
 */
export type ProvisioningFinalizeRequestModel = {

  /**
   * The full name of the user
   */
  fullName: string;

  /**
   * The time zone of the user
   */
  timeZone: string | null;

  /**
   * The default currency of the user
   */
  defaultCurrency: string | null;

  /**
   * The company information for the user and group
   */
  company: CompanyModel | null;

  /**
   * Optional connector information needed to enroll user to their email connector
   */
  emailConnector: ErpInfoModel | null;
};
