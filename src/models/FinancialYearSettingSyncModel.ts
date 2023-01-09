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
 * The FinancialYearSettingSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the FinancialYearSettingSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [FinancialYearSettingModel](https://developer.lockstep.io/docs/financialyearsettingmodel).
 * Sync is supported for only one FinancialYearSetting per app enrollment and one FinancialYearSetting imported outside of
 * an app enrollment - please submit only one model here.  If multiple models are submitted, only the latest one is considered for Sync.
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type FinancialYearSettingSyncModel = {

  /**
   * The type of financial year, either Calendar or Fiscal.
   */
  yearType: string;

  /**
   * Total number of periods in the year. For Calendar year types this should always be 12. For Fiscal year types
   * this can either be 12 or 13 for a 4 week 13 period year.
   */
  totalPeriods: number;

  /**
   * The start date of the financial year. Should be entered in MM-DD format.
   */
  startDate: string;

  /**
   * The end date of the financial year. Should be entered in MM-DD format.
   */
  endDate: string;
};
