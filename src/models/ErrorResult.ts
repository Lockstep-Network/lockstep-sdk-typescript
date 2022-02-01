/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

/**
 * Represents a failed API request.
 */
export class ErrorResult {
    /**
     * A description of the type of error that occurred.
     */
    type?: string;

    /**
     * A short title describing the error.
     */
    title?: string;

    /**
     * If an error code is applicable, this contains an error number.
     */
    status?: number;

    /**
     * If detailed information about this error is available, this value contains more information.
     */
    detail?: string;

    /**
     * If this error corresponds to a specific instance or object, this field indicates which one.
     */
    instance?: string;
}
