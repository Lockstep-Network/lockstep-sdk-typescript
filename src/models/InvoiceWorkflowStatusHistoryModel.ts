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
 * A Invoice Workflow Status History represents prior workflow statuses of an E-Invoice.
 */
export type InvoiceWorkflowStatusHistoryModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Accounting Data Services platform.
   */
  invoiceWorkflowStatusHistoryId: string;

  /**
   * The invoice ID associated with the invoice workflow status history.
   */
  invoiceId: string;

  /**
   * The workflow status ID associated with the invoice workflow status history.
   */
  workflowStatusId: string;

  /**
   * The GroupKey uniquely identifies a single Accounting Data Services Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The notes for the invoice workflow status history.
   */
  workflowStatusNotes: string | null;

  /**
   * The date that the invoice workflow status history was created.
   */
  created: string;

  /**
   * The ID of the user who created the invoice workflow status history.
   */
  createdUserId: string;
};
