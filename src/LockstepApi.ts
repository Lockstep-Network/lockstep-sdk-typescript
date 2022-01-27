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
 * @version    2022.3.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import * as axios from "axios";
import { ActivitiesClient } from "./clients/ActivitiesClient.js";
import { ApiKeysClient } from "./clients/ApiKeysClient.js";
import { AppEnrollmentsClient } from "./clients/AppEnrollmentsClient.js";
import { ApplicationsClient } from "./clients/ApplicationsClient.js";
import { AttachmentsClient } from "./clients/AttachmentsClient.js";
import { CodeDefinitionsClient } from "./clients/CodeDefinitionsClient.js";
import { CompaniesClient } from "./clients/CompaniesClient.js";
import { ContactsClient } from "./clients/ContactsClient.js";
import { CreditMemoAppliedClient } from "./clients/CreditMemoAppliedClient.js";
import { CurrenciesClient } from "./clients/CurrenciesClient.js";
import { CustomFieldDefinitionsClient } from "./clients/CustomFieldDefinitionsClient.js";
import { CustomFieldValuesClient } from "./clients/CustomFieldValuesClient.js";
import { DefinitionsClient } from "./clients/DefinitionsClient.js";
import { EmailsClient } from "./clients/EmailsClient.js";
import { InvoiceHistoryClient } from "./clients/InvoiceHistoryClient.js";
import { InvoicesClient } from "./clients/InvoicesClient.js";
import { LeadsClient } from "./clients/LeadsClient.js";
import { NotesClient } from "./clients/NotesClient.js";
import { PaymentApplicationsClient } from "./clients/PaymentApplicationsClient.js";
import { PaymentsClient } from "./clients/PaymentsClient.js";
import { ProvisioningClient } from "./clients/ProvisioningClient.js";
import { ReportsClient } from "./clients/ReportsClient.js";
import { StatusClient } from "./clients/StatusClient.js";
import { SyncClient } from "./clients/SyncClient.js";
import { UserAccountsClient } from "./clients/UserAccountsClient.js";
import { UserRolesClient } from "./clients/UserRolesClient.js";
import { ErrorResult } from "./models/ErrorResult.js";
import { LockstepResponse } from "./models/LockstepResponse.js";
import { hostname as _hostname } from "os";

export class LockstepApi {

  // The URL of the environment we will use
  private readonly serverUrl: string;
  private readonly version: string = "2022.3.32";
  private bearerToken: string | null = null;
  private apiKey: string | null = null;
  private sdkName = "TypeScript";
  private machineName: string | null = null;
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
   * Returns the currently selected application name 
   */
  public getAppName(): any {
    return this.appName;
  }

  /**
   * Construct headers for a request
   */
  private getHeaders(): any {
    const hostName = _hostname();
    const headers = { 
      "SdkName": this.sdkName,
      "SdkVersion": this.version, 
      "MachineName": hostName, 
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
  public async request<T>(method: axios.Method, path: string, options: any, body: any): Promise<LockstepResponse<T>> {
    const requestConfig = {
      url: new URL(path, this.serverUrl).href,
      method,
      params: options,
      data: body,
      headers: this.getHeaders(),
    };
    const result = await axios.default.request(requestConfig);
    const response = new LockstepResponse<T>(result.status >= 200 && result.status < 300, result.status);
    if (response.success) {
      response.value = result.data as T;
    } else {
      response.error = result.data as ErrorResult;
    }
    return response;
  }
}
