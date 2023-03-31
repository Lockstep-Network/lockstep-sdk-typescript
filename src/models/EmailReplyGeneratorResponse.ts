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

import { EmailReplyGeneratorSuggestions } from "..";

/**
 * Represents the response from SAGE GMS API
 */
export type EmailReplyGeneratorResponse = {

  /**
   * The id for this request in the GMS system
   */
  message_id: string | null;

  /**
   * A list of suggested email reply responses
   */
  suggestions: EmailReplyGeneratorSuggestions[] | null;
};
