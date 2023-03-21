const path = require('path');
const { featureFileToJson, getFilePaths } = require('./index');

// // Parse the contents of a Gherkin feature file
const filePath = path.resolve('./features/login.feature');
const gherkinJSON = featureFileToJson(filePath);
console.log({ gherkinJSON }, gherkinJSON.feature.children);

// get the full path of each feature file in the features directory
// const featureFilePaths = [];
// const filePaths = getFilePaths('./features');

// compile the JSON data into a format suitable to make the REST API call:
// Look here: https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/#:~:text=Creating%20an%20issue%20using%20the,ID%20of%20the%20issue%20type.

// Make the API call

// handle the response
