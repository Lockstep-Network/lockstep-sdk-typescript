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

import { CustomerDetailsPaymentModel } from "..";

/**
 * Contains customer details data
 */
export type CustomerDetailsModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this customer
   */
  customerId: string;

  /**
   * The unique ID of this customer
   */
  name: string | null;

  /**
   * Customer address info
   */
  address1: string | null;

  /**
   * Customer address info
   */
  address2: string | null;

  /**
   * Customer address info
   */
  address3: string | null;

  /**
   * Customer address info
   */
  city: string | null;

  /**
   * Customer address info
   */
  state: string | null;

  /**
   * Customer address info
   */
  postalCode: string | null;

  /**
   * Customer address country
   */
  country: string | null;

  /**
   * Customer phone number
   */
  phoneNumber: string | null;

  /**
   * Customer fax number
   */
  faxNumber: string | null;

  /**
   * Customer AR email address
   */
  email: string | null;

  /**
   * Customer primary contact id
   */
  contactId: string;

  /**
   * Customer primary contact name
   */
  contactName: string | null;

  /**
   * Customer primary contact email address
   */
  contactEmail: string | null;

  /**
   * Customer number of outstanding invoices
   */
  outstandingInvoices: number;

  /**
   * Customer total outstanding invoice amount
   */
  outstandingAmount: number;

  /**
   * Customer total past due amount
   */
  amountPastDue: number;

  /**
   * Customer payments collected
   */
  payments: CustomerDetailsPaymentModel[] | null;
};
