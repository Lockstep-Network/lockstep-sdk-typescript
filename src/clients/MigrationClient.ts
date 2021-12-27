/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2021 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/tspence/lockstep-sdk-typescript
 */

import { LockstepApi } from "../APIClient.js";
import { ErrorResult } from "../models/ErrorResult.js";
import { MigrationResultModel } from "../models/DataModels.js";
import { AvailableMigrationsModel } from "../models/DataModels.js";

export class MigrationClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Migrates all customer data from the Lockstep Collect system to the API, including all stored data for contacts, companies, payments, and invoices.
   * 
   */
  migrateData(): Promise<MigrationResultModel | ErrorResult> {
    const url = `/api/v1/Migration`;
    return this.client.request<MigrationResultModel>('post', url, null, null);
  }

  /**
   * Lists all of the customer, contact, payment, and invoice data currently available for Migration.
   * 
   */
  listMigrations(): Promise<AvailableMigrationsModel | ErrorResult> {
    const url = `/api/v1/Migration/list`;
    return this.client.request<AvailableMigrationsModel>('get', url, null, null);
  }
}
