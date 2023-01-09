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
 * Contains Public Company Profile data.
 */
export type PublicCompanyProfileModel = {

  /**
   * The unique ID of the company associated with this profile.
   */
  companyId: string;

  /**
   * The short name of the company associated with this profile.
   */
  companyName: string | null;

  /**
   * The URL of this company's logo, if known.
   */
  companyLogoUrl: string | null;

  /**
   * Website URL for the company associated with this profile.
   */
  website: string | null;

  /**
   * Description of the company associated with this profile.
   */
  description: string | null;

  /**
   * The public url slug for this Public Company Profile.
   */
  publicUrlSlug: string | null;
};
