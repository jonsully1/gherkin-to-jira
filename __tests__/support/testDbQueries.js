const queries = {
  insert: {
    properties: `INSERT INTO property (agentId, description, beds, bathrooms, deposit) VALUES ?`,
  },
};

module.exports = {
  ...queries,
};
