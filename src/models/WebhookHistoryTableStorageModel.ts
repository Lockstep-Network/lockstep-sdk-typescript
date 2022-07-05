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
 * Represents the Webhook Trigger History
 */
export type WebhookHistoryTableStorageModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The WebhookId uniquely identifies the webhook used to send notification that an event action has taken place.
   */
  webhookId: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  webhookHistoryId: string;

  /**
   * Event type which fired webhook
   *
   * [entity].[action]
   */
  eventType: string | null;

  /**
   * Flag whether request was sent to callback url successfully or blocked by failing or because it was disabled.
   */
  requestSent: boolean;

  /**
   * Flag whether webhook notification was successful overall (if webhook disabled should always return true otherwise
   * depends on the response from the callback url)
   */
  isSuccessful: boolean;

  /**
   * Response status code that is returned when calling a callback url.
   */
  responseStatusCode: string | null;

  /**
   * Message containing information about the webhook callback results
   */
  processResultMessage: string | null;

  /**
   * Number of times message failed to be sent over to callback url before succeeding or failing out.
   * The maximum value should is based on webhook.
   */
  failureCount: number;

  /**
   * Timestamp of when a request is sent to a webhook callback.
   * Contains the last time message is sent if failures occur.
   */
  timestamp: string | null;
};
