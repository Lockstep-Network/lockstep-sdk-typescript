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
 * Represents the response to either a successful or failed account provisioning
 */
export type ProvisioningResponseModel = {

  /**
   * If provisioning is successful, contains the username of the created user.
   */
  userName: string | null;

  /**
   * If provisioning is successful, contains subscription account name of created user.
   */
  accountName: string | null;

  /**
   * If provisioning is successful, contains the unique identifier of the created user.
   */
  userId: string | null;

  /**
   * If provisioning is successful, contains the group key of the created user.
   */
  groupKey: string | null;

  /**
   * If provisioning is successful, contains the app enrollment id of the created app enrollment.
   */
  appEnrollmentId: string | null;

  /**
   * if provisioning is successful, contains the sync request id of the sync that was started for the app enrollment.
   */
  syncRequestId: string | null;

  /**
   * The error message(s).
   */
  errorMessage: string | null;
};
