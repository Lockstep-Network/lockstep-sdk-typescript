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
 * The InvoiceLineSyncModel represents information coming into Lockstep from an external financial system or other
 * enterprise resource planning system.  To import data from an external system, convert your original data into
 * the InvoiceLineSyncModel format and call the [Upload Sync File API](https://developer.lockstep.io/reference/post_api-v1-sync-zip).
 * This API retrieves all of the data you uploaded in a compressed ZIP file and imports it into the Lockstep
 * platform.
 *
 * Once imported, this record will be available in the Lockstep API as an [InvoiceLineModel](https://developer.lockstep.io/docs/invoicelinemodel).
 *
 * For more information on writing your own connector, see [Connector Data](https://developer.lockstep.io/docs/connector-data).
 */
export type InvoiceLineSyncModel = {

  /**
   * This is the primary key of the Invoice Line record. For this field, you should use whatever the contact's unique
   * identifying number is in the originating system. Search for a unique, non-changing number within the
   * originating financial system for this record.
   *
   * Example: If you store your invoice line records in a database, whatever the primary key for the invoice
   * line table is in the database should be the "ErpKey".
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string;

  /**
   * The original primary key or unique ID of the invoice to which this line belongs.  This value should
   * match the [Invoice ErpKey](https://developer.lockstep.io/docs/importing-invoices#erpkey) field on the
   * [InvoiceSyncModel](https://developer.lockstep.io/docs/importing-invoices).
   */
  invoiceErpKey: string;

  /**
   * The line number of this line, as defined in the originating ERP or accounting system.  You can sort on this number to
   * get the original view of lines within the invoice.
   */
  lineNumber: string;

  /**
   * A code number identifying the product or service that is specified on this line.
   */
  productCode: string | null;

  /**
   * Description of this invoice line.
   */
  description: string | null;

  /**
   * For lines measured in a unit other than "quantity", this code indicates the measurement system for the quantity field.
   * If the line is measured in quantity, this field is null.
   */
  unitMeasureCode: string | null;

  /**
   * The price of a single unit for this line.
   */
  unitPrice: number | null;

  /**
   * The quantity of items for ths line.
   */
  quantity: number | null;

  /**
   * The number of items that have been shipped.
   */
  quantityShipped: number | null;

  /**
   * The number of items that has been received.
   */
  quantityReceived: number | null;

  /**
   * The total amount for this line.
   */
  totalAmount: number | null;

  /**
   * If this line is tax exempt, this code indicates the reason for the exemption.
   */
  exemptionCode: string | null;

  /**
   * If null, the products specified on this line were delivered on the same date as all other lines.
   * If not null, this line was delivered or finalized on a different date than the overall invoice.
   */
  reportingDate: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLine1: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLine2: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLine3: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressCity: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressRegion: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressPostalCode: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressCountry: string | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLatitude: number | null;

  /**
   * Origination address for this invoice line, if this line item was originated from a different address
   */
  originAddressLongitude: number | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLine1: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLine2: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLine3: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressCity: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressRegion: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressPostalCode: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressCountry: string | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLatitude: number | null;

  /**
   * Billing address for this invoice line, if this line item is to be billed to a different address
   */
  billToAddressLongitude: number | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLine1: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLine2: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLine3: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressCity: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressRegion: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressPostalCode: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressCountry: string | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLatitude: number | null;

  /**
   * Shipping address for this invoice line, if this line item is to be shipped to a different address
   */
  shipToAddressLongitude: number | null;

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
