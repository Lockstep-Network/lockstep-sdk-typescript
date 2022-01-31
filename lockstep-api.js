'use strict';

var axios = require('axios');
var os = require('os');
var url = require('url');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var axios__namespace = /*#__PURE__*/_interopNamespace(axios);
var os__namespace = /*#__PURE__*/_interopNamespace(os);
var url__namespace = /*#__PURE__*/_interopNamespace(url);

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class ActivitiesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Activity specified by this unique identifier, optionally including nested data sets.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param id The unique Lockstep Platform ID number of this Activity
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Company, Attachments, CustomFields, Notes, References, and UserAssignedToName
     */
    retrieveActivity(id, include) {
        const url = `/api/v1/Activities/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an activity that matches the specified id with the requested information.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param id The unique Lockstep Platform ID number of the Activity to update
     * @param body A list of changes to apply to this Activity
     */
    updateActivity(id, body) {
        const url = `/api/v1/Activities/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Delete the Activity referred to by this unique identifier.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param id The unique Lockstep Platform ID number of the Activity to delete
     */
    deleteActivity(id) {
        const url = `/api/v1/Activities/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more activities from a given model.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param body The Activities to create
     */
    createActivities(body) {
        const url = `/api/v1/Activities`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Activities for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Company, Attachments, CustomFields, Notes, References, and UserAssignedToName
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryActivities(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Activities/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Retrieves a list of items representing the activity stream for the supplied activity id.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param id The unique Lockstep Platform ID number of this Activity
     */
    retrieveActivityStream(id) {
        const url = `/api/v1/Activities/${id}/stream`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Forwards an activity by creating a new activity with all child references and assigning the new activity to a new user.
     *
     * An Activity contains information about work being done on a specific accounting task. You can use Activities to track information about who has been assigned a specific task, the current status of the task, the name and description given for the particular task, the priority of the task, and any amounts collected, paid, or credited for the task.
     *
     * @param activityId
     * @param userId
     */
    forwardActivity(activityId, userId) {
        const url = `/api/v1/Activities/${activityId}/forward/${userId}`;
        return this.client.request("post", url, null, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class ApiKeysClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the API Key with this identifier.
     *
     * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
     *
     * @param id The unique ID number of the API Key to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future.
     */
    retrieveAPIKey(id, include) {
        const url = `/api/v1/ApiKeys/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Immediately revokes the API Key with the specified id so it cannot be used to call the API.  The Lockstep Platform guarantees that revocation will be received by all servers within five minutes of revocation.  API calls made using this API key after the revocation will fail.  A revoked API Key  cannot be un-revoked and may be removed 60 days after revocation.
     *
     * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
     *
     * @param id The unique Lockstep Platform ID number of this API Key
     */
    revokeAPIKey(id) {
        const url = `/api/v1/ApiKeys/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates an API key with the specified name.
     *
     * An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
     *
     * @param body Metadata about the API Key to create.
     */
    createAPIKey(body) {
        const url = `/api/v1/ApiKeys`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries API Keys for this user using the specified filtering, sorting, nested fetch, and pagination rules requested.  An API Key is an authentication token that you may use with the Lockstep API.  Because API Keys do not have an expiration date, they are well suited for unattended processes.  Each API Key is associated with a user, and may be revoked to prevent it from accessing the Lockstep API. When you create an API Key, make sure to save the value in a secure location.  Lockstep cannot retrieve an API Key once it is created.  For more information, see [API Keys](https://developer.lockstep.io/docs/api-keys).
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryAPIKeys(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/ApiKeys/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class AppEnrollmentsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the App Enrollment with this identifier.
     *
     * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the App Enrollment to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: App, CustomFields, LastSync, LastSuccessfulSync
     */
    retrieveAppEnrollment(id, include) {
        const url = `/api/v1/AppEnrollments/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing App Enrollment with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  For example, you can provide the field name "IsActive" and specify the new value "False"; this API will then change the value of IsActive to false.
     *
     * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the App Enrollment to update
     * @param body A list of changes to apply to this App Enrollment
     */
    updateAppEnrollment(id, body) {
        const url = `/api/v1/AppEnrollments/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the App Enrollment referred to by this unique identifier. An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the App Enrollment to delete
     * @param removeEnrollmentData Option to remove all associated app enrollment data when deleting app enrollment (default false)
     */
    deleteAppEnrollment(id, removeEnrollmentData) {
        const url = `/api/v1/AppEnrollments/${id}`;
        const options = {
            params: {
                removeEnrollmentData,
            },
        };
        return this.client.request("delete", url, options, null);
    }
    /**
     * Creates one or more App Enrollments within this account and returns the records as created.
     *
     * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param body The App Enrollments to create
     */
    createAppEnrollments(body) {
        const url = `/api/v1/AppEnrollments`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries App Enrollments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: App, CustomFields, LastSync, LastSuccessfulSync
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryAppEnrollments(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/AppEnrollments/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries custom fields settings for app enrollment within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * An App Enrollment represents an app that has been enrolled to the current account.  When you sign up for an app using the Lockstep Platform, you obtain an enrollment record for that app.  Example types of apps include connectors and feature enhancement apps. The App Enrollment object contains information about this app, its configuration, and settings.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the App Enrollment for which we retrieve custom fields
     */
    queryEnrollmentFields(id) {
        const url = `/api/v1/AppEnrollments/settings/${id}`;
        return this.client.request("get", url, null, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class ApplicationsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Application with this identifier.
     *
     * An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the Application to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields
     */
    retrieveApplication(id, include) {
        const url = `/api/v1/Applications/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Application with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  For example, you can provide the field name "IsActive" and specify the new value "False"; this API will then change the value of IsActive to false.   An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the Application to update
     * @param body A list of changes to apply to this Application
     */
    updateApplication(id, body) {
        const url = `/api/v1/Applications/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Application referred to by this unique identifier.  Information about this Application is retained but after the DELETE call, this Application is no longer available for use on the Lockstep Platform.  An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param id The unique ID number of the Application to delete
     */
    deleteApplication(id) {
        const url = `/api/v1/Applications/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Applications and returns the records as created.  Applications are universal and available across all accounts.
     *
     * An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param body The Applications to create
     */
    createApplications(body) {
        const url = `/api/v1/Applications`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Applications on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  An Application represents a feature available to customers within the Lockstep Platform.  You can create Applications by working with your Lockstep business development manager and publish them on the platform so that customers can browse and find your Application on the Lockstep Platform Marketplace.  When a customer adds an Application to their account, they obtain an AppEnrollment which represents that customer's instance of this Application.  The customer-specific AppEnrollment contains a customer's configuration data for the Application, which is not customer-specific.
     *
     * See [Applications and Enrollments](https://developer.lockstep.io/docs/applications-and-enrollments) for more information.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryApplications(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Applications/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class AttachmentsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Attachment with the provided Attachment identifier.
     *
     * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique ID number of the Attachment to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available for querying but may be available in the future.
     */
    retrieveAttachment(id, include) {
        const url = `/api/v1/Attachments/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Attachment with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique Lockstep Platform ID number of the attachment to update
     * @param body A list of changes to apply to this Attachment
     */
    updateAttachment(id, body) {
        const url = `/api/v1/Attachments/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Flag this attachment as archived, which can distinguish between attachments currently active and attachments not intended for active use.  This is similar to deletion but preserves information about the record's existence.
     *
     * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique ID number of the Attachment to be archived
     */
    archiveAttachment(id) {
        const url = `/api/v1/Attachments/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Returns a URI for the Attachment file to be downloaded, based on the ID provided.
     *
     * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique ID number of the Attachment whose URI will be returned
     */
    downloadAttachment(id) {
        const url = `/api/v1/Attachments/${id}/download`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Uploads and creates one or more Attachments from the provided arguments.
     *
     * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param tableName The name of the type of object to which this Attachment will be linked
     * @param objectId The unique ID of the object to which this Attachment will be linked
     */
    uploadAttachment(tableName, objectId) {
        const url = `/api/v1/Attachments`;
        const options = {
            params: {
                tableName,
                objectId,
            },
        };
        return this.client.request("post", url, options, null);
    }
    /**
     * Queries Attachments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * An Attachment is a file that can be attached to various account attributes within Lockstep. Attachments can be used for invoices, bills, or any other external files that you wish to track and have access to. Attachments represents an Attachment and a number of different metadata attributes related to the creation, storage, and ownership of the Attachment.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param filter The filter to use to select from the list of available Attachments, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available for querying but may be available in the future.
     * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
     * @param pageSize The page size for results (default 200, maximum of 10,000)
     * @param pageNumber The page number for results (default 0)
     */
    queryAttachments(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Attachments/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class CodeDefinitionsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the CodeDefinition specified by this unique identifier, optionally including nested data sets.
     *
     * A CodeDefinition contains information around system code values and their definitions.
     *
     * @param id The unique Lockstep Platform ID number of this CodeDefinition
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     */
    retrieveCodeDefinition(id, include) {
        const url = `/api/v1/CodeDefinitions/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries CodeDefinitions for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A CodeDefinition contains information around system code values and their definitions.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryCodeDefinitions(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/CodeDefinitions/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class CompaniesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Company specified by this unique identifier, optionally including nested data sets.  A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
     *
     * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, Contacts, CustomFields, Invoices, Notes, Classification
     */
    retrieveCompany(id, include) {
        const url = `/api/v1/Companies/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates a Company that matches the specified id with the requested information.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
     *
     * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
     * @param body A list of changes to apply to this Company
     */
    updateCompany(id, body) {
        const url = `/api/v1/Companies/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Disable the Company referred to by this unique identifier.
     *
     * A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
     *
     * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
     */
    disableCompany(id) {
        const url = `/api/v1/Companies/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Companies from a given model.  A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
     *
     * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param body The Companies to create
     */
    createCompanies(body) {
        const url = `/api/v1/Companies`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Companies for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A Company represents a customer, a vendor, or a company within the organization of the account holder. Companies can have parents and children, representing an organizational hierarchy of corporate entities. You can use Companies to track projects and financial data under this Company label.
     *
     * See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, Contacts, CustomFields, Invoices, Notes, Classification
     * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
     * @param pageSize The page size for results (default 200, maximum of 10,000)
     * @param pageNumber The page number for results (default 0)
     */
    queryCompanies(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Companies/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries Customer Summaries for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  The Customer Summary View represents a slightly different view of the data and includes some extra fields that might be useful. For more information, see the data format of the Customer Summary Model.  See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
     * @param pageSize The page size for results (default 200, maximum of 10,000)
     * @param pageNumber The page number for results (default 0)
     */
    queryCustomerSummary(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Companies/views/customer-summary`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Retrieves the Customer Details specified by this unique identifier, optionally including nested data sets.  The Customer Detail View represents a slightly different view of the data and includes some extra fields that might be useful. For more information, see the data format of the Customer Detail Model.  See [Vendors, Customers, and Companies](https://developer.lockstep.io/docs/companies-customers-and-vendors) for more information.
     *
     * @param id The unique Lockstep Platform ID number of this Company; NOT the customer's ERP key
     */
    retrieveCustomerDetail(id) {
        const url = `/api/v1/Companies/views/customer-details/${id}`;
        return this.client.request("get", url, null, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class ContactsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Contact specified by this unique identifier, optionally including nested data sets.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
     *
     * @param id The unique Lockstep Platform ID number of this Contact; NOT the customer's ERP key
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
     */
    retrieveContact(id, include) {
        const url = `/api/v1/Contacts/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates a contact that matches the specified id with the requested information.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
     *
     * @param id The unique Lockstep Platform ID number of the Contact to update; NOT the customer's ERP key
     * @param body A list of changes to apply to this Contact
     */
    updateContact(id, body) {
        const url = `/api/v1/Contacts/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Disable the Contact referred to by this unique identifier.
     *
     * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
     *
     * @param id The unique Lockstep Platform ID number of the Contact to disable; NOT the customer's ERP key
     */
    disableContact(id) {
        const url = `/api/v1/Contacts/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more contacts from a given model.
     *
     * A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
     *
     * @param body The Contacts to create
     */
    createContacts(body) {
        const url = `/api/v1/Contacts`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Contacts for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A Contact contains information about a person or role within a Company. You can use Contacts to track information about who is responsible for a specific project, who handles invoices, or information about which role at a particular customer or vendor you should speak with about invoices.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryContacts(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Contacts/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class CreditMemoAppliedClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Credit Memo Application specified by this unique identifier, optionally including nested data sets.
     *
     * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
     *
     * @param id The unique Lockstep Platform ID number of this Credit Memo Application; NOT the customer's ERP key
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
     */
    retrieveCreditMemoApplication(id, include) {
        const url = `/api/v1/CreditMemoApplied/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Credit memo Application with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
     *
     * @param id The unique Lockstep Platform ID number of the Credit Memo Application to update; NOT the customer's ERP key
     * @param body A list of changes to apply to this Credit Memo Application
     */
    updateCreditMemoApplication(id, body) {
        const url = `/api/v1/CreditMemoApplied/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Credit Memo Application referred to by this unique identifier.
     *
     * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
     *
     * @param id The unique Lockstep Platform ID number of the Credit Memo Application to delete; NOT the customer's ERP key
     */
    deleteCreditMemoApplication(id) {
        const url = `/api/v1/CreditMemoApplied/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Credit Memo Applications within this account and returns the records as created.
     *
     * Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
     *
     * @param body The Credit Memo Applications to create
     */
    createCreditMemoApplications(body) {
        const url = `/api/v1/CreditMemoApplied`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Credit Memo Applications for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Credit Memos reflect credits granted to a customer for various reasons, such as discounts or refunds. Credit Memos may be applied to Invoices as Payments. When a Credit Memo is applied as payment to an Invoice, Lockstep creates a Credit Memo Application record to track the amount from the Credit Memo that was applied as payment to the Invoice. You can examine Credit Memo Application records to track which Invoices were paid using this Credit.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryCreditMemoApplications(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/CreditMemoApplied/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class CurrenciesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieve a currency conversation rate from one currency to another as of the specified date.              Optionally, you can specify which currency data provider to use.
     *
     *              The currency rate model contains all of the information used to make the API call, plus the rate to              use for the conversion.
     *
     * @param sourceCurrency The ISO 4217 currency code of the origin currency. For a list of currency codes, call List Currencies.
     * @param destinationCurrency The ISO 4217 currency code of the target currency. For a list of currency codes, call List Currencies.
     * @param date The date for which we should cto use for this currency conversion.
     * @param dataProvider Optionally, you can specify a data provider.
     */
    retrievecurrencyrate(sourceCurrency, destinationCurrency, date, dataProvider) {
        const url = `/api/v1/Currencies/${sourceCurrency}/${destinationCurrency}`;
        const options = {
            params: {
                date,
                dataProvider,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Receives an array of dates and currencies and a destination currency and returns an array of the corresponding currency rates to the given destination currency (Limit X).
     *
     * @param destinationCurrency The currency to convert to.
     * @param body A list of dates and source currencies.
     */
    bulkcurrencydata(body, destinationCurrency) {
        const url = `/api/v1/Currencies/bulk`;
        const options = {
            params: {
                destinationCurrency,
            },
        };
        return this.client.request("post", url, options, body);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class CustomFieldDefinitionsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Custom Field Definition specified by this unique identifier.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique Lockstep Platform ID number of this Custom Field Definition
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No additional data collections are currently defined on this object, but may be supported in the future.
     */
    retrieveFieldDefinition(id, include) {
        const url = `/api/v1/CustomFieldDefinitions/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Custom Field Definition with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique Lockstep Platform ID number of the Custom Field Definition to update
     * @param body A list of changes to apply to this Custom Field Definition
     */
    updateFieldDefinition(id, body) {
        const url = `/api/v1/CustomFieldDefinitions/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Custom Field Definition referred to by this unique identifier.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique Lockstep Platform ID number of the Custom Field Definition to delete
     */
    deleteFieldDefinition(id) {
        const url = `/api/v1/CustomFieldDefinitions/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Custom Field Definitions and returns the records as created.  A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param body The Custom Field Definitions to create
     */
    createFieldDefinitions(body) {
        const url = `/api/v1/CustomFieldDefinitions`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Custom Field Definitions within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No additional data collections are currently defined on this object, but may be supported in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryFieldDefinitions(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/CustomFieldDefinitions/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class CustomFieldValuesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves all Custom Field Definitions.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param definitionId The unique Lockstep Platform ID number of the Custom Field Definition for the Custom Field Value to retrieve.
     * @param recordKey The unique Lockstep Platform ID number of the Lockstep Platform object the Custom Field Value is attached to.
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: CustomFieldDefinition
     */
    retrieveField(definitionId, recordKey, include) {
        const url = `/api/v1/CustomFieldValues/${definitionId}/${recordKey}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Custom Field with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param definitionId The unique Lockstep Platform ID number of the Custom Field Definition for the Custom Field Value to retrieve.
     * @param recordKey The unique Lockstep Platform ID number of the Lockstep Platform object the Custom Field Value is attached to.
     * @param body A list of changes to apply to this Custom Field
     */
    updateField(definitionId, recordKey, body) {
        const url = `/api/v1/CustomFieldValues/${definitionId}/${recordKey}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Custom Field referred to by this unique identifier.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param definitionId The unique Lockstep Platform ID number of the Custom Field Definition for the Custom Field Value to retrieve.
     * @param recordKey The unique Lockstep Platform ID number of the Lockstep Platform object the Custom Field Value is attached to.
     */
    deleteField(definitionId, recordKey) {
        const url = `/api/v1/CustomFieldValues/${definitionId}/${recordKey}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Custom Fields and returns the records as created.  A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param body The Custom Fields to create
     */
    createFields(body) {
        const url = `/api/v1/CustomFieldValues`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Custom Fields within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A Custom Field represents metadata added to an object within the Lockstep Platform.  Lockstep provides a core definition for each object.  The core definition is intended to represent a level of compatibility that provides support across most accounting systems and products.  When a user or developer requires information beyond this core definition, you can use Custom Fields to represent this information.  See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: CustomFieldDefinition
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryFields(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/CustomFieldValues/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class DefinitionsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Queries the ISO3166 List of Countries using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Your program may want to show a list of countries. The ISO maintains a list of countries called [ISO3166](https://www.iso.org/iso-3166-country-codes.html). For convenience, this list is available in the API.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available, but may be offered in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryCountries(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Definitions/countries`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries Currencies on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * Your app may wish to make use of a reference list that contains names and attributes for all ISO-4217 defined currency codes.  This information is provided via a query endpoint so that you can use this API to provide a user selection screen.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available, but may be offered in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryCurrencies(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Definitions/currencies`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries the list of States in the United States using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Your app may wish to make use of a reference list that contains names and codes for all states in the United States.  This information is provided for the United States since many financial systems require mailing addresses that use codes for states.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available, but may be offered in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryStates(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Definitions/states`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries a list of financial systems using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  Lockstep provides a list of financial systems that may be useful as a selection screen that allows customers to select from a list.  You can query these items by name or attributes and use this data source to help users complete a selection.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available, but may be offered in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryFinancialSystems(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Definitions/financialsystems`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class EmailsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the email with the specified email identifier.
     *
     * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
     *
     * @param id The unique ID number of the Email to retrieve.
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes, ResponseOrigin
     */
    retrieveEmail(id, include) {
        const url = `/api/v1/Emails/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Email with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
     *
     * @param id The unique Lockstep Platform ID number of the email to update
     * @param body A list of changes to apply to this Email
     */
    updateEmail(id, body) {
        const url = `/api/v1/Emails/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Email referred to by this unique identifier.
     *
     * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
     *
     * @param id The unique Lockstep Platform ID number of the Email to delete
     */
    deleteEmail(id) {
        const url = `/api/v1/Emails/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Retrieves a signature logo for the email with the specified identifier and increments 'ViewCount'.
     *
     * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
     *
     * @param emailId The unique ID number of the Email to retrieve.
     * @param nonce The random nonce applied at time of url creation.
     */
    retrieveEmailLogo(emailId, nonce) {
        const url = `/api/v1/Emails/${emailId}/logo/${nonce}`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Creates one or more emails from the specified array of Email Models
     *
     * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
     *
     * @param body The array of emails to be created
     */
    createEmails(body) {
        const url = `/api/v1/Emails`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Emails on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * An Email represents a communication sent from one company to another.  The creator of the email is identified by the `CompanyId` field, recipient(s) by the `EmailTo` field, and cc recipient(s) by the 'EmailCC' field. The Email Model represents an email and a number of different metadata attributes related to the creation, storage, and ownership of the email.
     *
     * @param filter The filter to use to select from the list of available applications, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Attachments, CustomFields, Notes, ResponseOrigin
     * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryEmails(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Emails/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class InvoiceHistoryClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the history of the Invoice specified by this unique identifier.
     *
     * An Invoice represents a bill sent from one company to another.  The Lockstep Platform tracks changes to each Invoice so that you can observe the changes over time.  You can view the InvoiceHistory list to monitor and observe the changes of this Invoice and track the dates when changes occurred.
     *
     * @param id The unique Lockstep Platform ID number of this invoice; NOT the customer's ERP key
     */
    retrieveInvoiceHistory(id) {
        const url = `/api/v1/InvoiceHistory/${id}`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Queries Invoice History for this account using the specified filtering, sorting, and pagination rules requested.
     *
     * An Invoice represents a bill sent from one company to another.  The Lockstep Platform tracks changes to each Invoice so that you can observe the changes over time.  You can view the InvoiceHistory list to monitor and observe the changes of this Invoice and track the dates when changes occurred.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available for querying but may be available in the future.
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryInvoiceHistory(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/InvoiceHistory/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class InvoicesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Invoice specified by this unique identifier, optionally including nested data sets.
     *
     * An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
     *
     * @param id The unique Lockstep Platform ID number of this invoice; NOT the customer's ERP key
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Addresses, Lines, Payments, Notes, Attachments, Company, Customer, CustomFields, CreditMemos
     */
    retrieveInvoice(id, include) {
        const url = `/api/v1/Invoices/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Invoice with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
     *
     * @param id The unique Lockstep Platform ID number of the invoice to update; NOT the customer's ERP key
     * @param body A list of changes to apply to this Invoice
     */
    updateInvoice(id, body) {
        const url = `/api/v1/Invoices/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Invoice referred to by this unique identifier. An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
     *
     * @param id The unique Lockstep Platform ID number of the invoice to delete; NOT the customer's ERP key
     */
    deleteInvoice(id) {
        const url = `/api/v1/Invoices/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Invoices within this account and returns the records as created.
     *
     * An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
     *
     * @param body The Invoices to create
     */
    createInvoices(body) {
        const url = `/api/v1/Invoices`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Invoices for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Addresses, Lines, Payments, Notes, Attachments, Company, Customer, CustomFields, CreditMemos
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryInvoices(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Invoices/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries Invoices for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  Display the results using the Invoice Summary View format.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * The Invoice Summary View represents a slightly different view of the data and includes some extra fields that might be useful.  For more information, see the data format of the Invoice Summary Model.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryInvoiceSummaryView(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Invoices/views/summary`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries At Risk Invoices for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  Display the results using the At Risk Invoice Summary View format.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * The At Risk Invoice Summary View represents a slightly different view of the data and includes some extra fields that might be useful.  For more information, see the data format of the At Risk Invoice Summary Model.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryAtRiskInvoiceSummaryView(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Invoices/views/at-risk-summary`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class LeadsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates one or more Leads within the Lockstep platform and returns the records as created.
     *
     * A Lead is a person who is interested in the Lockstep platform but needs certain new features in order to use it. If you are interested in the Lockstep platform, you can create a lead with your information and our team will prioritize the feature you need.
     *
     * @param body The Leads to create
     */
    createLeads(body) {
        const url = `/api/v1/Leads`;
        return this.client.request("post", url, null, body);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class NotesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the note with the specified note identifier.  A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id The unique ID number of the Note to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     */
    retrieveNote(id, include) {
        const url = `/api/v1/Notes/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Archives the Note with the unique ID specified.  A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param id Note id to be archived
     */
    archiveNote(id) {
        const url = `/api/v1/Notes/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more notes from the specified array of Note Models
     *
     * A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param body The array of notes to be created
     */
    createNotes(body) {
        const url = `/api/v1/Notes`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Notes on the Lockstep Platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A note is a customizable text string that can be attached to various account attributes within Lockstep. You can use notes for internal communication, correspondence with clients, or personal reminders. The Note Model represents a note and a number of different metadata attributes related to the creation, storage, and ownership of the note.
     *
     * See [Extensibility](https://developer.lockstep.io/docs/extensibility) for more information.
     *
     * @param filter The filter to use to select from the list of available applications, in the [Searchlight query syntax](https://github.com/tspence/csharp-searchlight).
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for the results, in the [Searchlight order syntax](https://github.com/tspence/csharp-searchlight).
     * @param pageSize The page size for results (default 200, maximum of 10,000)
     * @param pageNumber The page number for results (default 0)
     */
    queryNotes(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Notes/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class PaymentApplicationsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Payment Application specified by this unique identifier, optionally including nested data sets.
     *
     * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
     *
     * @param id The unique Lockstep Platform ID number of this Payment Application; NOT the customer's ERP key
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Invoice
     */
    retrievePaymentApplication(id, include) {
        const url = `/api/v1/PaymentApplications/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Payment Application with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
     *
     * @param id The unique Lockstep Platform ID number of the Payment Application to update; NOT the customer's ERP key
     * @param body A list of changes to apply to this Payment Application
     */
    updatePaymentApplication(id, body) {
        const url = `/api/v1/PaymentApplications/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Payment Application referred to by this unique identifier.
     *
     * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
     *
     * @param id The unique Lockstep Platform ID number of the Payment Application to delete; NOT the customer's ERP key
     */
    deletePaymentApplication(id) {
        const url = `/api/v1/PaymentApplications/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Payment Applications within this account and returns the records as created.
     *
     * A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
     *
     * @param body The Payment Applications to create
     */
    createPaymentApplications(body) {
        const url = `/api/v1/PaymentApplications`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Payment Applications for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  A Payment Application is created by a business who receives a Payment from a customer.  A customer may make a single Payment to match an Invoice exactly, a partial Payment for an Invoice, or a single Payment may be made for multiple smaller Invoices.  The Payment Application contains information about which Invoices are connected to which Payments and for which amounts.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Invoice
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryPaymentApplications(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/PaymentApplications/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class PaymentsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the Payment specified by this unique identifier, optionally including nested data sets.
     *
     * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param id The unique Lockstep Platform ID number of this Payment; NOT the customer's ERP key
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Applications, Notes, Attachments, CustomFields
     */
    retrievePayment(id, include) {
        const url = `/api/v1/Payments/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates an existing Payment with the information supplied to this PATCH call.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param id The unique Lockstep Platform ID number of the Payment to update; NOT the customer's ERP key
     * @param body A list of changes to apply to this Payment
     */
    updatePayment(id, body) {
        const url = `/api/v1/Payments/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Deletes the Payment referred to by this unique identifier.
     *
     * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param id The unique Lockstep Platform ID number of the Payment to delete; NOT the customer's ERP key
     */
    deletePayment(id) {
        const url = `/api/v1/Payments/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Creates one or more Payments within this account and returns the records as created.
     *
     * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param body The Payments to create
     */
    createPayments(body) {
        const url = `/api/v1/Payments`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Payments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Applications, Notes, Attachments, CustomFields
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryPayments(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Payments/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries Payments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  This query endpoint provides extra data about the summary of payment information.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryPaymentSummaryView(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Payments/views/summary`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Retrieves aggregated payment data from your account.
     *
     */
    retrievePaymentDetailHeader() {
        const url = `/api/v1/Payments/views/detail-header`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Queries Payments within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website. A Payment represents money sent from one company to another. A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit. The creator of the Payment is identified by the CustomerId field, and the recipient of the Payment is identified by the CompanyId field. Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment. Payments that have not been fully applied have a nonzero UnappliedAmount value, which represents a deposit that has been paid and not yet applied to an Invoice.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryPaymentDetailView(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Payments/views/detail`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class ProvisioningClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new User or updates an Invited user based on metadata provided by the User during the onboarding process
     *
     * @param body Represents a User and their related metadata
     */
    provisionUserAccount(body) {
        const url = `/api/v1/Provisioning`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Updates user, company and group metadata for a User of status 'Onboarding' and finalizes a user's onboarding process by changing the user status to 'Active'
     *
     * @param body Represents a User and their related metadata
     */
    finalizeUserAccountProvisioning(body) {
        const url = `/api/v1/Provisioning/finalize`;
        return this.client.request("post", url, null, body);
    }
    /**
     *
     * @param body
     */
    provisionFreeDeveloperAccount(body) {
        const url = `/api/v1/Provisioning/free-account`;
        return this.client.request("post", url, null, body);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class ReportsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a current Cash Flow report for this account.
     *
     * The Cash Flow report indicates the amount of payments retrieved and invoices billed within a given timeframe.  You can use this report to determine the overall balance of money coming into and out of your accounts receivable and accounts payable businesses.
     *
     * @param timeframe Number of days of data to include for the Cash Flow Report (default is 30 days from today)
     */
    cashFlow(timeframe) {
        const url = `/api/v1/Reports/cashflow`;
        const options = {
            params: {
                timeframe,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Retrieves a current Daily Sales Outstanding (DSO) report for this account.
     *
     * Daily Sales Outstanding, or DSO, is a metric that indicates the average number of days that it takes for an invoice to be fully paid.  You can use this report to identify whether a company is improving on its ability to collect on invoices.
     *
     */
    dailySalesOutstanding() {
        const url = `/api/v1/Reports/dailysalesoutstanding`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Retrieves a current Risk Rate report for this account.
     *
     * Risk Rate is a metric that indicates the percentage of total AR balance left unpaid after 90 days.  You can use this report to identify the percentage of invoice value that is not being collected in a timely manner.
     *
     */
    riskRates() {
        const url = `/api/v1/Reports/riskrates`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Retrieves AR header information up to the date specified.
     *
     * @param reportDate The date of the report.
     * @param companyId Include a company to get AR data for a specific company, leave as null to include all Companies.
     */
    accountsReceivableHeader(reportDate, companyId) {
        const url = `/api/v1/Reports/ar-header`;
        const options = {
            params: {
                reportDate,
                companyId,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * The Aging Report contains information about the total dollar value of invoices broken down by their age. Last default or specified bucket treated as a catch all bucket for values that fit in that bucket or beyond.
     *
     * You can specify viewing parameters for the aging report such as currency code and date bucket configuration. You can also view aging data for an entire account or a specific company.
     *
     * This information is recalculated when invoice data changes.  After each invoice data change occurs, Lockstep queues up a calculation based on the current invoice data at that time.  This information is calculated and persisted for each customer so that the report will be available quickly.
     *
     * To force a recalculation of aging data, specify the `recalculate` option.  Note that forcing a recalculation will slow your API response time.
     *
     * @param CompanyId Company aging buckets are filtered by (all company aging returned if not company specified)
     * @param Recalculate Force api to recalculate aging data, cached data may be returned when set to false
     * @param CurrencyCode Currency aging buckets are converted to (all aging data returned without currency conversion if no currency is specified)
     * @param CurrencyProvider Currency provider currency rates should be returned from to convert aging amounts to (default Lockstep currency provider used if no data provider specified)
     * @param Buckets Customized buckets used for aging calculations (default buckets [0,30,60,90,120,180] will be used if buckets not specified)
     */
    invoiceagingreport(CompanyId, Recalculate, CurrencyCode, CurrencyProvider, Buckets) {
        const url = `/api/v1/Reports/aging`;
        const options = {
            params: {
                CompanyId,
                Recalculate,
                CurrencyCode,
                CurrencyProvider,
                Buckets,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Retrieves AR Aging Header information report broken down by aging bucket.
     *
     * The AR Aging Header report contains aggregated information about the `TotalInvoicesPastDue`, `TotalCustomers`, and their respective `PercentageOfTotalAr` grouped by their aging `ReportBucket`.
     *
     */
    accountsReceivableAgingHeader() {
        const url = `/api/v1/Reports/ar-aging-header`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Retrieves Attachment Header information for the requested companyId.
     *
     * The Attachment Header report contains aggregated information about the `TotalAttachments`, `TotalArchived`, and `TotalActive` attachment classifications.
     *
     * @param companyId Include a specific company to get Attachment data for, leave as null to include all Companies.
     */
    attachmentsHeaderInformation(companyId) {
        const url = `/api/v1/Reports/attachments-header`;
        const options = {
            params: {
                companyId,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class StatusClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Verifies that your application can successfully call the Lockstep Platform API and returns a successful code regardless of your authentication status or permissions.
     *
     * The Ping API can be used to verify that your app is working correctly.  The Ping API will always return 200 OK.  If you call this API and you receive a code other than 200 OK, you should check your network connectivity.  A response code of anything other than 200 means that a routing issue or proxy issue may prevent your application from reaching the Lockstep API
     *
     */
    ping() {
        const url = `/api/v1/Status`;
        return this.client.request("get", url, null, null);
    }
    /**
     * Generates an error code that your program may use to test handling of common types of error conditions.
     *
     * * If you specify `?err=500`, you will receive a 500 internal server error. * If you specify `?err=timeout`, the API will stall for 90 seconds and then return 200 OK.  Many network connections will drop after 60 seconds of no activity. * If you do not specify any of these errors, the API will return 200 OK.
     *
     * The Error Test API allows you to test whether your client program is capable of handling certain types of error codes.  Developers writing libraries may find it useful to create integration tests that verify that their code can correctly detect the difference between a validation error resulting in a 400 error code, a network timeout resulting in a broken network connection, and a server error resulting in a 500 error code.  You may use the Error Test API to verify that your code is able to identify and handle these cases correctly.
     *
     * @param err The type of error test to execute. Supported error types: 500, timeout
     */
    errorTest(err) {
        const url = `/api/v1/Status/testing`;
        const options = {
            params: {
                err,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class SyncClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Requests a new Sync task from the Application specified in the request and returns a token that can be used to check the progress and status of the task.
     *
     * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
     *
     * @param body Information about the Sync to execute
     */
    createSync(body) {
        const url = `/api/v1/Sync`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Requests a new Sync task from a ZIP file you provide.  This ZIP file can contain one or more files with data from the customer's platform.  Individual files can be in the format CSV or JSONL (JSON with Lines).
     *
     * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
     *
     */
    uploadSyncFile() {
        const url = `/api/v1/Sync/zip`;
        return this.client.request("post", url, null, null);
    }
    /**
     * Updates an existing Sync with the information supplied to this PATCH call.
     *
     * This API is restricted to internal service users and may not be called by customers or partners.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  For example, you can provide the field name "IsActive" and specify the new value "False"; this API will then change the value of IsActive to false.
     *
     * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
     *
     * @param id The unique ID number of the Sync to update
     * @param body A list of changes to apply to this Application
     */
    updateSync(id, body) {
        const url = `/api/v1/Sync/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Retrieves the status and information about a Sync operation by the requested ID.  Provides status and progress information about this task.
     *
     * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
     *
     * @param id The unique ID number of the Sync task to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Details
     */
    retrieveSync(id, include) {
        const url = `/api/v1/Sync/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries Sync tasks for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
     *
     * A Sync task represents an action performed by an Application for a particular account.  An Application can provide many different tasks as part of their capabilities.  Sync tasks are executed in the background and will continue running after they are created.  Use one of the creation APIs to request execution of a task. To check on the progress of the task, call GetSync or QuerySync.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Details
     * @param order The sort order for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    querySyncs(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/Sync/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class UserAccountsClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the User with this identifier.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param id The unique ID number of the User to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields, AccountingRole
     */
    retrieveUser(id, include) {
        const url = `/api/v1/UserAccounts/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Updates a User that matches the specified id with the requested information.
     *
     * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param id The unique ID number of the User to retrieve
     * @param body A list of changes to apply to this User
     */
    updateUser(id, body) {
        const url = `/api/v1/UserAccounts/${id}`;
        return this.client.request("patch", url, null, body);
    }
    /**
     * Disable the user referred to by this unique identifier.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param id The unique Lockstep Platform ID number of this User
     */
    disableUser(id) {
        const url = `/api/v1/UserAccounts/${id}`;
        return this.client.request("delete", url, null, null);
    }
    /**
     * Reenable the user referred to by this unique identifier.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param id The unique Lockstep Platform ID number of this User
     */
    reenableUser(id) {
        const url = `/api/v1/UserAccounts/reenable`;
        const options = {
            params: {
                id,
            },
        };
        return this.client.request("post", url, options, null);
    }
    /**
     * Invite a user with the specified email to join your accounting group. The user will receive an email to set up their account.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param body The user to invite
     */
    inviteUser(body) {
        const url = `/api/v1/UserAccounts/invite`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Retrieves invite information for the specified invite token.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param code The code of the invite
     */
    retrieveInviteData(code) {
        const url = `/api/v1/UserAccounts/invite`;
        const options = {
            params: {
                code,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Transfer the ownership of a group to another user. This API must be called by the current owner of the group.
     *
     * A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param body
     */
    transferOwner(body) {
        const url = `/api/v1/UserAccounts/transfer-owner`;
        return this.client.request("post", url, null, body);
    }
    /**
     * Queries Users for this account using the specified filtering, sorting, nested fetch, and pagination rules requested. A User represents a person who has the ability to authenticate against the Lockstep Platform and use services such as Lockstep Inbox.  A User is uniquely identified by an Azure identity, and each user must have an email address defined within their account.  All Users must validate their email to make use of Lockstep platform services.  Users may have different privileges and access control rights within the Lockstep Platform.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Notes, Attachments, CustomFields, AccountingRole
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryUsers(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/UserAccounts/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
class UserRolesClient {
    /**
     * Internal constructor for this client library
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the User Role with this identifier.
     *
     * @param id The unique ID number of the User Role to retrieve
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     */
    retrieveUserRole(id, include) {
        const url = `/api/v1/UserRoles/${id}`;
        const options = {
            params: {
                include,
            },
        };
        return this.client.request("get", url, options, null);
    }
    /**
     * Queries User Roles for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
     *
     * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
     * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageSize The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
     */
    queryUserRoles(filter, include, order, pageSize, pageNumber) {
        const url = `/api/v1/UserRoles/query`;
        const options = {
            params: {
                filter,
                include,
                order,
                pageSize,
                pageNumber,
            },
        };
        return this.client.request("get", url, options, null);
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
/**
 * Represents a response to an API call.  The status value contains the HTTP status code returned from the request.
 * If successful, value will be non-null.  If failed,
 */
class LockstepResponse {
    constructor(success, status) {
        this.success = success;
        this.status = status;
        this.value = null;
        this.error = null;
    }
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
/**
 * Client object used to communicate with the Lockstep Platform API
 */
class LockstepApi {
    /**
     * Internal constructor for the Lockstep API client
     */
    constructor(customUrl) {
        this.version = "2022.4.32";
        this.bearerToken = null;
        this.apiKey = null;
        this.sdkName = "TypeScript";
        this.machineName = null;
        this.appName = null;
        this.serverUrl = customUrl;
        this.Activities = new ActivitiesClient(this);
        this.ApiKeys = new ApiKeysClient(this);
        this.AppEnrollments = new AppEnrollmentsClient(this);
        this.Applications = new ApplicationsClient(this);
        this.Attachments = new AttachmentsClient(this);
        this.CodeDefinitions = new CodeDefinitionsClient(this);
        this.Companies = new CompaniesClient(this);
        this.Contacts = new ContactsClient(this);
        this.CreditMemoApplied = new CreditMemoAppliedClient(this);
        this.Currencies = new CurrenciesClient(this);
        this.CustomFieldDefinitions = new CustomFieldDefinitionsClient(this);
        this.CustomFieldValues = new CustomFieldValuesClient(this);
        this.Definitions = new DefinitionsClient(this);
        this.Emails = new EmailsClient(this);
        this.InvoiceHistory = new InvoiceHistoryClient(this);
        this.Invoices = new InvoicesClient(this);
        this.Leads = new LeadsClient(this);
        this.Notes = new NotesClient(this);
        this.PaymentApplications = new PaymentApplicationsClient(this);
        this.Payments = new PaymentsClient(this);
        this.Provisioning = new ProvisioningClient(this);
        this.Reports = new ReportsClient(this);
        this.Status = new StatusClient(this);
        this.Sync = new SyncClient(this);
        this.UserAccounts = new UserAccountsClient(this);
        this.UserRoles = new UserRolesClient(this);
    }
    /**
     * Construct a new Lockstep API client to target the specific environment.
     *
     * @param env The environment to use, either "prd" for production or "sbx" for sandbox.
     * @returns The Lockstep API client to use
     */
    static withEnvironment(env) {
        let url = "https://api.lockstep.io";
        switch (env) {
            case "prd":
                url = "https://api.lockstep.io";
                break;
            case "sbx":
                url = "https://api.sbx.lockstep.io";
                break;
        }
        return new LockstepApi(url);
    }
    /**
     * Construct an unsafe client that uses a non-standard server; this can be necessary
     * when using proxy servers or an API gateway.  Please be careful when using this
     * mode.  You should prefer to use `withEnvironment()` instead wherever possible.
     *
     * @param unsafeUrl The non-Lockstep URL to use for this client
     * @returns The Lockstep API client to use
     */
    static withCustomEnvironment(unsafeUrl) {
        return new LockstepApi(unsafeUrl);
    }
    /**
     * Configure this Lockstep API client to use a JWT bearer token.
     * More documentation is available on [JWT Bearer Tokens](https://developer.lockstep.io/docs/jwt-bearer-tokens).
     *
     * @param token The JWT bearer token to use for this API session
     */
    withBearerToken(token) {
        this.bearerToken = token;
        this.apiKey = null;
        return this;
    }
    /**
     * Configures this Lockstep API client to use an API Key.
     * More documentation is available on [API Keys](https://developer.lockstep.io/docs/api-keys).
     *
     * @param apiKey The API key to use for this API session
     */
    withApiKey(apiKey) {
        this.apiKey = apiKey;
        this.bearerToken = null;
        return this;
    }
    /**
     * Configures this Lockstep API client to use an application name
     *
     * @param appName The Application Name to use for this API session
     */
    withApplicationName(appName) {
        this.appName = appName;
        return this;
    }
    /**
     * Construct headers for a request
     */
    getHeaders() {
        const headers = {
            SdkName: this.sdkName,
            SdkVersion: this.version,
            MachineName: os__namespace.hostname(),
        };
        if (this.appName !== null) {
            headers["ApplicationName"] = this.appName;
        }
        if (this.bearerToken !== null) {
            headers["Authorization"] = `Bearer ${this.bearerToken}`;
        }
        else if (this.apiKey !== null) {
            headers["ApiKey"] = this.apiKey;
        }
        return headers;
    }
    /**
     * Make a GET request using this client
     */
    async request(method, path, options, body) {
        const requestConfig = {
            url: new url__namespace.URL(path, this.serverUrl).href,
            method,
            params: options,
            data: body,
            headers: this.getHeaders(),
        };
        const result = await axios__namespace.default.request(requestConfig);
        const response = new LockstepResponse(result.status >= 200 && result.status < 300, result.status);
        if (response.success) {
            response.value = result.data;
        }
        else {
            response.error = result.data;
        }
        return response;
    }
}

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
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
/**
 * Represents a failed request.
 */
class ErrorResult {
}
/**
 * Not intended to be used
 */
class TestTimeoutException extends ErrorResult {
}

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

var DataModels = /*#__PURE__*/Object.freeze({
    __proto__: null
});

/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2022.4.32
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */
module.exports = {
    DataModels,
    ErrorResult,
    LockstepApi,
    LockstepResponse,
    TestTimeoutException,
    ActivitiesClient,
    ApiKeysClient,
    AppEnrollmentsClient,
    ApplicationsClient,
    AttachmentsClient,
    CodeDefinitionsClient,
    CompaniesClient,
    ContactsClient,
    CreditMemoAppliedClient,
    CurrenciesClient,
    CustomFieldDefinitionsClient,
    CustomFieldValuesClient,
    DefinitionsClient,
    EmailsClient,
    InvoiceHistoryClient,
    InvoicesClient,
    LeadsClient,
    NotesClient,
    PaymentApplicationsClient,
    PaymentsClient,
    ProvisioningClient,
    ReportsClient,
    StatusClient,
    SyncClient,
    UserAccountsClient,
    UserRolesClient,
};
