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
 * Represents unsupported ERP systems
 */
export type ErpModel = {

  /**
   * Unique ID for this ERP
   */
  erpSystemId: string;

  /**
   * Name of ERP
   */
  name: string | null;

  /**
   * Flag to indicate if ERP is supported
   */
  isSupported: boolean;
};
