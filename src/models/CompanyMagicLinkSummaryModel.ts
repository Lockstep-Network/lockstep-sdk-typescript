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
 * A summary of companies combined with their most recent magic links
 */
export type CompanyMagicLinkSummaryModel = {

  /**
   * The unique id for this company
   */
  companyId: string;

  /**
   * The short name of the company.
   */
  companyName: string;

  /**
   * This field indicates the type of company.  It can be one of a limited number of values:
   * Company, Customer, Group, Vendor, or Third Party.  A company that represents both a customer and a vendor
   * is identified as a CustomerVendor.
   *
   * * `Company` - This record represents a company that is part of the organization of the account holder.
   * * `Customer` - This record represents a business entity that purchases things from the account holder.
   * * `Group` - Only one record of type `GROUP` exists in each account.  Contains your account profile.
   * * `Vendor` - This record represents a business entity that sells things to the account holder.
   * * `Third Party` - This record represents a business entity that is neither a customer nor vendor.
   * * `CustomerVendor` - Both a customer and a vendor.
   * * `CompanyProfile` - Profile for a Company, each Company should have at most 1 profile, used only for Profile Management.
   */
  companyType: string | null;

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The name of the primary contact for this company
   */
  primaryContactName: string | null;

  /**
   * The email of the primary contact for this company
   */
  primaryContactEmailAddress: string | null;

  /**
   * The point of contact for this company
   */
  pointOfContact: string | null;

  /**
   * The total outstanding amount for this company
   */
  outstandingAmount: number;

  /**
   * The total number of open invoices for this company
   */
  totalOpenInvoices: number;

  /**
   * The total number of invoices that are past due for this company
   */
  pastDue: number;

  /**
   * Total number of visits for all magic links sent for this company
   */
  totalVisits: number;

  /**
   * Total number of sent links for this company
   */
  linksSent: number;

  /**
   * Created date of the most recent magic link made for this company
   */
  latestMagicLinkDate: string | null;

  /**
   * Id of the most recent magic link made for this company
   */
  latestMagicLinkId: string | null;

  /**
   * Status of the most recent magic link made for this company
   */
  latestMagicLinkStatus: number | null;
};
