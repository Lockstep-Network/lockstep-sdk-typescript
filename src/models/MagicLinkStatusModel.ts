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


/**
 * Contains information about the user's magic link
 */
export type MagicLinkStatusModel = {

  /**
   * The id of the Magic link used to authenticate.
   */
  magicLinkId: string;

  /**
   * The id of the application for the Magic Link
   */
  applicationId: string;

  /**
   * The id of the target company for the Magic Link
   */
  companyId: string;

  /**
   * The id of the accounting profile for the Magic Link
   */
  accountingProfileId: string | null;

  /**
   * The UTC date and time when this magic link expires.
   */
  expires: string;
};
