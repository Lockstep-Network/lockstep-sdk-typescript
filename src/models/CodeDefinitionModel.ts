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
 * Represents a Code Definition.  Codes can be used as shortened, human readable strings.
 * Additionally, this table can be used to store lists of system values for Lockstep objects.
 */
export type CodeDefinitionModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  codeDefinitionId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The type of the Code Definition
   */
  codeType: string | null;

  /**
   * The Code to be defined.
   */
  code: string | null;

  /**
   * The definition of the Code
   */
  codeDescription: string | null;

  /**
   * The date that the Code Definition was created
   */
  created: string;

  /**
   * The ID of the user who created the Code Definition
   */
  createdUserId: string;

  /**
   * The date the Code Definition was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified the Code Definition
   */
  modifiedUserId: string;
};
