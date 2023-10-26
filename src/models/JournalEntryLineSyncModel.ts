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


/**
 * The JournalEntryLineSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the JournalEntryLineSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a JournalEntryLineModel
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type JournalEntryLineSyncModel = {

  /**
   * Indicates what action to take when an existing object has been found during the sync process.
   */
  onMatchAction: number;

  /**
   * This is the primary key of the Journal Entry Line record. For this field, you should use whatever the Journal Entry Line's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your Journal Entry Line records in a database, whatever the primary key for the Journal Entry Line table is
   * in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the journal entry to which this line belongs.  This value should
   * match the Journal Entry ErpKey field on the JournalEntrySyncModel.
   */
  journalEntryErpKey: string;

  /**
   * An optional Financial Account with which this line is associated. This value should
   * match the Financial Account ErpKey field on the FinancialAccountSyncModel.
   */
  financialAccountErpKey: string | null;

  /**
   * The unique code/identifier assigned to each account in the chart of accounts.
   */
  accountNumber: string;

  /**
   * The name of the account.
   */
  accountName: string;

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
  currencyCode: string;

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
  baseCurrencyCode: string;

  /**
   * The ERP’s identifier for the user who recorded the journal entry line.
   */
  sourceCreatedUser: string;

  /**
   * A memo related to this line.
   */
  memo: string | null;

  /**
   * A JSON string representing the dimensions for this journal entry line.
   */
  dimensions: object | null;

  /**
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};
