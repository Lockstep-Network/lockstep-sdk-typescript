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
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */


import { LockstepApi } from "../APIClient";

export class DefinitionsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }


  /**
   * Queries the ISO3166 List of Countries using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Your program may want to show a list of countries. The ISO maintains a list of countries called [ISO3166](https://www.iso.org/iso-3166-country-codes.html). For convenience, this list is available in the API.
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available, but may be offered in the future.
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryCountries(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<CountryModel> | ErrorResult> {
    const url = `/api/v1/Definitions/countries`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.get<FetchResult<CountryModel>>(url, options, null);
  }

  /**
   * Queries Currencies on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   * 
   * Your app may wish to make use of a reference list that contains names and attributes for all ISO-4217 defined currency codes.  This information is provided via a query endpoint so that you can use this API to provide a user selection screen.
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available, but may be offered in the future.
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryCurrencies(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<CurrencyModel> | ErrorResult> {
    const url = `/api/v1/Definitions/currencies`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.get<FetchResult<CurrencyModel>>(url, options, null);
  }

  /**
   * Queries the list of States in the United States using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Your app may wish to make use of a reference list that contains names and codes for all states in the United States.  This information is provided for the United States since many financial systems require mailing addresses that use codes for states.
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available, but may be offered in the future.
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryStates(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<StateModel> | ErrorResult> {
    const url = `/api/v1/Definitions/states`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.get<FetchResult<StateModel>>(url, options, null);
  }

  /**
   * Queries a list of financial systems using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Lockstep provides a list of financial systems that may be useful as a selection screen that allows customers to select from a list.  You can query these items by name or attributes and use this data source to help users complete a selection.
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve.        No collections are currently available, but may be offered in the future.
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryFinancialSystems(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<FetchResult<ErpModel> | ErrorResult> {
    const url = `/api/v1/Definitions/financialsystems`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.get<FetchResult<ErpModel>>(url, options, null);
  }
}
