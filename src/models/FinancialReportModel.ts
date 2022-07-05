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

import { FinancialReportRowModel } from "..";

/**
 * Represents a Financial Report
 */
export type FinancialReportModel = {

  /**
   * The name of the report ("*Report Type* for *Company*")
   */
  reportName: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The start date of the financial report
   */
  reportStartDate: string;

  /**
   * The end date of the financial report
   */
  reportEndDate: string;

  /**
   * The created date of the financial report
   */
  reportCreatedDate: string;

  /**
   * The rows of the financial report
   */
  rows: FinancialReportRowModel[] | null;
};
