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
 * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys
 * do not have an expiration date, they are well suited for unattended processes.  Each API Key
 * is associated with a user, and may be revoked to prevent it from accessing the Lockstep API.
 * When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot
 * retrieve an API Key once it is created.
 *
 * For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
 */
export type ApiKeyModel = {

  /**
   * The unique identifier for the API key.
   */
  apiKeyId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the API key.
   */
  name: string;

  /**
   * For convenience, a call to createApiKey will contain the name of the environment for this API key,
   * typically SBX or PRD. This can help you distinguish between keys created on the Sandbox environment
   * from those created on Production.
   */
  environment: string | null;

  /**
   * The API key to use for authentication. This will only be returned upon creation of the API key.
   * All other times, this value will be `null`.
   *
   * For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
   */
  apiKey: string | null;

  /**
   * The first 10 characters of the API key.  This information can be used to ensure that you are
   * looking at the correct API Key, but cannot be used for authentication.
   */
  keyPrefix: string | null;

  /**
   * The date the API key was created.
   */
  created: string;

  /**
   * The user that created the API key.
   */
  createdUserId: string;

  /**
   * The date the API key was revoked.
   */
  revoked: string | null;

  /**
   * The user who revoked the API key.
   */
  revokedUserId: string | null;

  /**
   * The UTC datetime when the API key expires.
   */
  expires: string | null;
};
