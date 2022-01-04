/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { ErrorResult } from "./ErrorResult";

/**
 * Represents a response to an API call.  The status value contains the HTTP status code returned from the request.
 * If successful, value will be non-null.  If failed, 
 */
export class LockstepResponse<T>
{
    public success: boolean;
    public status: number;
    public value: T | null;
    public error: ErrorResult | null;
}

