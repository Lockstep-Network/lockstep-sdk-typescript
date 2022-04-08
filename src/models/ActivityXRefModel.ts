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
 * Represents links between an Activity and another record.
 */
export type ActivityXRefModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this is
   * added to the Lockstep platform.
   */
  activityXRefId: string;

  /**
   * The ID of the activity to which this reference belongs.
   */
  activityId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the table the activity reference is associated with
   */
  tableKey: string | null;

  /**
   * The ID of the object the activity reference is associated with
   */
  objectKey: string | null;
};
