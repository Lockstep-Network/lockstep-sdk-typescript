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

import * as axios from "axios";
import { ActivitiesClient } from "./clients/ActivitiesClient";
import { ApiKeysClient } from "./clients/ApiKeysClient";
import { AppEnrollmentsClient } from "./clients/AppEnrollmentsClient";
import { ApplicationsClient } from "./clients/ApplicationsClient";
import { AttachmentsClient } from "./clients/AttachmentsClient";
import { CodeDefinitionsClient } from "./clients/CodeDefinitionsClient";
import { CompaniesClient } from "./clients/CompaniesClient";
import { ContactsClient } from "./clients/ContactsClient";
import { CreditMemoAppliedClient } from "./clients/CreditMemoAppliedClient";
import { CurrenciesClient } from "./clients/CurrenciesClient";
import { CustomFieldDefinitionsClient } from "./clients/CustomFieldDefinitionsClient";
import { CustomFieldValuesClient } from "./clients/CustomFieldValuesClient";
import { DefinitionsClient } from "./clients/DefinitionsClient";
import { EmailsClient } from "./clients/EmailsClient";
import { InvoiceHistoryClient } from "./clients/InvoiceHistoryClient";
import { InvoicesClient } from "./clients/InvoicesClient";
import { LeadsClient } from "./clients/LeadsClient";
import { MigrationClient } from "./clients/MigrationClient";
import { NotesClient } from "./clients/NotesClient";
import { PaymentApplicationsClient } from "./clients/PaymentApplicationsClient";
import { PaymentsClient } from "./clients/PaymentsClient";
import { ProvisioningClient } from "./clients/ProvisioningClient";
import { ReportsClient } from "./clients/ReportsClient";
import { StatusClient } from "./clients/StatusClient";
import { SyncClient } from "./clients/SyncClient";
import { UserAccountsClient } from "./clients/UserAccountsClient";
import { UserRolesClient } from "./clients/UserRolesClient";
import { ErrorResult } from "./models/ErrorResult";

export class LockstepApi {

  // The URL of the environment we will use
  private readonly serverUrl: string;
  private readonly version: string = "2021.39.690";
  private bearerToken: string | null = null;
  private apiKey: string | null = null;

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
  public readonly Migration: MigrationClient;
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
    this.Migration = new MigrationClient(this);
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
    var url = "https://api.lockstep.io";
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
   * Construct headers for a request
   */
  private getHeaders(): any {
    if (this.apiKey !== null) {
      return {
        'Api-Key': this.apiKey,
      };
    }
    if (this.bearerToken !== null) {
      return {
        'Authorization': `Bearer ${this.bearerToken}`,
      };
    }
    return {};
  }

  /**
   * Make a GET request using this client
   */
  public async request<T>(method: axios.Method, path: string, options: any, body: any): Promise<T | ErrorResult> {
    const requestConfig = {
      url: new URL(this.serverUrl, path).href,
      method,
      params: options,
      data: body,
      headers: this.getHeaders(),
    };
    var result = await axios.default.request(requestConfig);
    if (result.status >= 200 && result.status < 300) {
      return result.data as T;
    } else {
      return result.data as ErrorResult;
    }
  }
}

