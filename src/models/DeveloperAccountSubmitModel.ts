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
 * Model containing information to create a new developer account.
 */
export type DeveloperAccountSubmitModel = {

  /**
   * The first name of the person requesting the developer account.
   */
  firstName: string | null;

  /**
   * The last name of the person requesting the developer account.
   */
  lastName: string | null;

  /**
   * The email address of the developer.
   */
  email: string;

  /**
   * The company name of the developer.
   */
  companyName: string;
};
