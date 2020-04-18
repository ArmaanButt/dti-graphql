const fetch = require("node-fetch");

let fetchType = async (type, filter) => {
  if (filter === undefined) {
    filter = "1==1";
  }

  try {
    let result = await c3Request(type, "fetch", { spec: { filter } });
    return result.objs;
  } catch (e) {
    console.log(e);
  }

  return;
};

let evalMetric = async (_, { type, id, metric, interval, start, end }) => {
  let spec = {
    spec: {
      ids: [id],
      expressions: [metric],
      interval,
      start,
      end,
    },
  };
  try {
    let result = await c3Request(type, "evalmetrics", spec);

    return result.result[id][metric];
  } catch (e) {
    console.log(e);
  }
};

let c3Request = async (type, method, spec) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(spec),
  };

  try {
    let response = await fetch(
      `https://api.c3.ai/covid/api/1/${type}/${method}`,
      requestOptions
    );

    let data = await response.json();
    // console.log(data);

    return data;
  } catch (e) {
    console.log(e);
  }

  return data;
};

exports.fetchType = fetchType;
exports.evalMetric = evalMetric;
exports.c3Request = c3Request;
