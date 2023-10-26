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
 * The PaymentAppliedSyncModel represents information coming into Lockstep from an external financial system or
 * other enterprise resource planning system.  To import data from an external system, convert your original data
 * into the PaymentAppliedSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as a [PaymentAppliedModel](https://developer.lockstep.io/docs/paymentappliedmodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type PaymentAppliedSyncModel = {

  /**
   * Indicates what action to take when an existing object has been found during the sync process.
   */
  onMatchAction: number;

  /**
   * The unique identifier of this object in the Sage Network platform.
   */
  networkId: string | null;

  /**
   * This is the primary key of the Payment Application record. For this field, you should use whatever this
   * transaction's unique identifying number is in the originating system. Search for a unique, non-changing
   * number within the originating financial system for this record.
   *
   * Since Payment Applications are often considered transactions, a typical value to look for will be
   * the transaction ID number, the payment confirmation number, or some other record of this payment.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * This field indicates which Invoice had its balance reduced by applying this payment.  In this field,
   * identify the original primary key or unique ID of the Invoice which had its balance reduced.
   *
   * This information lets you track how an invoice was paid. You can identify what proportion of an invoice's
   * balance was paid by which methods by joining this field to Invoices.
   *
   * This value should match the [Invoice ErpKey](https://developer.lockstep.io/docs/importing-invoices#erpkey)
   * field on the [InvoiceSyncModel](https://developer.lockstep.io/docs/importing-invoices).
   */
  invoiceErpKey: string;

  /**
   * The network id of the related Invoice.
   */
  invoiceNetworkId: string | null;

  /**
   * This field indicates which Payment was used to provide the funds for this payment application. In this
   * field, identify the original primary key or unique ID of the Payment that was used for this payment
   * application.
   *
   * This information lets you track how an invoice was paid. You can identify what proportion of an payment's
   * balance was paid by which methods by joining this field to the Payment.
   *
   * This value should match the [Payment ErpKey](https://developer.lockstep.io/docs/importing-payments#erpkey)
   * field on the [PaymentSyncModel](https://developer.lockstep.io/docs/importing-payments).
   */
  paymentErpKey: string;

  /**
   * The network id of the related Payment.
   */
  paymentNetworkId: string | null;

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
   * If known, the date when this record was created according to the originating financial system
   * in which this record is maintained.  If the originating financial system does not maintain a
   * created-date, leave this field null.
   */
  created: string | null;

  /**
   * If known, the date when this record was most recently modified according to the originating
   * financial system in which this record is maintained.  If the originating financial system does
   * not maintain a most-recently-modified-date, leave this field null.
   */
  modified: string | null;
};
