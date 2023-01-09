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
 * View to return Payment Detail information for a given Invoice record.
 */
export type InvoicePaymentDetailModel = {

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
   * The payment's currency code.
   */
  currencyCode: string | null;

  /**
   * The unique identifier of this PaymentApplied record.
   */
  paymentAppliedId: string;

  /**
   * The database id of the invoice
   */
  invoiceId: string;

  /**
   * The database id of the Payment.
   */
  paymentId: string;

  /**
   * Date Payment applied to Invoice.
   */
  applyToInvoiceDate: string | null;

  /**
   * Amount applied to Invoice.
   */
  paymentAppliedAmount: number;

  /**
   * Amount applied to Invoice in the group's base currency.
   */
  baseCurrencyPaymentAppliedAmount: number;

  /**
   * An additional reference code that is sometimes used to identify this Payment.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * The ID number of the Company (CompanyType = "Customer") that created this Payment.
   */
  companyId: string | null;

  /**
   * The total value of this Payment.
   */
  paymentAmount: number | null;

  /**
   * The remaining balance value of this Payment.
   */
  unappliedAmount: number | null;

  /**
   * The total value of this Payment in the group's base currency.
   */
  baseCurrencyPaymentAmount: number | null;

  /**
   * The remaining balance value of this Payment in the group's base currency.
   */
  baseCurrencyUnappliedAmount: number | null;
};
