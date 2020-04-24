# GraphQL server for C3 DTI Covid Data Lake

## Instructions:

```
npm install
npm start
```

## Example Queries

```
query {
  evalMetric(type: "outbreaklocation",
    				 id: "Ontario_Canada",
    				 metric: JHU_ConfirmedCases,
    				 interval: DAY,
    				 start: "2020-01-01",
    				 end: "2020-03-30") {
    data,
    dates
  }
}

query {
  OutbreakLocation(filter: "!contains(id,'_')") {
    id,
    name,
    population2018
  }
}

```
