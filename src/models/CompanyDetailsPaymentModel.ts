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
 * Company payment collected information
 */
export type CompanyDetailsPaymentModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Unique identifier for payment
   */
  paymentId: string;

  /**
   * Unique identifier for payment applied
   */
  paymentAppliedId: string | null;

  /**
   * Payment type
   */
  paymentType: string | null;

  /**
   * Unique identifier for invoice payment is associated with
   */
  invoiceId: string | null;

  /**
   * Invoice type payment is associated with
   */
  invoiceTypeCode: string | null;

  /**
   * Invoice reference code payment is associated with
   */
  invoiceReferenceCode: string | null;

  /**
   * Invoice total amount payment is associated with
   */
  invoiceTotalAmount: number;

  /**
   * Date payment placed
   */
  paymentDate: string;

  /**
   * Amount payment was made for
   */
  paymentAmount: number;
};
