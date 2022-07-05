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

import { FinancialReportCellModel } from "..";

/**
 * Represents a row of a financial Report report
 */
export type FinancialReportRowModel = {

  /**
   * Describes what type of row this row is (Header, Summary, Classification, Category, Subcategory, Data)
   */
  rowType: string | null;

  /**
   * The label for the row if it is a Classification, Category, or Subcategory.
   */
  label: string | null;

  /**
   * The sub rows of this row if it is a Classification, Category, or Subcategory.
   */
  rows: FinancialReportRowModel[] | null;

  /**
   * The cells of the row
   */
  cells: FinancialReportCellModel[] | null;
};
