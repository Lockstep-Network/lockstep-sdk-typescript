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

import { JournalEntryModel } from "..";

/**
 * Contains information about a journal entry line
 */
export type JournalEntryLineModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  journalEntryLineId: string;

  /**
   * The Journal Entry with which this line is associated.
   */
  journalEntryId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this journal entry record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * The Financial Account with which this line is associated.
   */
  financialAccountId: string | null;

  /**
   * The unique code/identifier assigned to each account in the chart of accounts.
   */
  accountNumber: string | null;

  /**
   * The name of the account.
   */
  accountName: string | null;

  /**
   * Debit to account.
   */
  debit: number;

  /**
   * Credit to account.
   */
  credit: number;

  /**
   * The transaction currency in which the entry is recorded, especially useful for multi-currency environments.
   */
  currencyCode: string | null;

  /**
   * The base currency debit amount for the account.
   */
  baseDebit: number;

  /**
   * The base currency credit amount for the account.
   */
  baseCredit: number;

  /**
   * The base currency in which the entry is recorded, especially useful for multi-currency environments.
   */
  baseCurrencyCode: string | null;

  /**
   * The ERP’s identifier for the user who recorded the journal entry line.
   */
  sourceCreatedUser: string | null;

  /**
   * A memo related to this line.
   */
  memo: string | null;

  /**
   * Dimensions for this journal entry line.
   */
  dimensions: object | null;

  /**
   * The date that the journal entry line was created.
   */
  created: string;

  /**
   * The ID of the user who created the journal entry line.
   */
  createdUserId: string;

  /**
   * The date that the journal entry line was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified the journal entry line.
   */
  modifiedUserId: string;

  /**
   * The date on which this record was last modified in source ERP.
   */
  sourceModifiedDate: string | null;

  /**
   * The journal entry for this journal entry line.
   * To retrieve this item, specify `JournalEntry` in the "Include" parameter for your query.
   */
  journalEntry: JournalEntryModel | null;
};
