/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io
 * @copyright  2021-2022 Lockstep, Inc.
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
   * Total amount of this Payment.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this Payment.
   */
  unappliedAmount: number;

  /**
   * The type of payment, Payment or AP Payment.
   */
  paymentType: string | null;

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
