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
 * Represents a single address for an invoice
 */
export type InvoiceAddressModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  invoiceAddressId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The ID number of the invoice this address belongs to
   */
  invoiceId: string;

  /**
   * The first line of the address.
   */
  line1: string | null;

  /**
   * The second line of the address.
   */
  line2: string | null;

  /**
   * The third line of the address.
   */
  line3: string | null;

  /**
   * The name of the city for this address.
   */
  city: string | null;

  /**
   * The state or region part of this address.
   */
  region: string | null;

  /**
   * The postal code for this address.
   */
  postalCode: string | null;

  /**
   * The country for this address.
   */
  country: string | null;

  /**
   * The latitude of this address, if available.
   */
  latitude: number | null;

  /**
   * The longitude of this address, if available.
   */
  longitude: number | null;

  /**
   * The date on which this address record was created.
   */
  created: string;

  /**
   * The ID number of the user who created this address.
   */
  createdUserId: string;

  /**
   * The date on which this address record was last modified.
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this address.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;
};
