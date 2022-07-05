/**
 * Lockstep Platform SDK for TypeScript
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

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { CashflowReportModel } from "..";
import { PayablesSummaryReportModel } from "..";
import { DailySalesOutstandingReportModel } from "..";
import { DailyPayableOutstandingReportModel } from "..";
import { PayablesComingDueWidgetModel } from "..";
import { FetchResult } from "..";
import { PayablesComingDueModel } from "..";
import { PayablesComingDueHeaderModel } from "..";
import { RiskRateModel } from "..";
import { ArHeaderInfoModel } from "..";
import { ApHeaderInfoModel } from "..";
import { AgingModel } from "..";
import { ArAgingHeaderInfoModel } from "..";
import { ApAgingHeaderInfoModel } from "..";
import { AttachmentHeaderInfoModel } from "..";
import { FinancialReportModel } from "..";
import { DpoSummaryModel } from "..";
import { DpoSummaryGroupTotalModel } from "..";

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
  cashFlow(timeframe?: number): Promise<LockstepResponse<CashflowReportModel>> {
    const url = `/api/v1/Reports/cashflow`;
    const options = {
      params: {
        timeframe,
      },
    };
    return this.client.request<CashflowReportModel>("get", url, options, null);
  }

  /**
   * Retrieves a current Payables Summary report for this account.
   *
   * The Payables Summary report indicates the amount of payments sent and bills received within a given timeframe.  You can use this report to determine the overall balance of money coming into and out of your accounts receivable and accounts payable businesses.
   *
   * @param timeframe Number of days of data to include for the Payables Summary Report (default is 30 days from today)
   */
  payablesSummaryReport(timeframe?: number): Promise<LockstepResponse<PayablesSummaryReportModel>> {
    const url = `/api/v1/Reports/payables-summary`;
    const options = {
      params: {
        timeframe,
      },
    };
    return this.client.request<PayablesSummaryReportModel>("get", url, options, null);
  }

  /**
   * Retrieves a current Daily Sales Outstanding (DSO) report for this account.
   *
   * Daily Sales Outstanding, or DSO, is a metric that indicates the average number of days that it takes for an invoice to be fully paid.  You can use this report to identify whether a company is improving on its ability to collect on invoices.
   *
   */
  dailySalesOutstanding(): Promise<LockstepResponse<DailySalesOutstandingReportModel[]>> {
    const url = `/api/v1/Reports/dailysalesoutstanding`;
    return this.client.request<DailySalesOutstandingReportModel[]>("get", url, null, null);
  }

  /**
   * Retrieves a current Days Payable Outstanding (DPO) report for this account.
   *
   * Days payable outstanding (DPO) is a financial ratio that indicates the average time (in days) that a company takes to pay its bills to its trade creditors, which may include suppliers, vendors, or financiers.
   *
   */
  daysPayableOutstanding(): Promise<LockstepResponse<DailyPayableOutstandingReportModel[]>> {
    const url = `/api/v1/Reports/daily-payable-outstanding`;
    return this.client.request<DailyPayableOutstandingReportModel[]>("get", url, null, null);
  }

  /**
   * Retrieves payable amount due for 4 time buckets (Today, 7 Days from Today, 14 Days from Today, and 30 Days from Today).
   *
   */
  payablesComingDue(): Promise<LockstepResponse<PayablesComingDueWidgetModel[]>> {
    const url = `/api/v1/Reports/payables-coming-due`;
    return this.client.request<PayablesComingDueWidgetModel[]>("get", url, null, null);
  }

  /**
   * Payables coming due represents the amount of cash required to pay vendor bills based on the due dates of the bills. Each bucket represents total amount due within the time period based on open Payables as of today.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 200, maximum of 10,000)
   * @param pageNumber The page number for results (default 0)
   */
  payablesComingDueSummary(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<PayablesComingDueModel>>> {
    const url = `/api/v1/Reports/payables-coming-due-summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<PayablesComingDueModel>>("get", url, options, null);
  }

  /**
   * Retrieves total number of vendors, bills, the total amount outstanding, for a group.
   *
   * @param reportDate The date the outstanding values are calculated on. Should be either the current day, 7 days after the current day, 14 days after the current day, or 30 days after the current day.
   */
  payablesComingDueHeader(reportDate: string): Promise<LockstepResponse<PayablesComingDueHeaderModel[]>> {
    const url = `/api/v1/Reports/payables-coming-due-header`;
    const options = {
      params: {
        reportDate,
      },
    };
    return this.client.request<PayablesComingDueHeaderModel[]>("get", url, options, null);
  }

  /**
   * Retrieves a current Risk Rate report for this account.
   *
   * Risk Rate is a metric that indicates the percentage of total AR balance left unpaid after 90 days.  You can use this report to identify the percentage of invoice value that is not being collected in a timely manner.
   *
   */
  riskRates(): Promise<LockstepResponse<RiskRateModel[]>> {
    const url = `/api/v1/Reports/riskrates`;
    return this.client.request<RiskRateModel[]>("get", url, null, null);
  }

  /**
   * Retrieves AR header information up to the date specified.
   *
   * @param reportDate The date of the report.
   * @param companyId Include a company to get AR data for a specific company, leave as null to include all Companies.
   */
  accountsReceivableHeader(reportDate: string, companyId?: string): Promise<LockstepResponse<ArHeaderInfoModel>> {
    const url = `/api/v1/Reports/ar-header`;
    const options = {
      params: {
        reportDate,
        companyId,
      },
    };
    return this.client.request<ArHeaderInfoModel>("get", url, options, null);
  }

  /**
   * Retrieves AP header information up to the date specified.
   *
   * @param reportDate The date of the report.
   * @param companyId Include a company to get AP data for a specific company, leave as null to include all Companies.
   */
  accountsPayableHeader(reportDate: string, companyId?: string): Promise<LockstepResponse<ApHeaderInfoModel>> {
    const url = `/api/v1/Reports/ap-header`;
    const options = {
      params: {
        reportDate,
        companyId,
      },
    };
    return this.client.request<ApHeaderInfoModel>("get", url, options, null);
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
   * @param ApReport A boolean to turn on AP Aging reports
   */
  invoiceagingreport(CompanyId?: string, Recalculate?: boolean, CurrencyCode?: string, CurrencyProvider?: string, Buckets?: number[], ApReport?: boolean): Promise<LockstepResponse<AgingModel[]>> {
    const url = `/api/v1/Reports/aging`;
    const options = {
      params: {
        CompanyId,
        Recalculate,
        CurrencyCode,
        CurrencyProvider,
        Buckets,
        ApReport,
      },
    };
    return this.client.request<AgingModel[]>("get", url, options, null);
  }

  /**
   * Retrieves AR Aging Header information report broken down by aging bucket.
   *
   * The AR Aging Header report contains aggregated information about the `TotalInvoicesPastDue`, `TotalCustomers`, and their respective `PercentageOfTotalAr` grouped by their aging `ReportBucket`.
   *
   */
  accountsReceivableAgingHeader(): Promise<LockstepResponse<ArAgingHeaderInfoModel[]>> {
    const url = `/api/v1/Reports/ar-aging-header`;
    return this.client.request<ArAgingHeaderInfoModel[]>("get", url, null, null);
  }

  /**
   * Retrieves AP Aging Header information report broken down by aging bucket.
   *
   * The AP Aging Header report contains aggregated information about the `TotalBillsPastDue`, `TotalVendors`, and their respective `PercentageOfTotalAp` grouped by their aging `ReportBucket`.
   *
   */
  accountsPayableAgingHeader(): Promise<LockstepResponse<ApAgingHeaderInfoModel[]>> {
    const url = `/api/v1/Reports/ap-aging-header`;
    return this.client.request<ApAgingHeaderInfoModel[]>("get", url, null, null);
  }

  /**
   * Retrieves Attachment Header information for the requested companyId.
   *
   * The Attachment Header report contains aggregated information about the `TotalAttachments`, `TotalArchived`, and `TotalActive` attachment classifications.
   *
   * @param companyId Include a specific company to get Attachment data for, leave as null to include all Companies.
   */
  attachmentsHeaderInformation(companyId?: string): Promise<LockstepResponse<AttachmentHeaderInfoModel>> {
    const url = `/api/v1/Reports/attachments-header`;
    const options = {
      params: {
        companyId,
      },
    };
    return this.client.request<AttachmentHeaderInfoModel>("get", url, options, null);
  }

  /**
   * Generates a Trial Balance Report for the given time range.
   *
   * @param startDate The start date of the report
   * @param endDate The end date of the report
   * @param appEnrollmentId The app enrollment id of the app enrollment whose data will be used.
   */
  trialBalanceReport(startDate?: string, endDate?: string, appEnrollmentId?: string): Promise<LockstepResponse<FinancialReportModel>> {
    const url = `/api/v1/Reports/trial-balance`;
    const options = {
      params: {
        startDate,
        endDate,
        appEnrollmentId,
      },
    };
    return this.client.request<FinancialReportModel>("get", url, options, null);
  }

  /**
   * Generates an Income Statement for the given time range.
   *
   * @param startDate The start date of the report
   * @param endDate The end date of the report
   * @param appEnrollmentId The app enrollment id of the app enrollment whose data will be used.
   * @param columnOption The desired column splitting of the report data. An empty string or anything unrecognized will result in only totals being displayed. Options are as follows: By Period - a column for every month/fiscal period within the reporting dates Quarterly - a column for every quarter within the reporting dates Annually - a column for every year within the reporting dates
   * @param displayDepth The desired row splitting of the report data. For Income Statements, the minimum report depth is 1. Options are as follows: 1 - combine all accounts by their category 2 - combine all accounts by their subcategory 3 - display all accounts
   * @param comparisonPeriod Add a column for historical data with the following options and use showCurrencyDifference and/or show percentageDifference to display a comparison of that historical data to the report period. Options are as follows (note for YTD the data will be compared as a percentage of YTD and showCurrencyDifference and showPercentageDifference should not be used): "PP" - previous period (will show the previous quarter or year if Quarterly or Annually is chosen for columnOption) "PY" - previous year (the same date range as the report, but for the year prior) "YTD" - year to date (the current financial year to the current period)
   * @param showCurrencyDifference A boolean to turn on a currency based difference between the reporting period and the comparison period.
   * @param showPercentageDifference A boolean to turn on a percent based difference between the reporting period and the comparison period.
   */
  incomeStatementReport(startDate?: string, endDate?: string, appEnrollmentId?: string, columnOption?: string, displayDepth?: number, comparisonPeriod?: string, showCurrencyDifference?: boolean, showPercentageDifference?: boolean): Promise<LockstepResponse<FinancialReportModel>> {
    const url = `/api/v1/Reports/income-statement`;
    const options = {
      params: {
        startDate,
        endDate,
        appEnrollmentId,
        columnOption,
        displayDepth,
        comparisonPeriod,
        showCurrencyDifference,
        showPercentageDifference,
      },
    };
    return this.client.request<FinancialReportModel>("get", url, options, null);
  }

  /**
   * Generates a balance sheet for the given time range.
   *
   * @param startDate The start date of the report
   * @param endDate The end date of the report
   * @param appEnrollmentId The app enrollment id of the app enrollment whose data will be used.
   * @param columnOption The desired column splitting of the report data. An empty string or anything unrecognized will result in only totals being displayed. Options are as follows: By Period - a column for every month/fiscal period within the reporting dates Quarterly - a column for every quarter within the reporting dates Annually - a column for every year within the reporting dates
   * @param displayDepth The desired row splitting of the report data. For Balance Sheets, the minimum report depth is 1. Options are as follows: 1 - combine all accounts by their category 2 - combine all accounts by their subcategory 3 - display all accounts
   * @param comparisonPeriod Add a column for historical data with the following options and use showCurrencyDifference and/or show percentageDifference to display a comparison of that historical data to the report period. "PP" - previous period (will show the previous quarter or year if Quarterly or Annually is chosen for columnOption) "PY" - previous year (the same date range as the report, but for the year prior)
   * @param showCurrencyDifference A boolean to turn on a currency based difference between the reporting period and the comparison period.
   * @param showPercentageDifference A boolean to turn on a percent based difference between the reporting period and the comparison period.
   */
  balanceSheetReport(startDate?: string, endDate?: string, appEnrollmentId?: string, columnOption?: string, displayDepth?: number, comparisonPeriod?: string, showCurrencyDifference?: boolean, showPercentageDifference?: boolean): Promise<LockstepResponse<FinancialReportModel>> {
    const url = `/api/v1/Reports/balance-sheet`;
    const options = {
      params: {
        startDate,
        endDate,
        appEnrollmentId,
        columnOption,
        displayDepth,
        comparisonPeriod,
        showCurrencyDifference,
        showPercentageDifference,
      },
    };
    return this.client.request<FinancialReportModel>("get", url, options, null);
  }

  /**
   * Generates a cash flow statement for the given time range.
   *
   * @param startDate The start date of the report
   * @param endDate The end date of the report
   * @param appEnrollmentId The app enrollment id of the app enrollment whose data will be used.
   * @param columnOption The desired column splitting of the report data. An empty string or anything unrecognized will result in only totals being displayed. Options are as follows: By Period - a column for every month/fiscal period within the reporting dates Quarterly - a column for every quarter within the reporting dates Annually - a column for every year within the reporting dates
   * @param displayDepth The desired row splitting of the report data. Options are as follows: 0 - combine all accounts by their classification 1 - combine all accounts by their category 2 - combine all accounts by their subcategory 3 - display all accounts
   */
  cashFlowStatementReport(startDate?: string, endDate?: string, appEnrollmentId?: string, columnOption?: string, displayDepth?: number): Promise<LockstepResponse<FinancialReportModel>> {
    const url = `/api/v1/Reports/cash-flow-statement`;
    const options = {
      params: {
        startDate,
        endDate,
        appEnrollmentId,
        columnOption,
        displayDepth,
      },
    };
    return this.client.request<FinancialReportModel>("get", url, options, null);
  }

  /**
   * Retrieves a summary for each vendor that includes a count of their outstanding bills, the total amount outstanding, and their daily payable outstanding value.
   *
   * Days payable outstanding (DPO) is a financial ratio that indicates the average time (in days) that a company takes to pay its bills to its trade creditors, which may include suppliers, vendors, or financiers.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * @param reportDate The date the outstanding values are calculated on. Should be either the current day or the end of a previous quarter.
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
   * @param pageSize The page size for results (default 200, maximum of 10,000)
   * @param pageNumber The page number for results (default 0)
   */
  daysPayableOutstandingSummary(reportDate: string, filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<DpoSummaryModel[]>> {
    const url = `/api/v1/Reports/daily-payable-outstanding-summary`;
    const options = {
      params: {
        reportDate,
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<DpoSummaryModel[]>("get", url, options, null);
  }

  /**
   * Retrieves total number of vendors, bills, the total amount outstanding, and the daily payable outstanding value for a group.
   *
   * Days payable outstanding (DPO) is a financial ratio that indicates the average time (in days) that a company takes to pay its bills to its trade creditors, which may include suppliers, vendors, or financiers.
   *
   * @param reportDate The date the outstanding values are calculated on. Should be either the current day or the end of a previous quarter.
   */
  daysPayableOutstandingSummaryTotal(reportDate: string): Promise<LockstepResponse<DpoSummaryGroupTotalModel[]>> {
    const url = `/api/v1/Reports/daily-payable-outstanding-summary-total`;
    const options = {
      params: {
        reportDate,
      },
    };
    return this.client.request<DpoSummaryGroupTotalModel[]>("get", url, options, null);
  }
}
