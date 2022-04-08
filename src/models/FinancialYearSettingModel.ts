/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */


/**
 * A Financial Year Setting is used to to set the type, beginning, end, and number of periods of a year used to
 * calculate accounting reports. The financial setting can either be for a specific app enrollment id via a sync
 * or, when the financial year setting is manually created, will cover all account data without an app enrollment id.
 */
export type FinancialYearSettingModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  financialYearSettingId: string;

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
   * The type of financial year, either Calendar or Fiscal.
   */
  yearType: string | null;

  /**
   * Total number of periods in the year. For Calendar year types this should always be 12. For Fiscal year types
   * this can either be 12 or 13 for a 4 week 13 period year.
   */
  totalPeriods: number;

  /**
   * The start date of the financial year. Should be entered in MM-DD format.
   */
  startDate: string | null;

  /**
   * The end date of the financial year. Should be entered in MM-DD format.
   */
  endDate: string | null;

  /**
   * The date on which this financial year setting record was created.
   */
  created: string;

  /**
   * The ID number of the user who created this financial year setting.
   */
  createdUserId: string;

  /**
   * The date on which this financial year setting record was last modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this financial year setting.
   */
  modifiedUserId: string;
};
