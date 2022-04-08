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
 * Represents a Sync action that loads data from a connector into the Lockstep Platform.  Users can
 * request Sync actions manually using Lockstep Inbox, or via the [Create Sync API](https://developer.lockstep.io/reference/post_api-v1-sync).
 * Each Sync action is tied to an [AppEnrollment](https://developer.lockstep.io/docs/applications-and-enrollments).
 * When the Sync action is complete, the field `StatusCode` will be set to either `Success` or `Failed`.
 *
 * You can fetch a list of detailed results for the Sync API by calling Retrieve or Query with an `include`
 * parameter of `details`.  These detailed results contain line-by-line errors that were detected during
 * processing of this sync.
 */
export type SyncRequestModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  syncRequestId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The status of processing for this SyncRequest.  When a SyncRequest is created, it is flagged as `Ready`.
   * When it is picked up for execution, its status moves to `In Progress`.  When it is complete, its status
   * will move to `Success` or `Failed`.  If another API call cancels the SyncRequest, its status will move
   * to `Cancelled`.
   *
   * * Ready
   * * In Progress
   * * Cancelled
   * * Failed
   * * Success
   */
  statusCode: string | null;

  /**
   * Message containing information about the sync request results
   */
  processResultMessage: string | null;

  /**
   * The AppEnrollmentId of the AppEnrollment object that executed this sync request
   */
  appEnrollmentId: string | null;

  /**
   * The date this sync request was created
   */
  created: string;

  /**
   * The date this sync request was last modified
   */
  modified: string;

  /**
   * The ID number of the user who most recently modified this sync request.
   */
  modifiedUserId: string;

  /**
   * The detailed list of results and errors that occurred during the processing of this SyncRequest.  This
   * information is available only after the SyncRequest has completed.  You will only be able to fetch this
   * field if the SyncRequest's `StatusCode` field is set to `Cancelled`, `Success`, or `Failed`.
   *
   * To retrieve this collection, add the keyword `details` to the `include` parameter on your Retrieve or
   * Query requests.
   */
  details: object | null;
};
