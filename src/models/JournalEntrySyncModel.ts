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
 * The JournalEntrySyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the JournalEntrySyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a JournalEntryModel
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type JournalEntrySyncModel = {

  /**
   * Indicates what action to take when an existing object has been found during the sync process.
   */
  onMatchAction: number;

  /**
   * This is the primary key of the Journal Entry record. For this field, you should use whatever the Journal Entry's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your Journal Entry records in a database, whatever the primary key for the Journal Entry table is
   * in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The ERP’s identifier for this journal entry, usually has meaning to the user.
   * May be the same value of the ERP Key.
   */
  journalId: string | null;

  /**
   * Possible sources for a Journal Entry.
   */
  source: number;

  /**
   * Possible statuses for a Journal Entry.
   */
  status: number;

  /**
   * A brief description explaining the purpose of the journal entry.
   */
  description: string | null;

  /**
   * An additional comment related to the entry.
   */
  comment: string | null;

  /**
   * Any reference number or identifier associated with the entry, such as an invoice number or purchase order.
   */
  referenceNumber: string | null;

  /**
   * The raw posting date from the source.
   */
  sourcePostingDate: string;

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
