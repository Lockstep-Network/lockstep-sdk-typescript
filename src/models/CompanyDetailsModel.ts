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

import { CompanyDetailsPaymentModel } from "..";

/**
 * Contains company details data
 */
export type CompanyDetailsModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this company
   */
  customerId: string;

  /**
   * The unique ID of this company
   */
  name: string | null;

  /**
   * Company address info
   */
  address1: string | null;

  /**
   * Company address info
   */
  address2: string | null;

  /**
   * Company address info
   */
  address3: string | null;

  /**
   * Company address info
   */
  city: string | null;

  /**
   * Company address info
   */
  state: string | null;

  /**
   * Company address info
   */
  postalCode: string | null;

  /**
   * Company address country
   */
  country: string | null;

  /**
   * Company phone number
   */
  phoneNumber: string | null;

  /**
   * Company fax number
   */
  faxNumber: string | null;

  /**
   * Company email address
   */
  email: string | null;

  /**
   * Company primary contact id
   */
  contactId: string;

  /**
   * Company primary contact name
   */
  contactName: string | null;

  /**
   * Company primary contact email address
   */
  contactEmail: string | null;

  /**
   * Company number of outstanding invoices
   */
  outstandingInvoices: number;

  /**
   * Company total outstanding invoice amount
   */
  outstandingAmount: number;

  /**
   * Company total past due amount
   */
  amountPastDue: number;

  /**
   * Company payments collected
   */
  payments: CompanyDetailsPaymentModel[] | null;
};
