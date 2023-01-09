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

import { WebhookRuleModel } from "..";

/**
 * A Webhook is a subscription to receive notifications automatically to the supplied
 * callback url when changes are made to a supported object.
 *
 * You will need to create at least one Webhook rule to receive notifications when a specific type of object is inserted, deleted, or updated.
 */
export type WebhookModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  webhookId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * A name for the webhook subscription.
   */
  name: string;

  /**
   * The status of the webhook (Active, Inactive, Errored).
   */
  statusCode: string | null;

  /**
   * When the StatusCode is set to Errored a message is supplied for why it was errored.
   */
  statusMessage: string | null;

  /**
   * An secret set during webhook creation that can be used to verify that the notification
   * is coming from the Lockstep API.
   */
  clientSecret: string | null;

  /**
   * The format of the content to be returned in the webhook notifications. Current options are 'Full' or 'Id'.
   */
  requestContentType: string;

  /**
   * The HTTP Method to be used on the callback URL for use in notifications (GET, POST, PATCH, PUT).
   */
  callbackHttpMethod: string;

  /**
   * The URL where the notification will be sent via the method set in CallbackHttpMethod.
   *
   * When creating a webhook, the Lockstep API will make a call to this url via the method
   * set in the CallbackHttpMethod property with a query parameter of "code" set to an encoded
   * string. To successfully create the webhook, the call must return a successful status code
   * with the query parameter's value as the plain text content.
   */
  callbackUrl: string;

  /**
   * The expiration date for the given webhook subscription. Once the expiration date passes,
   * notifications will no longer be sent to the callback url.
   */
  expirationDate: string | null;

  /**
   * The amount of consecutive failed notifications, not including the current attempt, before marking the webhook as
   * errored (i.e. if the value is set to 0, the webhook will be marked errored on the first failure, if the value
   * is set to 1 the webhook will be marked errored on the second failure, and so on). Use -1 to never mark the webhook
   * as errored due to failures.
   */
  retryCount: number;

  /**
   * The date this webhook was created
   */
  created: string;

  /**
   * The ID of the user who created this webhook
   */
  createdUserId: string;

  /**
   * The date this webhook was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified this webhook
   */
  modifiedUserId: string;

  /**
   * A list of Webhook Rules associated with this Webhook.
   */
  webhookRules: WebhookRuleModel[] | null;

  /**
   * The partition key used for the webhook callback history
   */
  partitionKey: string | null;
};
