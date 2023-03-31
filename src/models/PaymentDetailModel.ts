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
 * Contains detailed information about a Payment.
 */
export type PaymentDetailModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this Payment.
   */
  paymentId: string;

  /**
   * The ID of the customer to which this Payment belongs.
   */
  customerId: string;

  /**
   * The name of the customer to which this Payment belongs.
   */
  customerName: string | null;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * The name of the Primary Contact for the Customer.
   */
  primaryContact: string | null;

  /**
   * The Email address of the Customer.
   */
  email: string | null;

  /**
   * Possible statuses for a record that supports ERP write.
   */
  erpWriteStatus: number;

  /**
   * The name of the ErpWriteStatus for this payment
   */
  erpWriteStatusName: string | null;

  /**
   * The currency code of the payment.
   */
  currencyCode: string | null;

  /**
   * Total amount of this Payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this Payment.
   */
  unappliedAmount: number;

  /**
   * The base currency code of the group.
   */
  baseCurrencyCode: string | null;

  /**
   * The payment amount in the group's base currency.
   */
  baseCurrencyPaymentAmount: number;

  /**
   * The payment amount in the group's base currency.
   */
  baseCurrencyUnappliedAmount: number;

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
   * The date of this Payment.
   */
  paymentDate: string | null;

  /**
   * Payment post date.
   */
  postDate: string | null;

  /**
   * The phone number of the Customer's Primary Contact.
   */
  phone: string | null;

  /**
   * The fax number of the Customer's Primary Contact.
   */
  fax: string | null;

  /**
   * The first line of the address for the Customer's Primary Contact.
   */
  address1: string | null;

  /**
   * The second line of the address for the Customer's Primary Contact.
   */
  address2: string | null;

  /**
   * The third line of the address for the Customer's Primary Contact.
   */
  address3: string | null;

  /**
   * The city of the address for the Customer's Primary Contact.
   */
  city: string | null;

  /**
   * The state/region of the address for the Customer's Primary Contact.
   */
  stateRegion: string | null;

  /**
   * The postal/zip code of the address for the Customer's Primary Contact.
   */
  postalCode: string | null;

  /**
   * The 2 character country code of the address for the Customer's Primary Contact.
   */
  countryCode: string | null;
};
