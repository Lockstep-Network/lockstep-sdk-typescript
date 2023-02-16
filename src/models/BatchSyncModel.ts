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

import { CompanySyncModel } from "..";
import { ContactSyncModel } from "..";
import { CreditMemoAppliedSyncModel } from "..";
import { InvoiceSyncModel } from "..";
import { InvoiceLineSyncModel } from "..";
import { CustomFieldSyncModel } from "..";
import { PaymentSyncModel } from "..";
import { PaymentAppliedSyncModel } from "..";
import { FinancialYearSettingSyncModel } from "..";
import { FinancialAccountSyncModel } from "..";
import { FinancialAccountBalanceHistorySyncModel } from "..";
import { BaseCurrencySyncModel } from "..";

/**
 * A BatchSyncModel contains a collection of records to load into the Lockstep Platform.  Data contained
 * in this batch will be merged with your existing data.  Each record will be matched with existing data inside
 * the Lockstep Platform using the [Identity Column](https://developer.lockstep.io/docs/identity-columns) rules.
 * Any record that represents a new AppEnrollmentId+ErpKey will be inserted.  A record that matches an existing
 * AppEnrollmentId+ErpKey will be updated, but only if the data has changed.
 *
 * A Sync process permits either a complete data file or a partial / delta data file.  Lockstep recommends
 * using a sliding time window to avoid the risk of clock skew errors that might accidentally omit records.
 * Best practice is to run a Sync process daily, and to export all data that has changed in the past 48 hours.
 */
export type BatchSyncModel = {

  /**
   * The optional existing app enrollment to associate with the data in this batch.
   */
  appEnrollmentId: string | null;

  /**
   * True if this is a full sync, false if this is a partial sync. Defaults to false.
   */
  isFullSync: boolean;

  /**
   * A list of Company records to merge with your Lockstep Platform data
   */
  companies: CompanySyncModel[] | null;

  /**
   * A list of Contact records to merge with your Lockstep Platform data
   */
  contacts: ContactSyncModel[] | null;

  /**
   * A list of CreditMemoApplied records to merge with your Lockstep Platform data
   */
  creditMemoApplications: CreditMemoAppliedSyncModel[] | null;

  /**
   * A list of Invoice records to merge with your Lockstep Platform data
   */
  invoices: InvoiceSyncModel[] | null;

  /**
   * A list of InvoiceLine records to merge with your Lockstep Platform data
   */
  invoiceLines: InvoiceLineSyncModel[] | null;

  /**
   * A list of CustomField records to merge with your Lockstep Platform data
   */
  customFields: CustomFieldSyncModel[] | null;

  /**
   * A list of Payment records to merge with your Lockstep Platform data
   */
  payments: PaymentSyncModel[] | null;

  /**
   * A list of PaymentApplied records to merge with your Lockstep Platform data
   */
  paymentApplications: PaymentAppliedSyncModel[] | null;

  /**
   * A list of FinancialYearSetting records to merge with your Lockstep Platform data
   */
  financialYearSettings: FinancialYearSettingSyncModel[] | null;

  /**
   * A list of FinancialAccount records to merge with your Lockstep Platform data
   */
  financialAccounts: FinancialAccountSyncModel[] | null;

  /**
   * A list of FinancialAccountBalanceHistory records to merge with your Lockstep Platform data
   */
  financialAccountBalanceHistories: FinancialAccountBalanceHistorySyncModel[] | null;

  /**
   * A list of BaseCurrency records to merge with your Lockstep Platform data
   */
  baseCurrencies: BaseCurrencySyncModel[] | null;
};
