import { LockstepApi } from "../APIClient.js"

// Using an API key
console.log("Creating client");
var client = LockstepApi.withEnvironment("sbx").withApiKey("TEST NOT A REAL KEY");
console.log("About to call ping");
client.Status.ping().then(result => {
    console.log("Result: " + JSON.stringify(result));
});
console.log("Started ping call");
