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
 * A historic summary of all magic links sent in a given group
 */
export type MagicLinkSummaryModel = {

  /**
   * Group that the summary is for
   */
  groupKey: string;

  /**
   * Total number of magic links sent
   */
  totalCount: number;

  /**
   * Total number of magic links that failed to send
   */
  totalBounced: number;

  /**
   * Total number of visits across all magic links
   */
  totalVisited: number;
};
