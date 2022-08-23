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


/**
 * The FinancialAccountSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the FinancialAccountSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [FinancialAccountModel](https://developer.lockstep.io/docs/financialaccountmodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type FinancialAccountSyncModel = {

  /**
   * The code for the Financial Account. Can either be a general ledger or
   * an account code.
   */
  code: string;

  /**
   * The External Id for the Financial Account.
   */
  erpKey: string;

  /**
   * The name of the Financial Account.
   */
  name: string;

  /**
   * The status of the Financial Account. Possible values are active,
   * inactive, deleted or archived.
   */
  status: string;

  /**
   * The cashflow type for the Financial Account. Examples include cash, financing, investment
   * or operation.
   */
  cashflowType: string;

  /**
   * The description for the Financial Account.
   */
  description: string;

  /**
   * The classification for the Financial Account. Possible values are Asset, Equity,
   * Expense, Liability or Income.
   */
  classification: string;

  /**
   * The category for the Financial Account. Examples include Current Asset, Current Liability, Common Stock
   */
  category: string | null;

  /**
   * The subcategory for the Financial Account. Examples include Cash, Property, Bank Loan, etc.
   */
  subcategory: string | null;
};
