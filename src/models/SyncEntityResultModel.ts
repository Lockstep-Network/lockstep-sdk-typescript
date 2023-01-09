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
 * Contains information about a sync process for an entity.
 */
export type SyncEntityResultModel = {

  /**
   * The number of entities inserted
   */
  insertCount: number;

  /**
   * The number of entities updated
   */
  updateCount: number;

  /**
   * The number of entities deleted
   */
  deleteCount: number;

  /**
   * The number of entities skipped
   */
  skipCount: number;

  /**
   * The number of errors encountered during sync
   */
  errorCount: number;

  /**
   * The errors encountered during sync keyed by ERP key
   */
  errors: object | null;
};
