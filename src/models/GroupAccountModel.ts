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
 * Represents an account for an entire group
 */
export type GroupAccountModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the group
   */
  groupName: string;

  /**
   * The primary user for the group
   */
  primaryUserId: string;

  /**
   * The CompanyId of the Company the group is associated with
   */
  groupCompanyId: string;

  /**
   * Base Currency of the group
   */
  baseCurrencyCode: string | null;

  /**
   * The active status of the group
   */
  isActive: boolean;

  /**
   * The onboarding session status of the group
   */
  onboardingScheduled: boolean;

  /**
   * The date this group account was created
   */
  created: string;

  /**
   * The ID of the user who created this group account
   */
  createdUserId: string;

  /**
   * The date this group account was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified this group account
   */
  modifiedUserId: string;
};
