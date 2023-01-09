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
 * Represents a risk rate calculation for a single month
 */
export type RiskRateModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The base currency code of the group.
   */
  baseCurrencyCode: string | null;

  /**
   * The month the risk rate was calculated for
   */
  reportDate: string;

  /**
   * The string name of the month the risk rate was calculated for
   */
  invoiceMonthName: string | null;

  /**
   * The count of all invoices in the calculation month
   */
  totalInvoiceCount: number;

  /**
   * The sum of the total amount for invoices in the calculation month in the group's base currency.
   */
  totalInvoiceAmount: number;

  /**
   * The count of open invoices over 90 days from the calculation month
   */
  atRiskCount: number;

  /**
   * The sum of the outstanding balance of open invoices over 90 days from the calculation month in the group's base currency.
   */
  atRiskAmount: number;

  /**
   * The percentage of all open invoices for the calculation month that are over 90 days based on count
   */
  atRiskCountPercentage: number;

  /**
   * The percentage of all open invoices for the calculation month that are over 90 days based on outstanding balance
   */
  atRiskPercentage: number;
};
