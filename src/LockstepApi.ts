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
 * @version    2022.11.55
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { ActivitiesClient } from ".";
import { ApiKeysClient } from ".";
import { AppEnrollmentsClient } from ".";
import { ApplicationsClient } from ".";
import { AttachmentsClient } from ".";
import { CodeDefinitionsClient } from ".";
import { CompaniesClient } from ".";
import { ContactsClient } from ".";
import { CreditMemoAppliedClient } from ".";
import { CurrenciesClient } from ".";
import { CustomFieldDefinitionsClient } from ".";
import { CustomFieldValuesClient } from ".";
import { DefinitionsClient } from ".";
import { EmailsClient } from ".";
import { FinancialAccountClient } from ".";
import { FinancialAccountBalanceHistoryClient } from ".";
import { FinancialYearSettingsClient } from ".";
import { InvoiceHistoryClient } from ".";
import { InvoicesClient } from ".";
import { LeadsClient } from ".";
import { NotesClient } from ".";
import { PaymentApplicationsClient } from ".";
import { PaymentsClient } from ".";
import { ProvisioningClient } from ".";
import { ReportsClient } from ".";
import { StatusClient } from ".";
import { SyncClient } from ".";
import { UserAccountsClient } from ".";
import { UserRolesClient } from ".";
import { WebhooksClient } from ".";
import { LockstepResponse } from ".";

import * as axios from "axios";
import * as blob from "buffer";
import * as FormData from "form-data";
import * as fs from "fs";
import * as os from "os";
import * as url from "url";

/**
 * List of headers used by the Lockstep API
 */
export type LockstepApiHeaders =
  {
    SdkName?: string,
    SdkVersion?: string,
    MachineName?: string,
    ApplicationName?: string,
    Authorization?: string,
    ApiKey?: string 
  };

/**
 * Client object used to communicate with the Lockstep Platform API
 */
export class LockstepApi {

  // The URL of the environment we will use
  private readonly serverUrl: string;
  private readonly version: string = "2022.11.55";
  private bearerToken: string | null = null;
  private apiKey: string | null = null;
  private sdkName = "TypeScript";
  private appName: string | null = null;

  public readonly Activities: ActivitiesClient;
  public readonly ApiKeys: ApiKeysClient;
  public readonly AppEnrollments: AppEnrollmentsClient;
  public readonly Applications: ApplicationsClient;
  public readonly Attachments: AttachmentsClient;
  public readonly CodeDefinitions: CodeDefinitionsClient;
  public readonly Companies: CompaniesClient;
  public readonly Contacts: ContactsClient;
  public readonly CreditMemoApplied: CreditMemoAppliedClient;
  public readonly Currencies: CurrenciesClient;
  public readonly CustomFieldDefinitions: CustomFieldDefinitionsClient;
  public readonly CustomFieldValues: CustomFieldValuesClient;
  public readonly Definitions: DefinitionsClient;
  public readonly Emails: EmailsClient;
  public readonly FinancialAccount: FinancialAccountClient;
  public readonly FinancialAccountBalanceHistory: FinancialAccountBalanceHistoryClient;
  public readonly FinancialYearSettings: FinancialYearSettingsClient;
  public readonly InvoiceHistory: InvoiceHistoryClient;
  public readonly Invoices: InvoicesClient;
  public readonly Leads: LeadsClient;
  public readonly Notes: NotesClient;
  public readonly PaymentApplications: PaymentApplicationsClient;
  public readonly Payments: PaymentsClient;
  public readonly Provisioning: ProvisioningClient;
  public readonly Reports: ReportsClient;
  public readonly Status: StatusClient;
  public readonly Sync: SyncClient;
  public readonly UserAccounts: UserAccountsClient;
  public readonly UserRoles: UserRolesClient;
  public readonly Webhooks: WebhooksClient;

  /** 
   * Internal constructor for the Lockstep API client
   */
  private constructor(customUrl: string) {
    this.serverUrl = customUrl;

    this.Activities = new ActivitiesClient(this);
    this.ApiKeys = new ApiKeysClient(this);
    this.AppEnrollments = new AppEnrollmentsClient(this);
    this.Applications = new ApplicationsClient(this);
    this.Attachments = new AttachmentsClient(this);
    this.CodeDefinitions = new CodeDefinitionsClient(this);
    this.Companies = new CompaniesClient(this);
    this.Contacts = new ContactsClient(this);
    this.CreditMemoApplied = new CreditMemoAppliedClient(this);
    this.Currencies = new CurrenciesClient(this);
    this.CustomFieldDefinitions = new CustomFieldDefinitionsClient(this);
    this.CustomFieldValues = new CustomFieldValuesClient(this);
    this.Definitions = new DefinitionsClient(this);
    this.Emails = new EmailsClient(this);
    this.FinancialAccount = new FinancialAccountClient(this);
    this.FinancialAccountBalanceHistory = new FinancialAccountBalanceHistoryClient(this);
    this.FinancialYearSettings = new FinancialYearSettingsClient(this);
    this.InvoiceHistory = new InvoiceHistoryClient(this);
    this.Invoices = new InvoicesClient(this);
    this.Leads = new LeadsClient(this);
    this.Notes = new NotesClient(this);
    this.PaymentApplications = new PaymentApplicationsClient(this);
    this.Payments = new PaymentsClient(this);
    this.Provisioning = new ProvisioningClient(this);
    this.Reports = new ReportsClient(this);
    this.Status = new StatusClient(this);
    this.Sync = new SyncClient(this);
    this.UserAccounts = new UserAccountsClient(this);
    this.UserRoles = new UserRolesClient(this);
    this.Webhooks = new WebhooksClient(this);
  }

  /**
   * Construct a new Lockstep API client to target the specific environment.
   * 
   * @param env The environment to use, either "prd" for production or "sbx" for sandbox.
   * @returns The Lockstep API client to use
   */
  public static withEnvironment(env: "prd" | "sbx"): LockstepApi {
    let url = "https://api.lockstep.io";
    switch (env) {
      case "prd": url = "https://api.lockstep.io"; break;
      case "sbx": url = "https://api.sbx.lockstep.io"; break;
    }
    return new LockstepApi(url);
  }

  /**
   * Construct an unsafe client that uses a non-standard server; this can be necessary
   * when using proxy servers or an API gateway.  Please be careful when using this
   * mode.  You should prefer to use `withEnvironment()` instead wherever possible.
   * 
   * @param unsafeUrl The non-Lockstep URL to use for this client
   * @returns The Lockstep API client to use
   */
  public static withCustomEnvironment(unsafeUrl: string): LockstepApi {
    return new LockstepApi(unsafeUrl);
  }

  /**
   * Configure this Lockstep API client to use a JWT bearer token.
   * More documentation is available on [JWT Bearer Tokens](https://developer.lockstep.io/docs/jwt-bearer-tokens).
   * 
   * @param token The JWT bearer token to use for this API session
   */
  public withBearerToken(token: string): LockstepApi {
    this.bearerToken = token;
    this.apiKey = null;
    return this;
  }

  /**
   * Configures this Lockstep API client to use an API Key.
   * More documentation is available on [API Keys](https://developer.lockstep.io/docs/api-keys).
   * 
   * @param apiKey The API key to use for this API session
   */
  public withApiKey(apiKey: string): LockstepApi {
    this.apiKey = apiKey;
    this.bearerToken = null;
    return this;
  }
  
  /**
   * Configures this Lockstep API client to use an application name
   * 
   * @param appName The Application Name to use for this API session
   */
  public withApplicationName(appName: string): LockstepApi {
    this.appName = appName;
    return this;
      
  }
  
  /**
   * Construct headers for a request
   */
  private getHeaders(): LockstepApiHeaders {
    const headers: LockstepApiHeaders = {
      SdkName: this.sdkName,
      SdkVersion: this.version, 
      MachineName: os.hostname(), 
    };
    if (this.appName !== null) {
      headers["ApplicationName"] = this.appName;
    } 
    if (this.bearerToken !== null) {
      headers["Authorization"] = `Bearer ${this.bearerToken}`;
    } 
    else if (this.apiKey !== null) {
      headers["ApiKey"] = this.apiKey;
    }
         
    return headers;
  }

  /**
   * Make a GET request using this client
   */
  public async request<T>(method: axios.Method, path: string, options: unknown, body: unknown): Promise<LockstepResponse<T>> {
    const requestConfig = {
      url: new url.URL(path, this.serverUrl).href,
      method,
      params: options,
      data: body,
      headers: this.getHeaders(),
    };
    const result = await axios.default.request(requestConfig);
    return new LockstepResponse<T>(result.status, result.data);
  }

  /**
   * Upload a file to a REST endpoint and retrieve results as JSON
   */
  public async fileUpload<T>(method: axios.Method, path: string, options: unknown, filename: string): Promise<LockstepResponse<T>> {
    const fileBuffer = fs.readFileSync(filename);
    const formData = new FormData();
    formData.append("file", fileBuffer);
    const requestConfig: axios.AxiosRequestConfig = {
      url: new url.URL(path, this.serverUrl).href,
      method,
      data: formData,
      params: options,
      headers: this.getHeaders(),
    };
    const result = await axios.default.request(requestConfig);
    return new LockstepResponse<T>(result.status, result.data);
  }

  /**
   * Make a GET request using this client and download the results as a blob
   */
  public async requestBlob(method: axios.Method, path: string, options: unknown, body: unknown): Promise<LockstepResponse<Blob>> {
    const responseType: axios.ResponseType = "blob";
    const requestConfig = {
      url: new url.URL(path, this.serverUrl).href,
      method,
      params: options,
      data: body,
      headers: this.getHeaders(),
      responseType,
    };
    const result = await axios.default.request(requestConfig);
    return new LockstepResponse<Blob>(result.status, new blob.Blob(result.data));
  }
}
