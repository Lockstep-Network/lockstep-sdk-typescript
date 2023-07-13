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
 * An Financial Institution Account represents an account used for monetary transactions. E.g. - checking, savings,  or credit card accounts.
 */
export type FinancialInstitutionAccountModel = {

  /**
   * The unique identifier for the Financial Institution Account.
   */
  financialInstitutionAccountId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * An alternate account id for the Financial Institution Account.
   */
  bankAccountId: string | null;

  /**
   * The External Id for the Financial Institution Account.
   */
  erpKey: string | null;

  /**
   * The App Enrollment Id this Financial Institution is associated with.
   */
  appEnrollmentId: string | null;

  /**
   * The name of the Financial Institution Account.
   */
  name: string | null;

  /**
   * The status of the Financial Institution Account. Possible values are active,
   * inactive, deleted or archived.
   */
  status: string | null;

  /**
   * The description for the Financial Institution Account.
   */
  description: string | null;

  /**
   * The classification for the Financial Institution Account. Possible values are Asset, Equity,
   * Expense, Liability or Income.
   */
  accountType: string | null;

  /**
   * The date the Financial Institution Account was created.
   */
  created: string;

  /**
   * The user that has created the Financial Institution Account.
   */
  createdUserId: string;

  /**
   * The date the Financial Institution Account was modified.
   */
  modified: string;

  /**
   * The user that has modified the Financial Institution Account.
   */
  modifiedUserId: string;
};
