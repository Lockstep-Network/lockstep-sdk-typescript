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
 * A request to insert a payment application
 */
export type InsertPaymentAppliedRequestModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  paymentAppliedId: string | null;

  /**
   * The Invoice this payment is applied to.
   */
  invoiceId: string | null;

  /**
   * The Payment this application applies from.
   */
  paymentId: string | null;

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
   * The ERP key of the Invoice this payment is applied to.
   */
  invoiceErpKey: string | null;

  /**
   * The date this payment was applied to this invoice.
   */
  applyToInvoiceDate: string;

  /**
   * The total amount that was applied to this Invoice from the Payment.
   */
  paymentAppliedAmount: number;
};
