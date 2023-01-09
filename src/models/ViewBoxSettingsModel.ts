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
 * Optional meta data for image view box settings.
 */
export type ViewBoxSettingsModel = {

  /**
   * ViewBox minX setting for this Company's logo.
   */
  logoViewBoxMinX: number | null;

  /**
   * ViewBox minY setting for this Company's logo.
   */
  logoViewBoxMinY: number | null;

  /**
   * ViewBox width setting for this Company's logo.
   */
  logoViewBoxWidth: number | null;

  /**
   * ViewBox height setting for this Company's logo.
   */
  logoViewBoxHeight: number | null;
};
