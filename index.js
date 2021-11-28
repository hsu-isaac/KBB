var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

apiInstance.getDataSetId(function(error, data, response) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('data', data)
})
