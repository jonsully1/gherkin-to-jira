const {
  globals: { JEST_BASE_URL },
} = require('./jest/config/integration');

const headers = {
  'Content-Type': 'application/json',
};

const get = async (path) =>
  fetch(`${JEST_BASE_URL}${path}`, { method: 'GET', headers });

const post = async (path, body) =>
  fetch(`${JEST_BASE_URL}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });

module.exports = {
  get,
  post,
};
