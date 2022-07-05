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
 * Aggregated Attachment status information.
 */
export type AttachmentHeaderInfoModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The CompanyId associated with the attachment status report. Providing a null value will
   * return an attachment summary for all attachments associated to the provided GroupKey
   */
  companyId: string | null;

  /**
   * The total number of attachments associated with the provided GroupKey and CompanyId.
   */
  totalAttachments: number;

  /**
   * The total number of archived attachments associated with the provided GroupKey and CompanyId.
   */
  totalArchived: number;

  /**
   * The total number of active attachments associated with the provided GroupKey and CompanyId.
   */
  totalActive: number;
};
