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

import { TransactionModel } from "..";
import { TransactionSummaryTotalModel } from "..";
import { SummaryAgingTotalsModel } from "..";

export type TransactionModelTransactionSummaryTotalModelSummaryFetchResult = {

  records: TransactionModel[] | null;

  totalCount: number | null;

  pageSize: number | null;

  pageNumber: number | null;

  /**
   * Represents transaction summary information based on the query request within the group account.
   */
  summary: TransactionSummaryTotalModel | null;

  agingSummary: SummaryAgingTotalsModel[] | null;
};
