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
 * Information about result of delete operations
 */
export type DeleteResult = {

  /**
   * If the API call produced messages, this element will contain a list of user-visible
   * text strings that contain information about what work occurred in the API.
   */
  messages: string[] | null;
};
