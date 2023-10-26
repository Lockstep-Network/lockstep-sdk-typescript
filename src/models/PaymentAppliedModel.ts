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

import { PaymentModel } from "..";
import { InvoiceModel } from "..";

/**
 * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make
 * a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be
 * made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected
 * to which Payments and for which amounts.
 */
export type PaymentAppliedModel = {

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
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  paymentAppliedId: string;

  /**
   * The Invoice this payment is applied to.
   */
  invoiceId: string;

  /**
   * The Payment applied to the invoice.
   */
  paymentId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * Possible statuses for a record that supports ERP Update.
   */
  erpUpdateStatus: number;

  /**
   * Possible actions for a record that supports ERP Update.
   */
  erpUpdateAction: number;

  /**
   * The entry number of this payment application.  This is often a journal entry number, confirmation code,
   * or other identifying field for this payment application.
   */
  entryNumber: number;

  /**
   * The date this payment was applied to this invoice.
   */
  applyToInvoiceDate: string;

  /**
   * The total amount that was applied to this Invoice from the Payment.
   */
  paymentAppliedAmount: number;

  /**
   * Date payment applied record was created.
   */
  created: string;

  /**
   * The id of the user who created this applied payment.
   */
  createdUserId: string;

  /**
   * Date payment applied record was modified.
   */
  modified: string;

  /**
   * The id of the user who modified this applied payment.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The date on which this record was last modified in source ERP.
   */
  sourceModifiedDate: string | null;

  /**
   * The payment associated with this applied payment
   */
  payment: PaymentModel | null;

  /**
   * The invoice associated with this applied payment.
   */
  invoice: InvoiceModel | null;
};
