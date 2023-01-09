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

import { CustomFieldDefinitionModel } from "..";

/**
 * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a
 * core definition for each object.  The core definition is intended to represent a level of compatibility
 * that provides support across most accounting systems and products.  When a user or developer requires
 * information beyond this core definition, you can use Custom Fields to represent this information.
 *
 * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
 */
export type CustomFieldValueModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * Additional key if source table doesn't have a unique id
   */
  recordKey: string;

  /**
   * Table to which this definition belongs
   */
  tableKey: string;

  /**
   * Text to display in-application for custom field
   */
  customFieldLabel: string;

  /**
   * Data type of this definition
   */
  dataType: string | null;

  /**
   * Date created
   */
  created: string;

  /**
   * Id of user who created this value
   */
  createdUserId: string;

  /**
   * Date modified
   */
  modified: string;

  /**
   * Id of user who modified this value
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this attachment record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * The value of this custom field.
   */
  value: string | null;

  /**
   * Definition of the value
   */
  customFieldDefinition: CustomFieldDefinitionModel | null;
};
