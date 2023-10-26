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

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { CompanyModel } from "..";
import { DeleteResult } from "..";
import { BulkDeleteRequestModel } from "..";
import { FetchResult } from "..";
import { CustomerSummaryModel } from "..";
import { VendorSummaryModel } from "..";
import { CompanyMagicLinkSummaryModel } from "..";
import { CompanyDetailsModel } from "..";
import { ViewBoxSettingsModel } from "..";

export class CompaniesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Company specified by this unique identifier, optionally including nested data sets.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, Contacts, CustomFields, Invoices, Notes, Classification
   */
  retrieveCompany(id: string, include?: string): Promise<LockstepResponse<CompanyModel>> {
    const url = `/api/v1/Companies/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<CompanyModel>("get", url, options, null);
  }

  /**
   * Updates a Company that matches the specified id with the requested information.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
   * @param body A list of changes to apply to this Company
   */
  updateCompany(id: string, body: object): Promise<LockstepResponse<CompanyModel>> {
    const url = `/api/v1/Companies/${id}`;
    return this.client.request<CompanyModel>("patch", url, null, body);
  }

  /**
   * Delete the Company referred to by this unique identifier.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
   */
  deleteCompany(id: string): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/Companies/${id}`;
    return this.client.request<DeleteResult>("delete", url, null, null);
  }

  /**
   * Creates one or more Companies from a given model.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param body The Companies to create
   */
  createCompanies(body: CompanyModel[]): Promise<LockstepResponse<CompanyModel[]>> {
    const url = `/api/v1/Companies`;
    return this.client.request<CompanyModel[]>("post", url, null, body);
  }

  /**
   * Delete the Companies referred to by these unique identifiers.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param body The unique Lockstep Platform ID numbers of the Companies to delete; NOT the customer's ERP key
   */
  deleteCompanies(body: BulkDeleteRequestModel): Promise<LockstepResponse<DeleteResult>> {
    const url = `/api/v1/Companies`;
    return this.client.request<DeleteResult>("delete", url, null, body);
  }

  /**
   * Queries Companies for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, Contacts, CustomFields, Invoices, Notes, Classification
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 250, maximum of 500)
   * @param pageNumber The page number for results (default 0)
   */
  queryCompanies(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<CompanyModel>>> {
    const url = `/api/v1/Companies/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<CompanyModel>>("get", url, options, null);
  }

  /**
   * Queries Customer Summaries for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * The Customer Summary View represents a slightly different view of the data and includes some extra fields that might be useful. For more information, see the data format of the Customer Summary Model.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 250, maximum of 500)
   * @param pageNumber The page number for results (default 0)
   * @param reportDate The date to calculate the fields on. If no date is entered the current UTC date will be used.
   */
  queryCustomerSummary(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number, reportDate?: string): Promise<LockstepResponse<FetchResult<CustomerSummaryModel>>> {
    const url = `/api/v1/Companies/views/customer-summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
        reportDate,
      },
    };
    return this.client.request<FetchResult<CustomerSummaryModel>>("get", url, options, null);
  }

  /**
   * Queries Vendor Summaries for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * The Vendor Summary View represents a slightly different view of the data and includes some extra fields that might be useful. For more information, see the data format of the Vendor Summary Model.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 250, maximum of 500)
   * @param pageNumber The page number for results (default 0)
   * @param reportDate The date to calculate the fields on. If no date is entered the current UTC date will be used.
   */
  queryVendorSummary(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number, reportDate?: string): Promise<LockstepResponse<FetchResult<VendorSummaryModel>>> {
    const url = `/api/v1/Companies/views/vendor-summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
        reportDate,
      },
    };
    return this.client.request<FetchResult<VendorSummaryModel>>("get", url, options, null);
  }

  /**
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 250, maximum of 500)
   * @param pageNumber The page number for results (default 0)
   */
  queryMagicLinkSummary(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<CompanyMagicLinkSummaryModel>>> {
    const url = `/api/v1/Companies/views/magic-link-summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<CompanyMagicLinkSummaryModel>>("get", url, options, null);
  }

  /**
   * Retrieves the Company Details specified by this unique identifier, optionally including nested data sets.
   *
   * The Company Detail View represents a slightly different view of the data and includes some extra fields that might be useful. For more information, see the data format of the Company Detail Model.
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param id The unique Lockstep Platform ID number of this Company; NOT the company's ERP key
   */
  retrieveCompanyDetail(id: string): Promise<LockstepResponse<CompanyDetailsModel>> {
    const url = `/api/v1/Companies/views/details/${id}`;
    return this.client.request<CompanyDetailsModel>("get", url, null, null);
  }

  /**
   * Sets the logo for specified company. The logo will be stored in the Lockstep Platform and will be **publicly accessible**.
   *
   * .jpg, .jpeg, .png, and .webp are supported. 2MB maximum. If no logo is uploaded, the existing logo will be deleted.
   *
   * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
   *
   * Optional view box meta data for the provided logo may be supplied using the following query parameters. Please note that you must supply either all of the values or none of the values. <ul><li>min_x</li><li>min_y</li><li>width</li><li>height</li></ul>
   *
   * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
   *
   * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
   * @param min_x ViewBox minX setting for this Company's logo.
   * @param min_y ViewBox minY setting for this Company's logo.
   * @param width ViewBox width setting for this Company's logo.
   * @param height ViewBox height setting for this Company's logo.
   * @param filename The full path of a file to upload to the API
   */
  setCompanyLogo(id: string, filename: string, min_x?: number, min_y?: number, width?: number, height?: number): Promise<LockstepResponse<CompanyModel>> {
    const url = `/api/v1/Companies/${id}/logo`;
    const options = {
      params: {
        min_x,
        min_y,
        width,
        height,
      },
    };
    return this.client.fileUpload("post", url, options, filename);
  }

  /**
   * Update view box meta data for the given Company id.
   *
   * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
   * @param body The `ViewBoxSettingsModel` containing meta data value updates
   */
  updatelogoviewboxsettings(id: string, body: ViewBoxSettingsModel): Promise<LockstepResponse<CompanyModel>> {
    const url = `/api/v1/Companies/${id}/logo-settings`;
    return this.client.request<CompanyModel>("patch", url, null, body);
  }
}
