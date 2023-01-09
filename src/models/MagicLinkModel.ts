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

import { UserAccountModel } from "..";

/**
 * Represents a magic link that can be used to log in to a Lockstep application.
 */
export type MagicLinkModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  magicLinkId: string;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   */
  groupKey: string;

  /**
   * The unique ID of the user that this magic link is associated with.
   */
  userId: string;

  /**
   * The ID of the user role for the magic link.
   */
  userRole: string;

  /**
   * The ID of the application for this magic link.
   */
  applicationId: string;

  /**
   * The UTC date and time when this magic link expires.
   */
  expires: string;

  /**
   * The UTC date and time when this magic link was revoked.
   */
  revoked: string | null;

  /**
   * The date that the magic link was created
   */
  created: string;

  /**
   * The ID of the user who created the magic link
   */
  createdUserId: string;

  /**
   * The date that the magic link was last modified
   */
  modified: string;

  /**
   * The ID of the user who last modified the magic link
   */
  modifiedUserId: string;

  /**
   * The ID of the company associated to this magic link
   */
  companyId: string | null;

  /**
   * The ID of the accounting profile associated to this magic link
   */
  accountingProfileId: string | null;

  /**
   * The created magic link URL. This will only be returned upon creation of the magic link.
   * All other times, this value will be `null`.
   */
  magicLinkUrl: string | null;

  /**
   * The user associated with this magic link.
   * To retrieve this item, specify `User` in the "Include" parameter for your query.
   */
  user: UserAccountModel | null;
};
