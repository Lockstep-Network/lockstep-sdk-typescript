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

import { PaymentModel } from "..";

/**
 * Contains results of a write back request
 */
export type PaymentModelErpWriteResult = {

  /**
   * The id of the connected AppEnrollmentModel
   */
  appEnrollmentId: string;

  /**
   * The ErpKey for the object written to the Erp if created
   */
  erpKey: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * An optional message to return with the result
   */
  message: string | null;

  /**
   * The id of the SyncRequestModel the requests were added to
   */
  syncRequestId: string;

  /**
   * Results from the ERP write operation
   */
  results: PaymentModel[] | null;
};
