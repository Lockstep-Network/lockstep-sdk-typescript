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

import { InsertPaymentAppliedRequestModel } from "..";

/**
 * A request to insert a new Payment
 */
export type InsertPaymentRequestModel = {

  /**
   * The AppEnrollmentId of the application to write this record to.
   */
  appEnrollmentId: string | null;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  paymentId: string | null;

  /**
   * The ID of the company to which this payment belongs.
   */
  companyId: string;

  /**
   * The ERP key for the company to which this payment belongs.
   */
  companyErpKey: string | null;

  /**
   * A additional reference that may be used in the ERP
   */
  companyExternalReference: string | null;

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
   * The type of payment, AR Payment or AP Payment.
   *
   * Recognized PaymentType values are:
   * * `AR Payment` - A payment made by a Customer to the Company
   * * `AP Payment` - A payment made by the Company to a Vendor
   */
  paymentType: string | null;

  /**
   * Cash, check, credit card, wire transfer.
   *
   * Recognized TenderType values are:
   * * `Cash` - A cash payment or other direct transfer.
   * * `Check` - A check payment.
   * * `Credit Card` - A payment made via a credit card.
   * * `Wire Transfer` - A payment made via wire transfer from another financial institution.
   * * `Other` - A payment made via another method not listed above.
   */
  tenderType: string | null;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * The date when this payment was received.
   */
  paymentDate: string | null;

  /**
   * The date when a payment was posted to a ledger.
   */
  postDate: string | null;

  /**
   * Total amount of this payment in it's received currency.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this payment in it's received currency.  If this amount is nonzero, the field `IsOpen` will be true.
   */
  unappliedAmount: number;

  /**
   * The ISO 4217 currency code for this payment.
   *
   * For a list of ISO 4217 currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies).
   */
  currencyCode: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * Is the payment voided?
   */
  isVoided: boolean;

  /**
   * Is the payment in dispute?
   */
  inDispute: boolean;

  /**
   * The Currency Rate used to get from the account's base currency to the payment amount.
   */
  currencyRate: number;

  /**
   * Total amount of this payment in the group's base currency.
   */
  baseCurrencyPaymentAmount: number;

  /**
   * Unapplied balance of this payment in the group's base currency.  If this amount is nonzero, the field `IsOpen` will be true.
   */
  baseCurrencyUnappliedAmount: number;

  /**
   * The Bank account id for the company to which this payment belongs.
   */
  bankAccountId: string | null;

  /**
   * The GroupKey this request belongs to.
   */
  groupKey: string;

  /**
   * All applications this payment is associated with.
   * To retrieve this collection, specify `Applications` in the "Include" parameter for your query.
   */
  applications: InsertPaymentAppliedRequestModel[] | null;
};
