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
 * Represents leads for creating new ERP connectors
 */
export type LeadModel = {

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   */
  leadId: string;

  /**
   * Name of lead
   */
  name: string;

  /**
   * Name of company of lead
   */
  company: string | null;

  /**
   * Email of lead
   */
  email: string | null;

  /**
   * Requested ERP of lead
   */
  erpSystem: string | null;
};
