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
 * Represents a transcription validation request item to be validated.
 */
export type TranscriptionValidationRequestItem = {

  /**
   * The unique identifier of the transcription validation request item.
   */
  transcriptionValidationRequestItemId: string;

  /**
   * The ID number of the transcription validation request this item belongs to.
   */
  transcriptionValidationRequestId: string;

  /**
   * Group account transcription validation request item is associated with.
   */
  groupKey: string;

  /**
   * Generated hash of the file being validated.
   */
  fileHash: string | null;

  /**
   * Original name of the file on disk, without its extension.
   */
  fileName: string | null;

  /**
   * Original extension name of the file on disk.
   */
  fileExt: string | null;

  /**
   * Location of file in blob storage to be validated.
   */
  fileLocation: string | null;

  /**
   * Transcription result
   */
  transcriptionResult: string | null;

  /**
   * Transcription process start date
   */
  processStart: string | null;

  /**
   * Transcription process end date
   */
  processEnd: string | null;

  /**
   * Amount of times item was processed to retrieve the transcription data
   */
  retryCount: number;

  /**
   * Feedback result specified by the client when the transcription result is not correct. This feedback result will be sent back to the transcription services to retrain and improve models over time.
   */
  feedbackResult: string | null;

  /**
   * Date when feedback result was sent back to transcription service.
   */
  feedbackSent: string | null;

  /**
   * A code identifying the status of this transcription validation request item.
   *
   * Recognized Transcription Validation Request status codes are:
   * * `New` - Represents a transcription validation request item that is considered new and needs work to complete
   * * `In Progress` - Represents a transcription validation request item that is currently being worked on
   * * `Failed` - Represents a transcription validation request item that could not complete the validation process
   * * `Complete` - Represents a transcription validation request item that is considered complete and does not need any further work
   */
  statusCode: string | null;

  /**
   * The date on which this transcription validation request item was created.
   */
  created: string;

  /**
   * The ID number of the user who created this transcription validation request item.
   */
  createdUserId: string;

  /**
   * The date on which this transcription validation request item was last modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this transcription validation request item.
   */
  modifiedUserId: string;
};
