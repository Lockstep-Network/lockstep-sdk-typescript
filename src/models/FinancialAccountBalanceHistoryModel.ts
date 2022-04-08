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
 * Represents a balance for a financial account for a given period of time.
 */
export type FinancialAccountBalanceHistoryModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  financialAccountBalanceHistoryId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The id of the Financial Account that this balance history is for.
   */
  financialAccountId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The financial year that this period falls under
   */
  financialYear: number;

  /**
   * The period number (1-12 or 1-13) that this balance history is for
   */
  periodNumber: number;

  /**
   * The start date of this period.
   */
  periodStartDate: string;

  /**
   * The end date of this period.
   */
  periodEndDate: string;

  /**
   * The status of this period. The status should be Closed if the books for this period have been closed,
   * if not the status should be Open. The status can also be Deleted if there was a recalculation that needed
   * to occur, for example due to a change in financial year settings.
   */
  status: string | null;

  /**
   * The current or end balance of this period.
   */
  balance: number;

  /**
   * The date on which this financial account balance history record was created.
   */
  created: string;

  /**
   * The ID number of the user who created this financial account balance history.
   */
  createdUserId: string;

  /**
   * The date on which this financial account balance history record was modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this financial account balance history.
   */
  modifiedUserId: string;
};
