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

import { TranscriptionValidationRequestItemModel } from "..";

/**
 * Represents a transcription validation request that is used to validate if file is of a specific type.
 */
export type TranscriptionValidationRequestModel = {

  /**
   * The unique identifier of the transcription validation request.
   */
  transcriptionValidationRequestId: string;

  /**
   * Group account transcription validation request is associated with.
   */
  groupKey: string;

  /**
   * A code identifying the status of this transcription validation request.
   *
   * Recognized Transcription Validation Request status codes are:
   * * `New` - Represents a transcription validation request that is considered new and needs work to complete
   * * `In Progress` - Represents a transcription validation request that is currently being worked on
   * * `Failed` - Represents a transcription validation request that could not complete the validation process
   * * `Complete` - Represents a transcription validation request that is considered complete and does not need any further work
   */
  statusCode: string | null;

  /**
   * The date on which this transcription validation request was created.
   */
  created: string;

  /**
   * The ID number of the user who created this transcription validation request.
   */
  createdUserId: string;

  /**
   * The date on which this transcription validation request was last modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this transcription validation request.
   */
  modifiedUserId: string;

  /**
   * All items attached to this transcription validation request.
   * To retrieve this collection, specify `Items` in the "Include" parameter for your query.
   */
  items: TranscriptionValidationRequestItemModel[] | null;
};
