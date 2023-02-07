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
 * An Accounting Profile Contact has a link to a Contact that is associated with your company's
 * Accounting Profile. These Contacts are secondary contacts to the primary that is on the profile.
 */
export type AccountingProfileContactModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  accountingProfileContactId: string;

  /**
   * The ID of the profile this contact is belongs to.
   */
  accountingProfileId: string;

  /**
   * The ID of the contact that is linked to this profile.
   */
  contactId: string;

  /**
   * Determines whether the contact is primary or secondary.
   */
  isPrimary: boolean;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The date on which this record was created.
   */
  created: string;

  /**
   * The ID of the user who created this contact.
   */
  createdUserId: string;

  /**
   * The date on which this record was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified this contact.
   */
  modifiedUserId: string;
};
