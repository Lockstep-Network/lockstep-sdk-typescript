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
 * A request to transcribe the provided file content to a Lockstep Platform object.
 */
export type TranscriptionRequestSubmit = {

  /**
   * The base64 string of document content
   */
  fileContent: string | null;

  /**
   * The location of the file provided
   */
  fileContentUrl: string | null;

  /**
   * The name of the file provided
   */
  fileName: string | null;

  /**
   * The type of LockstepApi2.Models.TranscriptionRequestSubmit.InvoiceTypeCode requested to transcribe content to.
   */
  invoiceTypeCode: string | null;

  /**
   * Group account transcription validation request item is associated with.
   */
  transcriptionValidationRequestId: string | null;
};
