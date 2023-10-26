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
 * A Workflow Status represents the state for a specific workflow for an entity.
 */
export type WorkflowStatusModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Accounting Data Services platform.
   */
  id: string;

  /**
   * The name of the workflow status.
   */
  name: string;

  /**
   * The description explaining the use of the workflow status.
   */
  description: string | null;

  /**
   * The prior workflow status ID.
   */
  parentWorkflowStatusId: string | null;

  /**
   * The category of the workflow status.
   */
  category: string | null;

  /**
   * The code of the workflow status.
   */
  code: string | null;

  /**
   * Indicates whether notes are required or not.
   */
  isNotesRequired: boolean;

  /**
   * Indicates whether the status change should be reported to the ERP or not.
   */
  promoteToErp: boolean;

  /**
   * The date that the workflow status was created.
   */
  created: string;

  /**
   * The ID of the user who created the workflow status.
   */
  createdUserId: string;

  /**
   * The date that the workflow status was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified the workflow status.
   */
  modifiedUserId: string;
};
