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
 * Contains summarized data for a vendor
 */
export type VendorSummaryModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this Vendor
   */
  vendorId: string;

  /**
   * The name of this Vendor
   */
  vendorName: string | null;

  /**
   * The app enrollment ID this Vendor is associated with
   */
  appEnrollmentId: string | null;

  /**
   * The name of this Vendor's primary contact
   */
  primaryContactName: string | null;

  /**
   * This Vendor's primary contact id
   */
  primaryContactId: string | null;

  /**
   * The amount paid to this Vendor in the last 30 days
   */
  amountPaidLast30: number | null;

  /**
   * The outstanding advance pay balance with this Vendor
   */
  advancePayOutstanding: number | null;

  /**
   * The amount billed from this Vendor in the last 30 days
   */
  amountBilledLast30: number | null;

  /**
   * The outstanding balance with this Vendor
   */
  amountBilledOutstanding: number | null;

  /**
   * The number of open bills with this Vendor
   */
  openBillCount: number | null;

  /**
   * The number of bills paid to this Vendor in the last 30 days
   */
  paidBillCount: number | null;

  /**
   * The total count of open bills and those paid in the last 30 days
   */
  totalBillCount: number | null;
};
