import fetch from "node-fetch";

const { doesNotMatch } = require('assert');
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

let datasetId = '';
var opts = {};

apiInstance.getDataSetId(function(error, data, response) {
  if (error) {
    console.error(error);
    return;
  }
  datasetId = data.datasetId
})

fetch(`https://api.coxauto-interview.com/api/${datasetId}/answer`, {
  method: 'POST',
  headers: {
    'Content-Type':'application/json',
  },
  body: JSON.stringify(datasetId),
})
