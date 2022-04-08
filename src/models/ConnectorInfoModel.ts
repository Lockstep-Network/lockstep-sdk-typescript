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
 * Represents all possible data required to set up an app enrollment for a connector.
 * Only send required fields for the given connector.
 */
export type ConnectorInfoModel = {

  /**
   * The authorization code returned from the first step of the OAuth2 flow
   * https://oauth.net/2/grant-types/authorization-code/
   */
  authCode: string | null;

  /**
   * The realm id of the account being granted permissions to access
   */
  realmId: string | null;

  /**
   * The redirect uri used for step one of the OAuth2.0 flow.
   */
  redirectUri: string | null;

  /**
   * The email an email connection is being created for.
   */
  email: string | null;

  /**
   * The username of the web services account with access permissions.
   */
  username: string | null;

  /**
   * The password for the web services account with access permissions.
   */
  password: string | null;

  /**
   * The server name a connection is being created for.
   */
  serverName: string | null;

  /**
   * The port number of the server a connection is being created for.
   */
  serverPort: number | null;
};
