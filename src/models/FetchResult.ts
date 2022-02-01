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
 * Represents the results of a query.  The total number of records matching the query are in the `totalCount` parameter.
 * You can use `pageSize` and `pageNumber` to continue fetching data until `totalCount` is reached.
 */
export class FetchResult<T> {
    /**
     * The paginated and filtered list of records matching the parameters you supplied.
     */
    records: T[] | null;
    /**
     * The total number of rows matching the filter.  If unknown, returns null.
     */
    totalCount: number;
    /**
     * If the original request was submitted using Page Size-based pagination, contains the page size for this query.  Null otherwise.
     */
    pageSize: number;
    /**
     * If the original request was submitted using Page Size-based pagination, contains the page number of this current result.  Null otherwise.
     *
     * To get the next page of results, make a new request with the same pageSize but add one to the pageNumber.
     */
    pageNumber: number;
    
    /**
     * Create a new query result object
     */
    constructor()
    {
        this.records = null;
        this.totalCount = 0;
        this.pageNumber = 0;
        this.pageSize = 0;
    }
}
