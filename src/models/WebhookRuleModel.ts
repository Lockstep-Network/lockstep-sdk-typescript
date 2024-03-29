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
 * A Webhook Rule is a subscription to receive notifications whenever a specific event occurs.
 *
 * With the rule, you specify the Table and event you want to subscribe to.
 * You can also optionally specify a filter to further refine the updates you want to receive.
 */
export type WebhookRuleModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  webhookRuleId: string;

  /**
   * The unique Webhook ID that will be used to fire the webhook for this rule.
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
   * A Webhook rule is setup to be fired based on `TableKey` and `EventType`.
   * For example, a Webhook setup for when an Invoice is Created would have a `TableKey` value of
   * `Invoice` and an `EventType` value of `I` (Insert).
   *
   * The `TableKey` value contains the name of the table within the Lockstep Platform to which this metadata
   * is connected.
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  tableKey: string;

  /**
   * A Webhook rule is setup to be fired based on `TableKey` and `EventType`.
   * For example, a Webhook setup for when an Invoice is Created would have a `TableKey` value of
   * `Invoice` and an `EventType` value of `I` (Insert).
   *
   * The `EventType` value is one of the following:
   * - I (Insert)
   * - D (Delete)
   * - U (Update)
   *
   * For more information, see [linking metadata to an object](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  eventType: string;

  /**
   * An optional Searchlight filter for this webhook rule. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  filter: string | null;

  /**
   * The date this webhook rule was created
   */
  created: string;

  /**
   * The ID of the user who created this webhook rule
   */
  createdUserId: string;

  /**
   * The date this webhook rule was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified this webhook rule
   */
  modifiedUserId: string;
};
