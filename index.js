const gherkin = require('@cucumber/gherkin');
// eslint-disable-next-line node/no-extraneous-require
const messages = require('@cucumber/messages');
const fs = require('fs');

const featureFileToJson = (path) => {
  try {
    const uuidFn = messages.IdGenerator.uuid();
    const builder = new gherkin.AstBuilder(uuidFn);
    const matcher = new gherkin.GherkinClassicTokenMatcher(); // or Gherkin.GherkinInMarkdownTokenMatcher()

    // Read the contents of a Gherkin feature file
    const featureFileString = fs.readFileSync(path, { encoding: 'utf8' });

    // parse the string to JSON using @cucumber/gherkin
    const parser = new gherkin.Parser(builder, matcher);
    const gherkinDocument = parser.parse(featureFileString);
    return gherkinDocument;

    // compile the JSON data into a format suitable to make the REST API call:
    // Look here: https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/#:~:text=Creating%20an%20issue%20using%20the,ID%20of%20the%20issue%20type.

    // Make the API call

    // handle the response
  } catch (e) {
    // handle the error
    console.log({ e });
  }
};

module.exports = {
  featureFileToJson,
};
