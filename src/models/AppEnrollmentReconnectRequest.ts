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
 * Information to reconnect an ERP.
 */
export type AppEnrollmentReconnectRequest = {

  /**
   * The OAuth authentication code.
   */
  authCode: string | null;

  /**
   * The OAuth authentication code.
   */
  username: string | null;

  /**
   * The password for the web services account with access permissions.
   */
  password: string | null;

  /**
   * The access token id for the connector enrollment.
   */
  tokenId: string | null;

  /**
   * The access token secret for the connector enrollment.
   */
  tokenSecret: string | null;
};
