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
 * Represents an item belonging to the activity stream.
 */
export type ActivityStreamItemModel = {

  /**
   * The object key of the activity stream item.
   */
  objectKey: string;

  /**
   * The type code of the activity stream item.
   */
  activityStreamType: string | null;

  /**
   * The text body description for this Activity Stream Item.
   */
  textValue: string | null;

  /**
   * The date on which this activity stream item was created.
   */
  created: string;

  /**
   * The ID of the user who created this activity.
   */
  createdUserId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The sender's email address if activity stream item is an Email.
   */
  fromEmailAddress: string | null;

  /**
   * The recipient's email address if activity stream item is an Email.
   */
  toEmailAddress: string | null;

  /**
   * The name of the contact sending the activity otherwise null.
   */
  fromContactName: string | null;

  /**
   * The name of the contact sending the activity otherwise null.
   */
  toContactName: string | null;
};
