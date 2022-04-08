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
 * App enrollment and custom field merged into one
 */
export type AppEnrollmentCustomFieldModel = {

  /**
   * Unique id for the app enrollment
   */
  appEnrollmentId: string;

  /**
   * Id of enrolled app
   */
  appId: string;

  /**
   * The name of the application
   */
  name: string | null;

  /**
   * Tag for what type of app the application is
   */
  appType: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Unique Id for the custom field definition
   */
  customFieldDefinitionId: string;

  /**
   * Text to display in-application for custom field
   */
  customFieldLabel: string | null;

  /**
   * Data type of the custom field definition
   */
  dataType: string | null;

  /**
   * Used for display logic when multiple app enrollment custom fields exist
   */
  sortOrder: number;

  /**
   * Value for the field
   */
  value: string | null;
};
