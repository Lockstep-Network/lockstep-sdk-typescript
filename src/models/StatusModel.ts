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

import { MagicLinkStatusModel } from "..";
import { SupportAccessModel } from "..";
import { UserGroupModel } from "..";

/**
 * Represents the status of a user's credentials
 */
export type StatusModel = {

  /**
   * If authentication is successful, contains the username of the logged-in user.
   */
  userName: string | null;

  /**
   * If authentication is successful, contains the email address of the logged-in user.
   */
  emailAddress: string | null;

  /**
   * If authentication is successful, contains subscription account name of logged-in user.
   */
  accountName: string | null;

  /**
   * If authentication is successful, contains subscription account company id of logged-in user.
   */
  accountCompanyId: string | null;

  /**
   * If authentication is successful, contains the unique identifier of the logged-in user.
   */
  userId: string | null;

  /**
   * If authentication is successful, contains the group key of the logged-in user.
   */
  groupKey: string | null;

  /**
   * Returns true if authentication for this API was successful.
   */
  loggedIn: boolean;

  /**
   * The error message.
   */
  errorMessage: string | null;

  /**
   * The set of roles for this user.
   */
  roles: string[] | null;

  /**
   * Date and time user has last logged into Azure B2C.
   */
  lastLoggedIn: string | null;

  /**
   * The id of the API key used to authenticate.
   */
  apiKeyId: string | null;

  /**
   * If authentication is successful, contains the user status of the logged-in user.
   */
  userStatus: string | null;

  /**
   * The environment currently being used
   */
  environment: string | null;

  /**
   * The version currently being used
   */
  version: string | null;

  /**
   * If authentication is successful, contains the onboarding session status of the logged-in user's group account.
   */
  onboardingScheduled: boolean | null;

  /**
   * Base Currency of the group
   */
  baseCurrencyCode: string | null;

  /**
   * Country code of the group
   */
  countryCode: string | null;

  /**
   * Magic link information about the user
   */
  magicLink: MagicLinkStatusModel | null;

  /**
   * Information allowing Lockstep to offer direct support to the user
   */
  supportAccess: SupportAccessModel | null;

  /**
   * True if the user is being impersonated by the Lockstep support team.
   */
  isImpersonated: boolean;

  /**
   * The set of Groups that the user has access to.
   * You can use the /api/v1/useraccounts/change-group endpoint to change your active group.
   */
  userGroups: UserGroupModel[] | null;

  /**
   * Statuses for the dependencies of this api.
   * OK if the dependency is working.
   */
  dependencies: object | null;
};
