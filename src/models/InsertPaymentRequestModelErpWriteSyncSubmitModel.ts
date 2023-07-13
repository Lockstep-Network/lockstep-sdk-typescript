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

import { InsertPaymentRequestModel } from "..";

/**
 * Lockstep.Shared.Models.Sync.ErpWriteSyncSubmitModel`1 represents a request to write back a collection
 *             of requests to the connected AppEnrollment.
 */
export type InsertPaymentRequestModelErpWriteSyncSubmitModel = {

  /**
   * The connected App Enrollment id.
   */
  appEnrollmentId: string;

  /**
   * An array of requests to write back.
   */
  requests: InsertPaymentRequestModel[];
};
