# Lockstep Platform API SDK for Typescript and Javascript

![npm](https://img.shields.io/npm/v/lockstep-sdk)

This SDK allows you to work with the [Lockstep Platform API](https://developer.lockstep.io) in JavaScript and TypeScript.  JavaScript developers will find a fully featured library with convenient functions to automate most of the method calls within the Lockstep API; developers using TypeScript will find a rich definition of strict types.  Both languages will have access to docblocks, hover, autocomplete, and convenience features to make your code easier to write.

Dependencies:
* [Axios](https://www.npmjs.com/package/axios)

# Using this SDK

This tutorial will walk you through the basics of creating a project that uses the Lockstep Platform SDK.

1. Let's begin by creating a new project with a skeleton `package.json` file using in NodeJS:

```bash
> npm init --y
```

2. If you choose to use TypeScript, you can now add TypeScript features to this project.  The following steps will install TypeScript, create a `tsconfig.json` file, and gain access to most built-in types for NodeJS:

```bash
> npm install typescript
> npx tsc --init
> npm install -D @types/node
```

3. Add the Lockstep SDK to your project via Node Package Manager:

```bash
> npm install lockstep-sdk
```

4. Obtain a [free Lockstep developer account](https://developer.lockstep.io/reference/post_api-v1-provisioning-free-account) from the [Lockstep developer site](https://developer.lockstep.io/).  When you fill out your information, you will receive an email with an API key.
5. Set your API key to an environment variable such as `LOCKSTEP_APIKEY` so that it will not be committed to source control.
6. Create a basic `index.ts` file for your project that creates a Lockstep API client:

```typescript
import { LockstepApi } from 'lockstep-sdk';

var client = LockstepApi
    .withEnvironment("sbx")
    .withApiKey(process.env["LOCKSTEP_APIKEY"]);
```
7. Make an API call and check the result:

```typescript
var status = await client.Status.ping();
if (status.success) {
    if (status.value?.loggedIn) {
        console.log(`Logged in as ${status.value.userName}`);
    } else {
        console.log(`API key is not recognized: ${status.value?.errorMessage}`);
    }
}
```

You're ready to begin writing code with the Lockstep API!
