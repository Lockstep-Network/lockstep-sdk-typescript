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
 * @version    2022.3.23
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

require('../LockstepApi.js');
require('../models/LockstepResponse.js');
require('../models/DataModels.js');
require('../models/DataModels.js');
require('../models/DataModels.js');
require('../models/DataModels.js');
require('../models/DataModels.js');
require('../models/DataModels.js');
require('../models/DataModels.js');

export class ReportsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves a current Cash Flow report for this account.
   *
   * The Cash Flow report indicates the amount of payments retrieved and invoices billed within a given timeframe.  You can use this report to determine the overall balance of money coming into and out of your accounts receivable and accounts payable businesses.
   *
   * @param timeframe Number of days of data to include for the Cash Flow Report (default is 30 days from today)
   */
  cashFlow(timeframe: number): Promise<LockstepResponse<CashflowReportModel>> {
    const url = `/api/v1/Reports/cashflow`;
    const options = {
      params: {
        timeframe,
      },
    };
    return this.client.request<CashflowReportModel>('get', url, options, null);
  }

  /**
   * Retrieves a current Daily Sales Outstanding (DSO) report for this account.
   *
   * Daily Sales Outstanding, or DSO, is a metric that indicates the average number of days that it takes for an invoice to be fully paid.  You can use this report to identify whether a company is improving on its ability to collect on invoices.
   *
   */
  dailySalesOutstanding(): Promise<LockstepResponse<DailySalesOutstandingReportModel[]>> {
    const url = `/api/v1/Reports/dailysalesoutstanding`;
    return this.client.request<DailySalesOutstandingReportModel[]>('get', url, null, null);
  }

  /**
   * Retrieves a current Risk Rate report for this account.
   *
   * Risk Rate is a metric that indicates the percentage of total AR balance left unpaid after 90 days.  You can use this report to identify the percentage of invoice value that is not being collected in a timely manner.
   *
   */
  riskRates(): Promise<LockstepResponse<RiskRateModel[]>> {
    const url = `/api/v1/Reports/riskrates`;
    return this.client.request<RiskRateModel[]>('get', url, null, null);
  }

  /**
   * Retrieves AR header information up to the date specified.
   *
   * @param reportDate The date of the report.
   * @param companyId Include a company to get AR data for a specific company, leave as null to include all Companies.
   */
  accountsReceivableHeader(reportDate: string, companyId: string): Promise<LockstepResponse<ArHeaderInfoModel>> {
    const url = `/api/v1/Reports/ar-header`;
    const options = {
      params: {
        reportDate,
        companyId,
      },
    };
    return this.client.request<ArHeaderInfoModel>('get', url, options, null);
  }

  /**
   * The Aging Report contains information about the total dollar value of invoices broken down by their age. Last default or specified bucket treated as a catch all bucket for values that fit in that bucket or beyond.
   *
   * You can specify viewing parameters for the aging report such as currency code and date bucket configuration. You can also view aging data for an entire account or a specific company.
   *
   * This information is recalculated when invoice data changes.  After each invoice data change occurs, Lockstep queues up a calculation based on the current invoice data at that time.  This information is calculated and persisted for each customer so that the report will be available quickly.
   *
   * To force a recalculation of aging data, specify the `recalculate` option.  Note that forcing a recalculation will slow your API response time.
   *
   * @param CompanyId Company aging buckets are filtered by (all company aging returned if not company specified)
   * @param Recalculate Force api to recalculate aging data, cached data may be returned when set to false
   * @param CurrencyCode Currency aging buckets are converted to (all aging data returned without currency conversion if no currency is specified)
   * @param CurrencyProvider Currency provider currency rates should be returned from to convert aging amounts to (default Lockstep currency provider used if no data provider specified)
   * @param Buckets Customized buckets used for aging calculations (default buckets [0,30,60,90,120,180] will be used if buckets not specified)
   */
  invoiceagingreport(CompanyId: string, Recalculate: boolean, CurrencyCode: string, CurrencyProvider: string, Buckets: number[]): Promise<LockstepResponse<AgingModel[]>> {
    const url = `/api/v1/Reports/aging`;
    const options = {
      params: {
        CompanyId,
        Recalculate,
        CurrencyCode,
        CurrencyProvider,
        Buckets,
      },
    };
    return this.client.request<AgingModel[]>('get', url, options, null);
  }

  /**
   * Retrieves AR Aging Header information report broken down by aging bucket.
   *
   * The AR Aging Header report contains aggregated information about the `TotalInvoicesPastDue`, `TotalCustomers`, and their respective `PercentageOfTotalAr` grouped by their aging `ReportBucket`.
   *
   */
  accountsReceivableAgingHeader(): Promise<LockstepResponse<ArAgingHeaderInfoModel[]>> {
    const url = `/api/v1/Reports/ar-aging-header`;
    return this.client.request<ArAgingHeaderInfoModel[]>('get', url, null, null);
  }

  /**
   * Retrieves Attachment Header information for the requested companyId.
   *
   * The Attachment Header report contains aggregated information about the `TotalAttachments`, `TotalArchived`, and `TotalActive` attachment classifications.
   *
   * @param companyId Include a specific company to get Attachment data for, leave as null to include all Companies.
   */
  attachmentsHeaderInformation(companyId: string): Promise<LockstepResponse<AttachmentHeaderInfoModel>> {
    const url = `/api/v1/Reports/attachments-header`;
    const options = {
      params: {
        companyId,
      },
    };
    return this.client.request<AttachmentHeaderInfoModel>('get', url, options, null);
  }
}
