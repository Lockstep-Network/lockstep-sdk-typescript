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

import { PaymentSummaryModel } from "..";
import { PaymentSummaryTotalsModel } from "..";
import { SummaryAgingTotalsModel } from "..";

export type PaymentSummaryModelPaymentSummaryTotalsModelSummaryFetchResult = {

  records: PaymentSummaryModel[] | null;

  totalCount: number | null;

  pageSize: number | null;

  pageNumber: number | null;

  /**
   * The totals for a Payment Summary
   */
  summary: PaymentSummaryTotalsModel | null;

  agingSummary: SummaryAgingTotalsModel[] | null;
};
