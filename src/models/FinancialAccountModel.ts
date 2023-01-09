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
 * An Financial account refers to records of assets, liabilities, income, expenses, and equity.
 */
export type FinancialAccountModel = {

  /**
   * The unique identifier for the Financial Account.
   */
  financialAccountId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The code for the Financial Account. Can either be a general ledger or
   * an account code.
   */
  code: string | null;

  /**
   * The External Id for the Financial Account.
   */
  erpKey: string | null;

  /**
   * The App Enrollment Id for the Financial Account.
   */
  appEnrollmentId: string | null;

  /**
   * The name of the Financial Account.
   */
  name: string | null;

  /**
   * The status of the Financial Account. Possible values are active,
   * inactive, deleted or archived.
   */
  status: string | null;

  /**
   * The cashflow type for the Financial Account. Examples include cash, financing, investment
   * or operation.
   */
  cashflowType: string | null;

  /**
   * The description for the Financial Account.
   */
  description: string | null;

  /**
   * The classification for the Financial Account. Possible values are Asset, Equity,
   * Expense, Liability or Income.
   */
  classification: string | null;

  /**
   * The category for the Financial Account. Examples include Current Asset, Current Liability, Common Stock
   */
  category: string | null;

  /**
   * The subcategory for the Financial Account. Examples include Cash, Property, Bank Loan, etc.
   */
  subcategory: string | null;

  /**
   * The date the FinancialAccount was created.
   */
  created: string;

  /**
   * The user that has created the Financial Account.
   */
  createdUserId: string;

  /**
   * The date the Financial Account was modified.
   */
  modified: string;

  /**
   * The user that has modified the Financial Account.
   */
  modifiedUserId: string;
};
