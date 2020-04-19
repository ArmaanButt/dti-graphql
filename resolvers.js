const { fetchType, evalMetric } = require("./utils");

const resolvers = {
  Query: {
    evalMetric,
    LineListRecord: async (_, { filter }) => {
      let results = await fetchType("linelistrecord", filter);

      return results.map((lineListRecord) => {
        lineListRecord.location = lineListRecord.location.id;
        return lineListRecord;
      });
    },
    OutbreakLocation: async (_, { filter }) => {
      let results = await fetchType("OutbreakLocation", filter);
      return results;
    },
    BiologicalAsset: async (_, { filter }) => {
      let results = await fetchType("BiologicalAsset", filter);
      return results;
    },
    Sequence: async (_, { filter }) => {
      let results = await fetchType("Sequence", filter);
      return results;
    },
    Subsequence: async (_, { filter }) => {
      let results = await fetchType("Subsequence", filter);
      return results;
    },
    AminoAcidLookup: async (_, { filter }) => {
      let results = await fetchType("AminoAcidLookup", filter);
      return results;
    },
    NucleotideLookup: async (_, { filter }) => {
      let results = await fetchType("NucleotideLookup", filter);
      return results;
    },
    BiblioEntry: async (_, { filter }) => {
      let results = await fetchType("BiblioEntry", filter);
      return results;
    },
    TherapeuticAsset: async (_, { filter }) => {
      let results = await fetchType("TherapeuticAsset", filter);
      return results;
    },
    ExternalLink: async (_, { filter }) => {
      let results = await fetchType("ExternalLink", filter);
      return results;
    },
  },
};

exports.resolvers = resolvers;
