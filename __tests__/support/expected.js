const getAgentPropertiesSuccess = {
  message: '2 properties found for this agent',
  agentProperties: [
    {
      id: 1,
      agentId: 1,
      beds: 1,
      bathrooms: 1,
      deposit: 0,
    },
    {
      id: 2,
      agentId: 1,
      beds: 2,
      bathrooms: 1,
      deposit: 0,
    },
  ],
};

const notFound = { message: 'Not found' };

const invalidParams = { message: 'Invalid parameters' };

module.exports = {
  notFound,
  invalidParams,
  getAgentPropertiesSuccess,
};
