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
 * An Attachment Link represents a single link between any nestable object and an attachment
 */
export type AttachmentLinkModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of an attachment record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  attachmentId: string;

  /**
   * An Attachment is connected to an existing item within the Lockstep Platform by the fields `TableKey` and
   * `ObjectKey`.  For example, an Attachment connected to Invoice 12345 would have a `TableKey` value of
   * `Invoice` and an `ObjectKey` value of `12345`.
   *
   * The `ObjectKey` value contains the primary key of the record within the Lockstep Platform to which this
   * Attachment is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  objectKey: string;

  /**
   * An Attachment is connected to an existing item within the Lockstep Platform by the fields `TableKey` and
   * `ObjectKey`.  For example, an Attachment connected to Invoice 12345 would have a `TableKey` value of
   * `Invoice` and an `ObjectKey` value of `12345`.
   *
   * The `TableKey` value contains the name of the table within the Lockstep Platform to which this Attachment
   * is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  tableKey: string | null;

  /**
   * The date the Attachment Link was created.
   */
  created: string;

  /**
   * The unique ID of the [UserAccount](https://developer.lockstep.io/docs/useraccountmodel) of the user
   * who created this Attachment Link.
   */
  createdUserId: string;
};
