const { fetchType, evalMetric } = require("./utils");

const resolvers = {
  Query: {
    LineListRecord: async (_, { filter }) => {
      let results = await fetchType("linelistrecord", filter);

      return results.map((lineListRecord) => {
        lineListRecord.location = lineListRecord.location.id;
        return lineListRecord;
      });
    },
    evalMetric,
  },
};

exports.resolvers = resolvers;
