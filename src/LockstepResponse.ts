/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
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

import { ErrorResult } from "..";

/**
 * Represents a response to an API call.  The status value contains the HTTP status code returned from the request.
 * If successful, value will be non-null.  If failed,
 */
export class LockstepResponse<T> {
  /**
   * True if this API call returned a successful result.
   */
  public success: boolean;

  /**
   * The HTTP status code for this API request.
   */
  public status: number;

  /**
   * If this API call was successful, contains the response from the server.
   */
  public value: T | null;

  /**
   * If this API call was not successful, contains information about the error.
   */
  public error: ErrorResult | null;

  /**
   * Constructs an API response based on this specified status code
   * @param status The HTTP status code for this response.
   * @param data The contents of the HTTP response.
   */
  constructor(status: number, data: unknown) {
    this.success = status >= 200 && status < 300;
    this.status = status;
    if (this.success) {
      this.value = data as T;
      this.error = null;
    } else {
      this.error = data as ErrorResult;
      this.value = null;
    }
  }
}
