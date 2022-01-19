# Lockstep Platform API SDK for Typescript and Javascript

This SDK allows you to work with the [Lockstep Platform API](https://developer.lockstep.io) and maintains rich context-sensitive help, autocomplete, type safety, and convenience features to make your code easier to write.

## Step 1: Create work environment
First you'll need to install TypeScript and initalize it. You can do so in the terminal with
```bash
npm install typescript
npx tsc --init
npm init
npm install -D @types/node
```

In ```.tsconfig``` set
```typescript
"target": "ES2021"
"lib": ["DOM", "ES2021"]
"module": "ES2015"
```

In ```package.json``` add:
```javascript
"type": "module"
```

## Step 2: Setting up the lockstep-sdk
Now it's time to install the SDK. In your terminal do
```bash
npm install lockstep-sdk
```

Then, navigate to ```./node_modules/lockstep-sdk```
Here, install and initialize TypeScript in your termimal
```bash
npm install typescript
npx tsc --init
```

In ```.tsconfig``` set
```typescript
"target": "ES2021"
"lib": ["DOM", "ES2021"]
"module": "ES2015"
```

Next, navigate to ```./dist/clients```.
In your terminal, run
```bash
npx tsc ActivitiesClient.d.ts
```

## Step 3: Writing the program
Navigate to the directory of your project.
Create an ```index.ts``` file

At the top of the ```index.ts``` file copy this program to print the invoice id and oustanding balance of invoices and replace ```API_KEY``` with your own API Key.
```typescript
import { LockstepApi } from "./node_modules/lockstep-sdk/dist/LockstepApi.js"

console.log("Creating client");
var client = LockstepApi.withEnvironment("sbx").withApiKey(API_KEY);
console.log("About to call ping");

console.log("Started ping call");
async function invoice() {
    try {
        var pageNumbers = 0;
        var count = 0;
        while (pageNumbers<10) {
            var invoices = await client.Invoices.queryInvoices("invoiceDate > 2021-12-01", "Customer", "invoiceDate asc", 100, pageNumbers);

            if(!invoices.success || invoices?.value?.records?.length == 0) {
                break;
            }

            invoices?.value?.records?.forEach(invoice => {
                console.log("invoiceId:", invoice.invoiceId);
                console.log("oustandingBalance:", invoice.outstandingBalanceAmount);
                console.log("");
            });

            pageNumbers++;
        }
    } catch (error) {
        console.error(error);
    }    
}

invoice();
```

Now, compile the code in your terminal using
```bash
npx tsc index.ts
```

In ```index.js``` replace
```javascript
exports.__esModule = true;
var LockstepApi_js_1 = require("./node_modules/lockstep-sdk/dist/LockstepApi.js");
```
with
```javascript
export const __esModule = true;
import { LockstepApi } from "./node_modules/lockstep-sdk/dist/LockstepApi.js";
```

Now run the program in your terminal with
```bash
node index.js
```

## Step 3 Continued: Expected results
```bash
invoiceId: 53c1939e-2677-4ea7-ab3f-a2f7e483f139
oustandingBalance: 1726

invoiceId: 946ff7f4-2bd5-47ff-8fa0-9c83f3d0e6bf
oustandingBalance: 3161

...
```
