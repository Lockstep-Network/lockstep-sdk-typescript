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

import { ConnectorInfoModel } from "..";

/**
 * Represents the ERP object sent in a provisioning request
 */
export type ErpInfoModel = {

  /**
   * The id of the ERP's App
   */
  appId: string;

  /**
   * The data required to store for connector access
   */
  data: ConnectorInfoModel | null;
};
