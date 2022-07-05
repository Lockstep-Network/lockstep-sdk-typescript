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
 * Contains information about a credit memo invoice
 */
export type CreditMemoInvoiceModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  creditMemoAppliedId: string;

  /**
   * The id of the invoice
   */
  invoiceId: string;

  /**
   * The id of the credit memo invoice
   */
  creditMemoInvoiceId: string;

  /**
   * Date invoice applied to credit memo.
   */
  applyToInvoiceDate: string | null;

  /**
   * Amount applied to credit memo.
   */
  creditMemoAppliedAmount: number;

  /**
   * An additional reference code that is sometimes used to identify this invoice.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceCode: string | null;

  /**
   * The ID number of the company that created this invoice.
   */
  companyId: string | null;

  /**
   * The ID number of the counterparty for the invoice, for example, a customer or vendor.
   */
  customerId: string | null;

  /**
   * A code identifying the status of this invoice.
   */
  invoiceStatusCode: string | null;

  /**
   * The total value of this invoice, inclusive of all taxes and line items.
   */
  totalAmount: number | null;

  /**
   * The remaining balance value of this invoice.
   */
  outstandingBalanceAmount: number | null;
};
